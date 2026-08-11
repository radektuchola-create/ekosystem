import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { firma } from "@/content/firma";
import { etapyKariery } from "@/content/kariera";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Inżynier z uprawnieniami bez ograniczeń",
  description:
    "Radosław Ryl, ok. 20 lat doświadczenia w branży sanitarnej, uprawnienia budowlane (2008) i projektowe (2019) bez ograniczeń, współpraca z 15 gminami.",
  path: "/o-mnie",
});

export default function OMniePage() {
  return (
    <>
      <section className="bg-slate-50 py-20">
        <Container className="grid gap-12 lg:grid-cols-[320px_1fr] lg:items-center">
          <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-card bg-navy-900 lg:w-full">
            <Image
              src="/images/o-mnie/radoslaw-ryl.jpg"
              alt={firma.wlasciciel}
              fill
              sizes="(min-width: 1024px) 320px, 256px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue-600">
              O mnie
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-graphite-900 sm:text-5xl">
              Inżynier z uprawnieniami bez ograniczeń
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-graphite-600">
              Od {new Date().getFullYear() - 2006} lat pracuję na budowach związanych z sieciami
              sanitarnymi. Doświadczenie zdobywałem jako inżynier budowy, a następnie kierownik
              budowy, uczestnicząc w realizacji skomplikowanych projektów sieci wodociągowych
              oraz sieci kanalizacji sanitarnej i deszczowej. Pełniłem też funkcję kierownika
              Zakładu Wodociągów i Kanalizacji,
              poznając tajniki pracy od strony eksploatacji sieci wod-kan.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-graphite-600">
              Od {new Date().getFullYear() - 2011} lat prowadzę własne biuro projektowe oraz
              pełnię funkcję inspektora nadzoru inwestorskiego, współpracując na stałe z{" "}
              {firma.liczbaGmin} gminami w regionie oraz kilkunastoma zakładami wodociągowymi.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-graphite-900 sm:text-4xl">
            Ścieżka zawodowa
          </h2>
          <ol className="relative mt-12 space-y-10 border-l border-graphite-200 pl-8">
            {etapyKariery.map((etap, index) => (
              <RevealOnScroll key={etap.tytul} delay={(index % 4) * 0.06}>
                <li className="relative">
                  <span className="absolute -left-[2.15rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-brand-blue-600" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue-600">
                    {etap.okres}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-graphite-900">{etap.tytul}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-graphite-600">
                    {etap.opis}
                  </p>
                </li>
              </RevealOnScroll>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-graphite-900 sm:text-4xl">
            Uprawnienia
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[firma.uprawnienia.budowlane, firma.uprawnienia.projektowe].map((uprawnienie) => (
              <div
                key={uprawnienie.numer}
                className="rounded-card border border-graphite-100 bg-white p-8 shadow-card"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green-600">
                  <Icon name="ShieldCheck" className="h-4 w-4" strokeWidth={2} />
                  {uprawnienie.typ}
                </div>
                <p className="mt-4 leading-relaxed text-graphite-700">{uprawnienie.nazwa}</p>
                <dl className="mt-4 space-y-1 text-sm text-graphite-500">
                  <div className="flex gap-2">
                    <dt className="font-semibold text-graphite-700">Nr ewidencyjny:</dt>
                    <dd>{uprawnienie.numer}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-graphite-700">Data nadania:</dt>
                    <dd>{uprawnienie.data}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-graphite-700">Organ:</dt>
                    <dd>{uprawnienie.organ}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-graphite-900 sm:text-4xl">
            Obszar działania
          </h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <p className="max-w-2xl text-graphite-600">
              Siedziba firmy znajduje się w Tucholi, ale projekty realizuję na terenie całego
              województwa kujawsko-pomorskiego i pomorskiego, najczęściej współpracując z gminami
              powiatów tucholskiego, chojnickiego, świeckiego, chełmińskiego i sępoleńskiego.
              Chętnie podejmuję się też inwestycji poza tym obszarem, niezależnie od lokalizacji
              zapraszam do kontaktu.
            </p>
            <div className="flex gap-10">
              <div>
                <AnimatedCounter
                  value={firma.liczbaGmin}
                  suffix="+"
                  className="block text-3xl font-semibold text-brand-blue-600"
                />
                <p className="mt-1 text-sm text-graphite-500">gmin we współpracy</p>
              </div>
              <div>
                <AnimatedCounter
                  value={2}
                  className="block text-3xl font-semibold text-brand-blue-600"
                />
                <p className="mt-1 text-sm text-graphite-500">województwa</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
