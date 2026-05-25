import Link from "next/link";

import type { Article } from "@/lib/articles";
import type { ServicePackage } from "@/lib/services";

function isArticle(article: Article | null): article is Article {
  return article !== null;
}

export function DeveloperArticleLinksSection({
  service,
  articles,
}: {
  service: ServicePackage;
  articles: readonly (Article | null)[];
}) {
  const publicArticles = articles.filter(isArticle);

  if (service.slug !== "shopify-hydrogen-developer" || publicArticles.length === 0) {
    return null;
  }

  return (
    <section className="card-soft space-y-5">
      <div className="max-w-3xl">
        <p className="eyebrow">Published articles</p>
        <h2 className="subsection-title mt-3">Evergreen hiring guides once they are public.</h2>
      </div>
      <div className="authority-links">
        {publicArticles.map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`} className="authority-link-card">
            <p className="authority-link-card__label">{article.category}</p>
            <h3 className="authority-link-card__title">{article.title}</h3>
            <p className="authority-link-card__body">{article.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function ExpertArticleLinksSection({
  service,
  articles,
}: {
  service: ServicePackage;
  articles: readonly (Article | null)[];
}) {
  const publicArticles = articles.filter(isArticle);

  if (
    (service.slug !== "shopify-hydrogen-experts" && service.slug !== "shopify-hydrogen-expert") ||
    publicArticles.length === 0
  ) {
    return null;
  }

  return (
    <section className="card-soft space-y-5">
      <div className="max-w-3xl">
        <p className="eyebrow">Published articles</p>
        <h2 className="subsection-title mt-3">Evaluation guides for expert-search intent.</h2>
      </div>
      <div className="authority-links">
        {publicArticles.map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`} className="authority-link-card">
            <p className="authority-link-card__label">{article.category}</p>
            <h3 className="authority-link-card__title">{article.title}</h3>
            <p className="authority-link-card__body">{article.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function AuditCostArticleLinkSection({
  service,
  article,
}: {
  service: ServicePackage;
  article: Article | null;
}) {
  if (service.slug !== "hydrogen-strategy-fit-audit" || !article) {
    return null;
  }

  return (
    <section className="card-soft space-y-5">
      <div className="max-w-3xl">
        <p className="eyebrow">Published article</p>
        <h2 className="subsection-title mt-3">Cost guidance once it is public.</h2>
      </div>
      <Link href={`/articles/${article.slug}`} className="authority-link-card">
        <p className="authority-link-card__label">{article.category}</p>
        <h3 className="authority-link-card__title">{article.title}</h3>
        <p className="authority-link-card__body">{article.description}</p>
      </Link>
    </section>
  );
}
