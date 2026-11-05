import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NetworkPattern } from "@/components/ui/NetworkPattern";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { firma } from "@/content/firma";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <ParallaxLayer
        className="pointer-events-none absolute inset-0 text-brand-blue-400/20"
        speed={0.15}
      >
        <NetworkPattern className="h-[130%] w-full" />
      </ParallaxLayer>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/70 to-navy-900" />

      <Container className="relative py-14 sm:py-28 lg:py-36">
        <div className="wejscie-z-dolu max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-blue-300">
            {firma.nazwaPelna}
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Kompleksowa obsługa <span className="text-brand-blue-300">inwestycji sanitarnych</span>
          </h1>
          <p className="mt-4 text-xl font-medium leading-snug text-slate-100 sm:text-2xl">
            Projekty i nadzory na budowach
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-brand-blue-300">
            Instalacje, sieci i urządzenia sanitarne (od formalności po realizację)
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:mt-6 sm:text-lg">
            Inżynier z uprawnieniami budowlanymi do kierowania robotami budowlanymi i
            projektowania bez ograniczeń w zakresie sieci, instalacji i urządzeń cieplnych,
            wentylacyjnych, gazowych, wodociągowych i kanalizacyjnych. Współpracuję z
            kilkunastoma gminami oraz biurami projektów drogowych, a także firmami
            architektoniczno-budowlanymi na Kujawach i Pomorzu, prowadząc inwestycję od
            projektu, przez formalności, po pozwolenie na budowę i nadzór inwestorski.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
            <Button href="/kontakt" variant="primary">
              Skontaktuj się w sprawie projektu
            </Button>
            <Button href="/oferta" variant="ghost">
              Zobacz zakres usług
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
