import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Zestha Vutura",
  tagline: "Navigating the Future of Prosperous Innovations with Zestha Vutura",
  description: "Empowering Growth with Cutting-Edge Solutions Rooted in Tradition.",
  description_short: "Empowering Growth with Cutting-Edge Solutions Rooted in Tradition.",
  url: "https://zestha-vutura.github.io",
  author: "Cmd, Zyd, Virgi, Telaga",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Software Services`,
  description: "Navigating the Future of Prosperous Innovations with Zestha Vutura",
  image: ogImageSrc,
};
