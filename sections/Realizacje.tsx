import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { realizacje } from "@/content/realizacje";

export function Realizacje() {
  const wybrane = realizacje.slice(0, 4);

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionHeading eyebrow="Realizacje" title="Przykładowe zrealizowane projekty i budowy" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wybrane.map((realizacja, index) => (
            <RevealOnScroll key={realizacja.slug} delay={(index % 4) * 0.06}>
              <Link
                href="/realizacje"
                className="group block overflow-hidden rounded-card border border-graphite-100 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={realizacja.obrazy[0]}
                    alt={`${realizacja.tytul}, ${realizacja.kategoria}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/realizacje" variant="secondary">
            Zobacz wszystkie realizacje
          </Button>
        </div>
      </Container>
    </section>
  );
}
