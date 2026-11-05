import type { MetadataRoute } from "next";
import { firma } from "@/content/firma";

const OSTATNIA_ZMIANA = new Date("2026-11-05");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/oferta", "/realizacje", "/o-mnie", "/kontakt"];

  return routes.map((route) => ({
    url: `${firma.url}${route}`,
    lastModified: OSTATNIA_ZMIANA,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
