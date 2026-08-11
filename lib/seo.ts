import type { Metadata } from "next";
import { firma } from "@/content/firma";

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${firma.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: firma.nazwaPelna,
      locale: "pl_PL",
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: firma.nazwaPelna }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}
