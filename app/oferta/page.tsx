import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { uslugi } from "@/content/uslugi";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Oferta — projekty i nadzór sieci sanitarnych",
  description:
    "Projekty sieci wodociągowych, kanalizacji sanitarnej i deszczowej, przyłączy, przepompowni, stacji uzdatniania wody oraz nadzór inwestorski i obsługa formalno-prawna.",
  path: "/oferta",
});

export default function OfertaPage() {
  return (
    <>
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue-600">
              Oferta
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-graphite-900 sm:text-5xl">
              Oferta — projekty i nadzór sieci sanitarnych
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-graphite-600">
              Pełny zakres branży sanitarnej w jednym miejscu, prowadzony od projektu, przez
              formalności i uzgodnienia, po nadzór inwestorski. Poniżej znajdziesz szczegółowy
              opis każdej usługi.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="divide-y divide-graphite-100">
            {uslugi.map((usluga, index) => (
              <RevealOnScroll key={usluga.slug} delay={(index % 4) * 0.05}>
                <div id={usluga.slug} className="scroll-mt-24 grid gap-6 py-12 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-card bg-brand-blue-50 text-brand-blue-600">
                    <Icon name={usluga.icon} className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-graphite-900">
                      {usluga.tytul}
                    </h2>
                    <p className="mt-3 max-w-2xl leading-relaxed text-graphite-600">
                      {usluga.opis}
                    </p>
                  </div>
                  <div className="lg:pt-1">
                    <Link
                      href={`/kontakt?temat=${encodeURIComponent(usluga.tytul)}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue-600 hover:text-brand-blue-700"
                    >
                      Zapytaj o tę usługę →
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 rounded-card bg-navy-900 px-8 py-12 text-center text-white">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Nie wiesz, który zakres pasuje do Twojej inwestycji?
            </h2>
            <p className="max-w-xl text-slate-200">
              Napisz krótko, o jaką inwestycję chodzi, a zaproponuję właściwy zakres projektu i
              formalności.
            </p>
            <Button href="/kontakt" variant="primary">
              Skontaktuj się
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
