# Codex Shopify Dev MCP Setup

HydrogenExpert content work must use Shopify AI Toolkit / Shopify Dev MCP for Shopify platform claims before editing public copy.

## Codex MCP Config

Add this MCP server to `~/.codex/config.toml` if it is not already present:

```toml
[mcp_servers.shopify-dev-mcp]
command = "npx"
args = ["-y", "@shopify/dev-mcp@latest"]
```

If `npx` hits local npm cache permissions on this machine, retry the probe with a temporary cache:

```bash
env npm_config_cache=/tmp/codex-npm-cache npx -y @shopify/dev-mcp@latest
```

## Live Probe

Inside a Codex session, a successful setup means the Shopify Dev MCP tools are callable, not just configured. Probe it in this order:

1. Call `learn_shopify_api` with `api: "hydrogen"` and a short Hydrogen content prompt.
2. Save the returned `conversationId`.
3. Call `search_docs_chunks` with that `conversationId`.
4. Search a concrete topic such as `Hydrogen SEO sitemap robots Oxygen production custom domain`.
5. Confirm results include official `shopify.dev` URLs.

If a task involves Storefront API GraphQL or Customer Account API GraphQL, call `learn_shopify_api` again with the API-specific surface and the same `conversationId`.

## Source Rules

- Use Shopify Dev MCP for Hydrogen, Oxygen, Storefront API, Customer Account API, analytics, consent, SEO, routing, deployment, and API behavior claims.
- Use Storefront MCP docs only when writing about agentic commerce for a selected store: catalog search, product discovery, cart operations, checkout handoff, policies, and FAQs.
- Use UCP docs when writing about cross-agent commerce capabilities, Catalog MCP, Checkout MCP, or the `/api/ucp/mcp` surface.
- Do not treat Storefront MCP as a replacement for Shopify Dev MCP.
- Do not generate GraphQL operations without validating them through Shopify Dev MCP schema validation.

## Current Foundation Sources

The foundation source registry in `lib/content-sources.ts` was seeded from Shopify Dev MCP checks on 2026-05-05 for:

- Hydrogen and Oxygen fundamentals.
- Hydrogen SEO, `sitemap.xml`, `robots.txt`, canonical URLs, JSON-LD, and Oxygen robots behavior.
- Hydrogen analytics and customer privacy consent.
- Storefront MCP and UCP checkout MCP.
- Customer Account API setup and Hydrogen integration.
