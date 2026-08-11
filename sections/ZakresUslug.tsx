import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { uslugiFeatured } from "@/content/uslugi";

export function ZakresUslug() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Specjalizacja"
          align="left"
          title={
            <>
              Projektuję rozwiązania, które działają
              <br />
              <span className="text-brand-blue-600">na papierze i w terenie</span>
            </>
          }
          note="Łączę perspektywę doświadczonego projektanta, inspektora nadzoru i eksploatatora sieci. Dzięki temu dokumentacja uwzględnia nie tylko przepisy, ale też realia wykonania i późniejszego utrzymania infrastruktury."
        />
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-graphite-100 bg-graphite-100 sm:grid-cols-2 lg:grid-cols-4">
          {uslugiFeatured.map((usluga, index) => (
            <RevealOnScroll key={usluga.slug} delay={(index % 4) * 0.05}>
              <Link
                href={`/oferta#${usluga.slug}`}
                className="group block h-full bg-white p-6 transition-colors hover:bg-slate-50"
              >
                <Icon name={usluga.icon} className="h-6 w-6 text-brand-blue-600" />
                <h3 className="mt-5 text-base font-semibold text-graphite-900">{usluga.tytul}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite-600">{usluga.skrot}</p>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/oferta" variant="secondary">
            Zobacz pełną ofertę
          </Button>
        </div>
      </Container>
    </section>
  );
}
