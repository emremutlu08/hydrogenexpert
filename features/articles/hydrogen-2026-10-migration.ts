import type { Article } from "../../lib/articles";
import { OWNER } from "../../lib/site";

/**
 * Evergreen migration guide for legacy Hydrogen storefronts
 * (@shopify/hydrogen 2026.4.x and earlier) moving to Hydrogen 2026-10.
 *
 * Every platform claim is grounded in three Shopify sources, retrieved on
 * 2026-11-11: the Hydrogen 2026-10 changelog post, the "Migrate from legacy
 * Hydrogen" guide, and the @shopify/hydrogen package CHANGELOG (2026.10.0 to
 * 2026.10.3). Operator advice is written as advice, not as a Shopify fact.
 */
export const HYDROGEN_2026_10_MIGRATION_ARTICLE: Article = {
  title: "Migrate Legacy Hydrogen to Hydrogen 2026-10: A Checklist",
  slug: "hydrogen-2026-10-migration",
  description:
    "A source-backed checklist for moving a legacy Shopify Hydrogen storefront (2026.4.x and earlier) to Hydrogen 2026-10 without surprise build breaks.",
  category: "Migration",
  status: "published",
  publishAt: "2026-11-11T10:00:00+03:00",
  updatedAt: "2026-11-11T10:00:00+03:00",
  author: OWNER.name,
  metaTitle: "Hydrogen 2026-10 Migration: Legacy Hydrogen Checklist",
  metaDescription:
    "Move a legacy Hydrogen storefront to 2026-10: server entry, cart, customer accounts, analytics, CSP nonce, sitemap, and pinning to avoid build breaks.",
  h1: "How to migrate a legacy Shopify Hydrogen storefront to Hydrogen 2026-10",
  intro: [
    "Shopify made the new Hydrogen generally available on October 14, 2026. The headline change is structural: Hydrogen used to be a framework built on React Router, and starting with version 2026-10 it is a library that you add to the framework you already use.",
    "Shopify is clear that existing Hydrogen storefronts keep working and that there is nothing you need to do today. The risk is not that a legacy storefront stops working on its own. The risk is an unplanned upgrade, a loose version range, or a half-finished migration that builds cleanly while analytics, the cart drawer, or customer login quietly stop working. This guide is the checklist I would use to scope that move before any code changes.",
  ],
  summary: [
    "Legacy Hydrogen means a storefront on @shopify/hydrogen 2026.4.x or earlier, on Remix or React Router. In 2026-10 your app owns the server entry, the router, and the build, and Hydrogen gives you a Storefront API client, request handlers, and handler groups for the cart and customer accounts that you compose in a root middleware.",
    "The work splits into a fixed core (dependencies, scripts, Vite and React Router config, the root middleware, routes, and types) and feature work that depends on your store: Markets, customer accounts, analytics and consent, cart UI, CSP, and sitemaps. Until you are ready, pin @shopify/hydrogen so a caret range cannot pull 2026.10 into a 2026.4 project.",
  ],
  takeaways: [
    {
      label: "Who is legacy",
      value:
        "Any storefront whose package.json lists @shopify/hydrogen at a version earlier than 2026.10, whether it runs on Remix or React Router.",
    },
    {
      label: "Biggest build risk",
      value:
        "A ^2026.4.0 range can resolve to 2026.10. Before 2026.10.2 that failed with \"does not provide an export named 'hydrogen'\". Pin ~2026.4.0 until you migrate.",
    },
    {
      label: "Silent failures",
      value:
        "Analytics events, response headers, the cart drawer, and deferred loaders can break with no build error. Test them by hand after typecheck and build pass.",
    },
  ],
  sections: [
    {
      title: "What changed in Hydrogen 2026-10",
      body: [
        "Shopify's announcement describes the new Hydrogen as a framework-agnostic JavaScript library that adds Shopify commerce to an existing stack. It handles the cart, product variants, collection filters, predictive search, Markets, analytics, Shop Pay, and customer accounts, while your framework keeps routing, data loading, and rendering. Shopify ships starters for React Router and Next.js, and you can host anywhere, including Oxygen.",
        "For a legacy storefront the practical change is ownership of the request. In earlier versions Hydrogen created the Storefront API client, the cart, and the customer account client in server.ts and passed them to loaders through the load context, and its CLI ran the dev server and the build. In 2026-10 you build each request yourself in a root middleware, and development and builds use plain Vite and React Router commands.",
        "Hydrogen 2026-10 also moves to version 2026-10 of the Storefront API and the Customer Account API, up from 2026-04. The package changelog marks that as a breaking change. For example, typed Customer Account address mutations must send countryCode instead of the deprecated territoryCode, and Order.shippingTitle is removed.",
      ],
    },
    {
      title: "Who counts as legacy Hydrogen",
      body: [
        "Shopify's migration guide defines legacy Hydrogen as versions 2026-04 and earlier. Check package.json before you plan anything, because the Remix question and the Hydrogen question are separate migrations.",
      ],
      bullets: [
        "@shopify/hydrogen earlier than 2026.10: you need the Hydrogen migration, every step of it.",
        "@remix-run/* packages present: you also need the React Router 7 migration, alongside the Hydrogen one.",
        "react-router and @react-router/dev present, no @remix-run/* packages, and a react-router.config.ts file: you are already on React Router, so skip the Remix tasks but still do the Hydrogen migration.",
        "The shopify hydrogen upgrade command only upgrades within legacy Hydrogen. It does not move you to 2026-10.",
        "Requirements from the guide: Node.js 22.12 or later, or version 24, and your work committed before you start so you can compare each step.",
      ],
    },
    {
      title: "How to avoid build breaks: pin versions before you migrate",
      body: [
        "The @shopify/hydrogen 2026.10.2 changelog documents the failure mode directly: projects on 2026.4 whose ^2026.4.0 range resolved to 2026.10 failed at ESM link time with \"does not provide an export named 'hydrogen'\" and no hint about the cause. That release added back a deprecated hydrogen() export in @shopify/hydrogen/vite that throws an error naming the installed version, the ~2026.4.0 pin that keeps a project on the version it was built for, and the migration guide.",
        "The reason is the version scheme. A caret range like ^2026.4.0 accepts any later 2026.x release, so 2026.10 is inside the range even though it removes the framework layer that a 2026.4 project depends on. A tilde range like ~2026.4.0 only accepts patch releases of 2026.4.",
      ],
      ordered: [
        "If you are not migrating yet, change @shopify/hydrogen to ~2026.4.0 (or an exact 2026.4.x version) in package.json, reinstall, and commit the updated lockfile.",
        "Install in CI from the lockfile (for example npm ci) so a build never resolves a newer version than the one you tested.",
        "If an automated dependency tool opens update pull requests, do not merge a @shopify/hydrogen bump from 2026.4 to 2026.10 as a routine update. Treat it as the migration itself, or configure the tool to skip it until you plan the move.",
        "When you do migrate, follow the guide's version advice: do not update each package to its latest version on its own. Pin every React Router package to the same version, keep vite at version 8 and react and react-dom at version 19, and use the versions Shopify lists as tested with Hydrogen 2026-10 (the React Router starter template's package.json shows the versions for the current release).",
        "After you change dependencies for the migration, the guide says to delete node_modules and your lockfile and reinstall. Commit the new lockfile with the migration so the tested versions are the ones that deploy.",
      ],
    },
    {
      title: "Migration checklist part 1: dependencies, scripts, and build config",
      ordered: [
        "Install the new package with npm install @shopify/hydrogen.",
        "Remove @shopify/cli-hydrogen, @shopify/remix-oxygen, and react-router-dom. If the store is on Remix, remove the @remix-run/* packages and add react-router and @react-router/dev.",
        "Add @shopify/mini-oxygen 4.2.0 or later, which vite preview needs, and use @shopify/cli 4.4.0 or later as a development dependency.",
        "Replace the shopify hydrogen dev and shopify hydrogen build scripts with Vite and React Router commands (vite dev, react-router build). The guide's typecheck script runs react-router typegen, tsc, and hydrogen gql check --fail-on-warn.",
        "In vite.config.ts, remove the hydrogen() plugin. Add localHttps() from @shopify/hydrogen/vite and spread oxygen() from @shopify/mini-oxygen/vite before reactRouter().",
        "Add or update react-router.config.ts and set buildDirectory to dist. Without it, the guide warns, the build succeeds but the deploy uploads nothing. Enable React Router middleware for your React Router version; the guide's example uses the v8_middleware future flag.",
        "Keep your route files where they are. If you use flat route filenames, keep them with @react-router/fs-routes in app/routes.ts, and remove any hydrogenRoutes() wrapper. Renaming routes during the migration can drop them without an error.",
      ],
    },
    {
      title: "Migration checklist part 2: the server entry and root middleware",
      body: [
        "This is the core of the migration. createHydrogenContext() in server.ts is removed, and so are hydrogenContext, createRequestHandler() from Hydrogen, hydrogenRoutes(), hydrogenPreset(), and @shopify/hydrogen/oxygen. Their replacement is a root middleware in app/root.tsx.",
      ],
      ordered: [
        "Simplify server.ts so it only opens the cache, passes the Oxygen environment and waitUntil into a typed React Router context, and runs React Router's request handler.",
        "In the root middleware, create a request context and a Storefront API client for each request. Reuse the client's request context; the guide says creating a second one makes handleShopifyRoutes() throw.",
        "Run handleShopifyRoutes() before your router. It answers the routes Hydrogen owns, like /api/cart and /checkout. It returns a promise of a response or null synchronously, so check the result without awaiting it first.",
        "Pass the client to loaders through a typed React Router context, and replace context.storefront.query() with storefrontClient.graphql().",
        "If your router returns a 404, run handleShopifyRedirects(), which replaces storefrontRedirect().",
        "Call requestContext.applyResponseHeaders() on the response and pass routeTemplates to handleShopifyRoutes(). The guide lists both as easy to leave out with no error: without them Shopify's response headers are missing and ?variant= links on custom product paths do not redirect.",
        "Delete route files for paths the request handlers now own, like /api/cart, /checkout, cart permalinks, and /account/login, but keep a catch-all route because middleware only runs for matched routes.",
      ],
    },
    {
      title: "Migration checklist part 3: routes, types, and GraphQL",
      bullets: [
        "Replace json() with a plain object and defer() with an object that contains promises. The guide warns that a deferred loader migrated incorrectly can leave a section of the page loading forever with no error.",
        "Wrap each #graphql string in gql() from @shopify/hydrogen, or from @shopify/hydrogen/customer-account for Customer Account API queries, and add the @shopify/hydrogen/ts-plugin to tsconfig.json.",
        "Remove old generated files like storefrontapi.generated.d.ts and any gql.tada schema settings, and type results with ResultOf and the StorefrontApi namespace.",
        "Swap removed helpers: CacheLong(), CacheShort(), CacheNone(), and CacheCustom() become Cache.long(), Cache.short(), Cache.none(), and Cache(). Image, Money, Pagination, and the Seo helpers are gone, so use your own components, formatMoney(), the collection store, and React Router's meta export.",
        "Run npm run typecheck to find missed imports. hydrogen gql check catches invalid fields in gql() queries that tsc does not, and with --fail-on-warn it also fails on deprecated fields.",
        "Check the latest package changelog for renames after 2026.10.0. For example, 2026.10.3 renames createShopifyRouteTemplates to defineShopifyRouteTemplates and keeps the old name as a deprecated alias.",
      ],
    },
    {
      title: "Migration checklist part 4: the cart",
      body: [
        "The cart moves from loader data to a client-side store. createCartHandler() and the cart*Default() functions are replaced by createCartServerHandlers() at /api/cart, and CartForm, OptimisticInput, useOptimisticCart(), and useOptimisticData() are removed.",
      ],
      bullets: [
        "Use useCartForm() from createCartComponents() for line quantities, removals, discount codes, the note, and attributes, and useProductForm() from createProductComponents() for add to cart.",
        "Load the cart in the root loader with cartHandlers.get() and pass the result's data envelope to CartProvider as initialData, or the cart shows its empty state before it loads.",
        "Render every cart surface from the cart store. A deferred cart passed from the root loader leaves the drawer and cart page empty even though the header count updates.",
        "Open the cart drawer from the store's pending lines, not from a fetcher, because useFetchers() never sees cart store requests.",
        "If you wrapped createCartHandler() to add fields, pass a fragment to createCartServerHandlers() instead. Cart metafields need your own mutation route plus refresh() from useCartActions().",
      ],
    },
    {
      title: "Migration checklist part 5: customer accounts",
      bullets: [
        "Migrate in the order the guide gives: Markets first, then customer accounts, then analytics and consent, because each depends on the one before it.",
        "Import createCustomerAccountClient() from @shopify/hydrogen/customer-account and use it with createCustomerAccountServerHandlers() and createCustomerSession().",
        "Register the account handlers next to the cart handlers in handleShopifyRoutes(). They own /account/login, /account/logout, /account/authorize, and /account/refresh, so delete route files for those paths.",
        "Customer accounts need a cookie-backed session manager. Pass the same customer session to the cart handlers, and pass the cart handlers to the account handlers as cartServerHandlers, so the cart knows who is logged in.",
        "Customer login needs HTTPS even locally. Run the dev:https script and complete the full login flow before you call the migration done.",
      ],
    },
    {
      title: "Migration checklist part 6: analytics and consent",
      body: [
        "This is where I expect the quietest regressions. Hydrogen 2026-10 removes Analytics.Provider, the Analytics view components, useAnalytics(), getShopAnalytics(), and useCustomerPrivacy(). The event bus still exists, but nothing publishes events to it for you.",
      ],
      bullets: [
        "Render ShopifyScripts from @shopify/hydrogen/react in the root layout. The page view it dispatches is for Shopify's performance script, not for your analytics.",
        "Publish every event, including PAGE_VIEWED, to window.Shopify.analytics. Shopify analytics and destinations like GA4 read only the bus.",
        "Port product views, cart views, and cart changes too. Track cart changes with useCartAnalytics(), and build the shop payload in the root loader.",
        "Register your own destinations, like GTM, with addDestination(). The 2026.10.0 changelog removes the top-level analytics.subscribe() method, so consumers subscribe inside a destination's setup callback.",
        "If you publish product_viewed yourself, pass the variant's price object, not price.amount. 2026.10.0 changed ProductPayload.price to the MoneyV2 shape.",
        "Migrate consent settings at the same time, because consent controls which events reach destinations.",
      ],
    },
    {
      title: "Migration checklist part 7: CSP nonce",
      body: [
        "The migration guide lists createContentSecurityPolicy(), NonceProvider, and useNonce() as removed, with the instruction to use your own CSP code and pass the nonce to ShopifyScripts with the nonce prop.",
        "The package changelog then moved on. Version 2026.10.3 adds framework-independent createContentSecurityPolicy and getShopifyCspDirectives utilities. The returned policy applies its own response headers and exposes header for forwarding to a separate renderer such as Next.js. Nonces use Web Crypto, React nonce context remains app-owned, nonce policies prevent document caching, and nonce: false supports cached HTML. The same release exports getShopifyScriptHashes() so you can authorize Shopify's inline bootstraps with CSP hashes instead of a per-request nonce.",
        "My advice: do not port the legacy NonceProvider and useNonce() setup line by line. Decide first whether your pages need to be cacheable, then choose a nonce or hash policy, and check the current changelog and migration guide for the exact API on the version you install.",
      ],
    },
    {
      title: "Migration checklist part 8: sitemap and SEO tags",
      bullets: [
        "getSitemap(), getSitemapIndex(), and getSeoMeta() are not in Hydrogen 2026-10. Write your own sitemap queries and XML responses in a library file such as app/lib/sitemap.ts, and run them with storefront.graphql().",
        "Return SEO tags from React Router's meta export instead of the Seo helpers.",
        "Keep any URL changes your sitemap already made, like locale prefixes or renamed routes, so indexed URLs do not shift during the migration.",
        "Before launch, compare the old and new sitemap output and spot check canonical tags on product, collection, and content pages. This is my recommendation, not a step in Shopify's guide, but sitemap drift is the SEO risk I would check first.",
      ],
    },
    {
      title: "How to check the migration before it ships",
      body: [
        "Shopify's guide ends with the same two gates for every storefront: npm run typecheck and npm run build must both finish without errors. Then it lists areas that can stop working while the storefront still builds.",
      ],
      ordered: [
        "Analytics: confirm your app publishes page views, product views, cart views, and cart changes to the bus.",
        "Leftover imports: search the app for every removed export. ShopPayButton from @shopify/hydrogen/react and createCustomerAccountClient() from @shopify/hydrogen/customer-account are current imports.",
        "Cart: add, remove, and change quantities, and confirm the drawer opens when you add a product.",
        "Customer login: run dev:https and complete the full login flow.",
        "Variant selection: confirm selecting an option updates the page without a full navigation.",
        "Agent skills: Hydrogen ships a migrate-to-hydrogen-2026-10 skill (added in 2026.10.1), and npx @shopify/hydrogen skills sync keeps the skills matched to your installed version. The changelog notes the skill checks that GET /api/cart returns JSON from the cart handler, which is a quick way to confirm the root middleware runs.",
      ],
    },
  ],
  faq: [
    {
      question: "Do I have to migrate to Hydrogen 2026-10 right now?",
      answer:
        "No. Shopify's announcement says existing Hydrogen storefronts keep working as they do now and there is nothing you need to do today. What you should do now is pin @shopify/hydrogen, for example to ~2026.4.0, so a dependency update does not start the migration for you.",
    },
    {
      question: "Why does my build fail with \"does not provide an export named 'hydrogen'\"?",
      answer:
        "According to the @shopify/hydrogen 2026.10.2 changelog, that error came from 2026.4 projects whose ^2026.4.0 range resolved to 2026.10, which no longer has the legacy hydrogen() Vite plugin. Pin ~2026.4.0 to stay on the version the project was built for, or follow the migration guide to move to 2026.10.",
    },
    {
      question: "Does shopify hydrogen upgrade move my storefront to 2026-10?",
      answer:
        "No. The migration guide says the shopify hydrogen upgrade command only upgrades a storefront within legacy Hydrogen. Moving to 2026-10 is a manual migration of dependencies, config, the server entry, and each storefront feature.",
    },
    {
      question: "If my storefront is still on Remix, is this one migration or two?",
      answer:
        "Two. The guide treats moving from Remix to React Router 7 and moving off legacy Hydrogen as separate migrations, and it covers the Remix tasks inside the Hydrogen steps. A storefront already on React Router still needs the Hydrogen migration.",
    },
    {
      question: "What breaks without an error after the migration?",
      answer:
        "The guide calls out missing Shopify response headers when applyResponseHeaders() is left out, ?variant= links that stop redirecting without routeTemplates, deferred loaders that never resolve, an empty cart drawer when the cart still comes from loader data, and analytics that only sends page views. Test each one by hand after the build passes.",
    },
  ],
  conclusion:
    "If you run a legacy Hydrogen storefront and want a second opinion before you migrate, I can review the codebase and map which of these steps apply, what can break silently, and where the real risk sits. Start with a Scope & Risk Review and decide on the migration once the scope is clear.",
  links: [
    {
      href: "/shopify-hydrogen-audit",
      label: "Request a Scope & Risk Review",
      note: "Map the migration steps, silent-failure risks, and version pinning for your storefront before code changes.",
    },
    {
      href: "/articles/shopify-hydrogen-analytics-migration",
      label: "Analytics migration checklist",
      note: "Event maps, consent, and checkout attribution QA.",
    },
    {
      href: "/articles/hydrogen-deployment-checklist-oxygen-preview-production-qa",
      label: "Deployment and launch QA",
      note: "Preview and production checks after the migration builds.",
    },
    {
      href: "/shopify-hydrogen-support-retainer",
      label: "Ongoing Hydrogen support",
      note: "Keep upgrades and dependency changes owned after launch.",
    },
  ],
  sources: [
    {
      href: "https://shopify.dev/changelog/blog/hydrogen-2026-10-is-now-available",
      label: "Shopify: Hydrogen 2026-10 is now available",
      note: "Official announcement: library model, GA date, and guidance for existing storefronts.",
      external: true,
    },
    {
      href: "https://shopify.dev/docs/storefronts/hydrogen/migrate",
      label: "Shopify: Migrate from legacy Hydrogen",
      note: "Official step-by-step migration guide used for every checklist step.",
      external: true,
    },
    {
      href: "https://github.com/Shopify/hydrogen/blob/main/packages/hydrogen/CHANGELOG.md",
      label: "@shopify/hydrogen CHANGELOG",
      note: "Release notes for 2026.10.0 to 2026.10.3, including the version-range build break and CSP utilities.",
      external: true,
    },
  ],
};
