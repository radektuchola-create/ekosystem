import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { firma } from "@/content/firma";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Skontaktuj się w sprawie projektu sieci sanitarnej: telefon, e-mail lub formularz kontaktowy. Obszar działania: Kujawy i Pomorze.",
  path: "/kontakt",
});

export default async function KontaktPage({
  searchParams,
}: PageProps<"/kontakt">) {
  const params = await searchParams;
  const tematParam = params?.temat;
  const temat = Array.isArray(tematParam) ? tematParam[0] : tematParam ?? "";

  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue-600">
            Kontakt
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-graphite-900 sm:text-5xl">
            Kontakt
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-graphite-600">
            Napisz kilka słów o inwestycji lub zadzwoń, a odpowiem, jaki zakres projektu i
            formalności będzie potrzebny.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_380px]">
          <div className="rounded-card border border-graphite-100 bg-white p-6 shadow-card sm:p-8">
            <ContactForm tematDomyslny={temat} />
          </div>

          <div className="space-y-8">
            <div className="rounded-card border border-graphite-100 bg-white p-6 shadow-card">
              <h2 className="text-lg font-semibold text-graphite-900">Dane kontaktowe</h2>
              <ul className="mt-4 space-y-3 text-sm text-graphite-700">
                <li>
                  <a href={firma.telefonHref} className="flex items-center gap-2 hover:text-brand-blue-600">
                    <Phone className="h-4 w-4 shrink-0 text-brand-blue-600" strokeWidth={1.75} />
                    {firma.telefon}
                  </a>
                </li>
                <li>
                  <a href={firma.emailHref} className="flex items-center gap-2 hover:text-brand-blue-600">
                    <Mail className="h-4 w-4 shrink-0 text-brand-blue-600" strokeWidth={1.75} />
                    {firma.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-600" strokeWidth={1.75} />
                  <span>{firma.adres.pelny}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-card border border-graphite-100 bg-white p-6 shadow-card">
              <h2 className="text-lg font-semibold text-graphite-900">Obszar działania</h2>
              <p className="mt-3 text-sm leading-relaxed text-graphite-600">
                Siedziba firmy znajduje się w Tucholi, ale projekty realizuję na terenie całego
                województwa kujawsko-pomorskiego i pomorskiego, najczęściej współpracując z
                gminami powiatów tucholskiego, chojnickiego, świeckiego, chełmińskiego i
                sępoleńskiego. Chętnie podejmuję się też inwestycji poza tym obszarem,
                niezależnie od lokalizacji zapraszam do kontaktu.
              </p>
            </div>

            <div className="overflow-hidden rounded-card border border-graphite-100 shadow-card">
              <iframe
                title="Mapa lokalizacji EKO-SYSTEM w Tucholi"
                src={firma.mapaEmbedSrc}
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
