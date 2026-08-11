import type { MetadataRoute } from "next";
import { firma } from "@/content/firma";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/oferta", "/realizacje", "/o-mnie", "/kontakt"];

  return routes.map((route) => ({
    url: `${firma.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
