import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { grupyOdbiorcow } from "@/content/dlaKogo";

export function DlaKogo() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Dla kogo pracuję"
          title={<span className="sm:whitespace-nowrap">Doświadczenie dopasowane do skali inwestycji</span>}
        />
        <RevealOnScroll>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-graphite-100 bg-graphite-100 sm:grid-cols-2 lg:grid-cols-3">
            {grupyOdbiorcow.map((grupa) => (
              <div key={grupa.tytul} className="group bg-white p-6 transition-colors hover:bg-slate-50">
                <Icon
                  name={grupa.icon}
                  className="h-6 w-6 text-brand-blue-600"
                />
                <h3 className="mt-5 text-base font-semibold text-graphite-900">{grupa.tytul}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite-600">{grupa.opis}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
