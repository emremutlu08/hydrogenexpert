import { describe, expect, it } from "vitest";

import { getAllContentRelations } from "../lib/content-relations";
import { PRODUCTION_NOTE_FRAMES } from "../lib/production-notes";
import {
  COURSE_MODULES,
  HYDROGEN_EXAMPLES,
  HYDROGEN_ISSUE_CATEGORIES,
  HYDROGEN_TEMPLATES,
  RESOURCE_CLUSTERS,
} from "../lib/traffic-foundation";

describe("traffic foundation content", () => {
  it("keeps the resource hub clusters useful", () => {
    expect(RESOURCE_CLUSTERS.length).toBeGreaterThanOrEqual(6);

    for (const cluster of RESOURCE_CLUSTERS) {
      expect(cluster.links.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("provides at least 10 sourced Hydrogen examples", () => {
    expect(HYDROGEN_EXAMPLES.length).toBeGreaterThanOrEqual(10);

    for (const example of HYDROGEN_EXAMPLES) {
      expect(example.whyItMatters).toBeTruthy();
      expect(example.takeaway).toBeTruthy();
      expect(example.source.href).toMatch(/^https:\/\//);
      expect(example.related.href).toMatch(/^\//);
    }
  });

  it("indexes issue categories with at least 3 entries each", () => {
    expect(HYDROGEN_ISSUE_CATEGORIES.length).toBeGreaterThanOrEqual(6);

    for (const category of HYDROGEN_ISSUE_CATEGORIES) {
      expect(category.entries.length).toBeGreaterThanOrEqual(3);
      for (const entry of category.entries) {
        expect(entry.post.href).toMatch(/^\/blog\//);
        expect(entry.template.href).toContain("/shopify-hydrogen-templates");
      }
    }
  });

  it("keeps templates copyable and connected", () => {
    expect(HYDROGEN_TEMPLATES.length).toBeGreaterThanOrEqual(8);

    for (const template of HYDROGEN_TEMPLATES) {
      expect(template.checklist.length).toBeGreaterThanOrEqual(6);
      expect(template.relatedIssueHref).toContain("/shopify-hydrogen-issues");
      expect(template.relatedGuideHref).toMatch(/^\//);
    }
  });

  it("maps course modules to guides, production notes, and templates", () => {
    expect(COURSE_MODULES.length).toBeGreaterThanOrEqual(4);

    for (const courseModule of COURSE_MODULES) {
      expect(courseModule.guides.length).toBeGreaterThanOrEqual(3);
      expect(courseModule.productionNotes.length).toBeGreaterThanOrEqual(1);
      expect(courseModule.templates.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("standardizes the first 5 production notes", () => {
    expect(PRODUCTION_NOTE_FRAMES).toHaveLength(5);

    for (const frame of PRODUCTION_NOTE_FRAMES) {
      expect(frame.problem).toBeTruthy();
      expect(frame.symptom).toBeTruthy();
      expect(frame.rootCause).toBeTruthy();
      expect(frame.fix).toBeTruthy();
      expect(frame.risk).toBeTruthy();
      expect(frame.relatedLinks.length).toBeGreaterThanOrEqual(3);
      expect(frame.relatedLinks.some((link) => link.href.includes("/shopify-hydrogen-issues"))).toBe(true);
      expect(frame.relatedLinks.some((link) => link.href.includes("/shopify-hydrogen-templates"))).toBe(true);
    }
  });

  it("keeps the related-links automation free of orphan entries", () => {
    const relations = getAllContentRelations();

    expect(relations.length).toBeGreaterThanOrEqual(10);
    for (const relation of relations) {
      expect(relation.related.length).toBeGreaterThanOrEqual(3);
    }
  });
});
