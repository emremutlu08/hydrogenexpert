export {};

interface JsonLdCheck {
  url: string;
  status: number;
  jsonLdBlocks: number;
  schemaTypes: string[];
  errors: string[];
  warnings: string[];
}

const DEFAULT_ROUTES = [
  '/',
  '/shopify-hydrogen-expert',
  '/shopify-hydrogen-developer',
  '/shopify-headless-commerce',
  '/shopify-storefront-api-developer',
  '/case-studies/bayam-jewelry',
  '/case-studies/rebel-bunny',
  '/articles/shopify-hydrogen-seo-checklist',
];

function normalizeBase(base: string) {
  return base.endsWith('/') ? base.slice(0, -1) : base;
}

function buildUrl(base: string, routeOrUrl: string) {
  if (/^https?:\/\//.test(routeOrUrl)) return routeOrUrl;
  return `${normalizeBase(base)}${routeOrUrl.startsWith('/') ? routeOrUrl : `/${routeOrUrl}`}`;
}

function extractJsonLd(html: string) {
  const blocks: string[] = [];
  const regex = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(html))) {
    blocks.push(match[1].trim());
  }
  return blocks;
}

function collectTypes(value: unknown, out: Set<string>) {
  if (!value || typeof value !== 'object') return;
  if (Array.isArray(value)) {
    value.forEach(item => collectTypes(item, out));
    return;
  }
  const obj = value as Record<string, unknown>;
  const type = obj['@type'];
  if (typeof type === 'string') out.add(type);
  if (Array.isArray(type)) type.forEach(t => typeof t === 'string' && out.add(t));
  if (Array.isArray(obj['@graph'])) collectTypes(obj['@graph'], out);
}

function validateObject(value: unknown, url: string, warnings: string[]) {
  if (!value || typeof value !== 'object') return;
  const nodes = Array.isArray(value) ? value : [value];
  for (const node of nodes) {
    if (!node || typeof node !== 'object') continue;
    const obj = node as Record<string, unknown>;
    const graph = obj['@graph'];
    if (Array.isArray(graph)) validateObject(graph, url, warnings);
    const type = obj['@type'];
    const types = Array.isArray(type) ? type : [type];
    if (types.includes('BreadcrumbList') && !obj.itemListElement) warnings.push(`${url}: BreadcrumbList missing itemListElement`);
    if ((types.includes('Organization') || types.includes('Person') || types.includes('ProfessionalService')) && !obj['@id']) warnings.push(`${url}: ${String(type)} missing stable @id`);
    if ((types.includes('Service') || types.includes('ProfessionalService')) && !obj.name) warnings.push(`${url}: ${String(type)} missing name`);
    if (types.includes('Article') && !obj.headline) warnings.push(`${url}: Article missing headline`);
  }
}

async function checkUrl(url: string): Promise<JsonLdCheck> {
  const errors: string[] = [];
  const warnings: string[] = [];
  const response = await fetch(url, { headers: { 'User-Agent': 'HydrogenExpert structured-data validator' } });
  const html = await response.text();
  const blocks = extractJsonLd(html);
  const types = new Set<string>();
  if (!blocks.length) warnings.push(`${url}: no JSON-LD blocks found`);
  for (const [index, block] of blocks.entries()) {
    try {
      const parsed = JSON.parse(block);
      collectTypes(parsed, types);
      validateObject(parsed, url, warnings);
    } catch (error) {
      errors.push(`${url}: JSON-LD block ${index + 1} is not valid JSON: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  if (!html.includes('rel="canonical"') && !html.includes("rel='canonical'")) warnings.push(`${url}: canonical link not found in HTML`);
  return { url, status: response.status, jsonLdBlocks: blocks.length, schemaTypes: [...types].sort(), errors, warnings };
}

async function main() {
  const base = process.env.SEO_BASE_URL ?? 'https://hydrogenexpert.co';
  const routesArg = process.argv.find(arg => arg.startsWith('--routes='));
  const routes = routesArg ? routesArg.slice('--routes='.length).split(',').map(x => x.trim()).filter(Boolean) : DEFAULT_ROUTES;
  const urls = routes.map(route => buildUrl(base, route));
  const results = await Promise.all(urls.map(checkUrl));
  const errors = results.flatMap(result => result.errors);
  const warnings = results.flatMap(result => result.warnings);
  console.log(JSON.stringify({ ok: errors.length === 0, checked: results.length, results, warnings, errors }, null, 2));
  if (errors.length) process.exit(1);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
