export interface CuratedImage {
  src: string;
  title: string;
  alt: string;
}

export const STATIC_PAGE_VISUALS: Record<
  "what-is-hydrogen" | "cost",
  CuratedImage
> = {
  "what-is-hydrogen": {
    src: "/curated-images/interface-abstract/ia-control-panel-1.jpg",
    title: "Abstract interface panel",
    alt: "Abstract interface panel with graph elements, sliders, and control regions.",
  },
  cost: {
    src: "/curated-images/data-viz/dv-monitoring-screen-1.jpg",
    title: "Monitoring display",
    alt: "Dark monitoring display with graph modules and green system metrics.",
  },
} as const;
