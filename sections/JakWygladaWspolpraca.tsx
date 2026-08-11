import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { krokiWspolpracy } from "@/content/proces";

export function JakWygladaWspolpraca() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Proces"
          title={
            <span className="sm:whitespace-nowrap">
              Jasny przebieg współpracy. <span className="text-brand-blue-600">Bez niedomówień.</span>
            </span>
          }
        />
        <div className="relative mt-16">
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
            {krokiWspolpracy.map((krok, index) => (
              <RevealOnScroll key={krok.numer} delay={index * 0.1}>
                <li className="relative">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-600 text-white">
                    <Icon name={krok.icon} className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-brand-blue-600">
                    Krok {krok.numer}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-graphite-900">{krok.tytul}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite-600">{krok.opis}</p>
                </li>
              </RevealOnScroll>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
