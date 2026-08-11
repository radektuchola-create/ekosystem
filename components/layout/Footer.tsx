import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { firma, nawigacja } from "@/content/firma";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-100">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/logo/eko-system-logo.png"
            alt={firma.nazwaPelna}
            width={168}
            height={96}
            className="h-10 w-auto rounded-btn bg-white p-1.5"
          />
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Projekty i nadzór sieci sanitarnych na Kujawach i Pomorzu, od formalności po realizację.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Nawigacja
          </h3>
          <ul className="mt-4 space-y-2">
            {nawigacja.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-slate-200 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            <li>
              <a href={firma.telefonHref} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                {firma.telefon}
              </a>
            </li>
            <li>
              <a href={firma.emailHref} className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                {firma.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <span>{firma.adres.pelny}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Obszar działania
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-200">
            Powiaty: {firma.powiaty.join(", ")}
            <br />
            Województwa: {firma.wojewodztwa.join(", ")}
          </p>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {firma.nazwaPelna}. Wszelkie prawa zastrzeżone.</p>
          <Link href="/polityka-prywatnosci" className="hover:text-white">
            Polityka prywatności
          </Link>
        </Container>
      </div>
    </footer>
  );
}
