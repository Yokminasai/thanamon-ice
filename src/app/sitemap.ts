import { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { url: SITE.url, priority: 1.0 },
    { url: `${SITE.url}/about`, priority: 0.8 },
    { url: `${SITE.url}/products`, priority: 0.9 },
    { url: `${SITE.url}/service-areas`, priority: 0.8 },
    { url: `${SITE.url}/gallery`, priority: 0.6 },
    { url: `${SITE.url}/contact`, priority: 0.7 },
    { url: `${SITE.url}/factory-ice-mahachai`, priority: 0.9 },
    { url: `${SITE.url}/ice-mahachai`, priority: 0.9 },
    { url: `${SITE.url}/ice-samut-sakhon`, priority: 0.9 },
    { url: `${SITE.url}/ice-supplier-mahachai`, priority: 0.8 },
  ];

  return routes.map(({ url, priority }) => ({
    url,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
