import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { firma } from "@/content/firma";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studioekosystem.pl"),
  title: {
    default: "EKO-SYSTEM — Projekty i nadzór sieci sanitarnych",
    template: "%s — EKO-SYSTEM",
  },
  description:
    "Biuro projektowe branży sanitarnej. Projekty sieci wodociągowych, kanalizacji i nadzór inwestorski na Kujawach i Pomorzu.",
  openGraph: {
    title: "EKO-SYSTEM — Projekty i nadzór sieci sanitarnych",
    description:
      "Biuro projektowe branży sanitarnej. Projekty sieci wodociągowych, kanalizacji i nadzór inwestorski na Kujawach i Pomorzu.",
    url: "https://studioekosystem.pl",
    siteName: "EKO-SYSTEM",
    locale: "pl_PL",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "EKO-SYSTEM" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EKO-SYSTEM — Projekty i nadzór sieci sanitarnych",
    description:
      "Biuro projektowe branży sanitarnej. Projekty sieci wodociągowych, kanalizacji i nadzór inwestorski na Kujawach i Pomorzu.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: firma.nazwaPelna,
  image: `${firma.url}/logo/eko-system-logo.png`,
  telephone: firma.telefon,
  email: firma.email,
  url: firma.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: firma.adres.ulica,
    postalCode: firma.adres.kodPocztowy,
    addressLocality: firma.adres.miasto,
    addressCountry: "PL",
  },
  areaServed: [...firma.powiaty.map((p) => `powiat ${p}`), ...firma.wojewodztwa],
  founder: {
    "@type": "Person",
    name: firma.wlasciciel,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-graphite-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
