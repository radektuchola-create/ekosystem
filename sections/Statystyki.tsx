import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Icon } from "@/components/ui/Icon";
import { NetworkPattern } from "@/components/ui/NetworkPattern";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { firma } from "@/content/firma";

const staty = [
  { value: firma.statystyki.lataDoswiadczenia, suffix: "+", label: "lat doświadczenia w branży sanitarnej" },
  { value: firma.statystyki.lataDzialalnosci, suffix: "", label: "lat samodzielnego prowadzenia firmy" },
  { value: firma.statystyki.liczbaGmin, suffix: "+", label: "gmin we współpracy stałej" },
  { value: firma.statystyki.liczbaPowiatow, suffix: "", label: "powiatów obszaru działania" },
];

export function Statystyki() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 text-white">
      <NetworkPattern className="pointer-events-none absolute inset-0 h-full w-full text-white/5" />
      <Container className="relative">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue-300">
            Doświadczenie i uprawnienia
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Uprawnienia <span className="text-brand-blue-300">bez ograniczeń</span>, potwierdzone latami praktyki
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {staty.map((stat, index) => (
            <RevealOnScroll key={stat.label} delay={index * 0.08}>
              <div>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-4xl font-semibold text-brand-blue-300 sm:text-5xl"
                />
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{stat.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <ul className="mt-12 grid gap-4 border-t border-white/10 pt-8 text-sm text-slate-200 sm:grid-cols-2">
          {[firma.uprawnienia.budowlane, firma.uprawnienia.projektowe].map((u) => (
            <li key={u.numer} className="flex items-start gap-3">
              <Icon name="ShieldCheck" className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue-300" strokeWidth={1.75} />
              <span>
                Uprawnienia {u.typ === "Projektowe" ? "projektowe" : "budowlane"} bez ograniczeń
                <span className="block text-slate-300">
                  nr {u.numer}, {u.data.slice(-4)}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8">
          <Link href="/o-mnie" className="text-sm font-semibold text-white underline underline-offset-4 hover:text-brand-blue-300">
            Zobacz pełną historię zawodową i uprawnienia →
          </Link>
        </p>
      </Container>
    </section>
  );
}
