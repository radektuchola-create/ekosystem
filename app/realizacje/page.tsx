import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Lightbox } from "@/components/gallery/Lightbox";
import { galeria } from "@/content/galeria";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Realizacje — projekty sieci sanitarnych",
  description:
    "Wybrane realizacje: sieci kanalizacji sanitarnej i deszczowej, zbiorniki retencyjne, przyłącza oraz modernizacje stacji uzdatniania wody.",
  path: "/realizacje",
});

export default function RealizacjePage() {
  return (
    <>
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue-600">
              Realizacje
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-graphite-900 sm:text-5xl">
              Przykładowe zrealizowane projekty i budowy
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-graphite-600">
              Wybrane zdjęcia z realizacji sieci wodociągowych, kanalizacyjnych oraz stacji
              uzdatniania wody, przy których pełniłem funkcję projektanta lub inspektora nadzoru.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Lightbox images={galeria} />

          <div className="mt-16 flex flex-col items-center gap-4 rounded-card bg-brand-blue-700 px-8 py-12 text-center text-white">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Masz podobną inwestycję w planach?
            </h2>
            <Button href="/kontakt" variant="secondary" className="!bg-white !text-brand-blue-700 hover:!bg-brand-blue-50">
              Skontaktuj się w podobnej sprawie
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
