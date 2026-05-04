export interface ClientLogo {
  src?: string;
  alt: string;
  label: string;
  isCurrent?: boolean;
  link?: string;
}

export const clientLogos: readonly ClientLogo[] = [
  {
    src: "/brand/case-studies/eveshop-logo.png",
    alt: "EveShop",
    label: "EveShop",
    isCurrent: false,
    link: "/case-studies#eveshop",
  },
  {
    src: "/brand/case-studies/bayam-logo.svg",
    alt: "Bayam Jewelry",
    label: "Bayam Jewelry",
    isCurrent: true,
    link: "/case-studies#bayam",
  },
  {
    src: "/brand/case-studies/rebel-bunny-logo.png",
    alt: "Rebel Bunny Matcha",
    label: "Rebel Bunny",
    isCurrent: true,
    link: "/case-studies#rebel-bunny",
  },
] as const;
