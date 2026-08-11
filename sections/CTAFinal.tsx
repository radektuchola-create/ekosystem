import { Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { firma } from "@/content/firma";

export function CTAFinal() {
  return (
    <section className="bg-brand-blue-700 py-20 text-white">
      <Container>
        <RevealOnScroll>
          <div className="flex flex-col items-center gap-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue-100">
              Porozmawiajmy o inwestycji
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Masz projekt, który wymaga{" "}
              <span className="text-brand-blue-100">pewnego prowadzenia?</span>
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-brand-blue-50">
              Opisz krótko planowany zakres, a wrócę z informacją, jak możemy podejść do zadania
              i jakie materiały będą potrzebne na start.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/kontakt" variant="secondary" className="!bg-white !text-brand-blue-700 hover:!bg-brand-blue-50">
                Skontaktuj się w sprawie projektu
              </Button>
              <a
                href={firma.telefonHref}
                className="inline-flex items-center justify-center gap-2 rounded-btn border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                {firma.telefon}
              </a>
              <a
                href={firma.emailHref}
                className="inline-flex items-center justify-center gap-2 rounded-btn border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                {firma.email}
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
