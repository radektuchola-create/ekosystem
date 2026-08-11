import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { firma } from "@/content/firma";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Polityka prywatności",
    description:
      "Zasady przetwarzania danych osobowych zgodnie z RODO w związku z formularzem kontaktowym na stronie EKO-SYSTEM.",
    path: "/polityka-prywatnosci",
  }),
  robots: { index: false, follow: true },
};

export default function PolitykaPrywatnosciPage() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-graphite-900">
          Polityka prywatności
        </h1>
        <p className="mt-4 text-sm text-graphite-500">Ostatnia aktualizacja: sierpień 2026</p>

        <div className="mt-10 space-y-8 text-graphite-700 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-graphite-900 [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6">
          <p>
            Niniejsza polityka prywatności opisuje zasady przetwarzania danych osobowych
            użytkowników korzystających ze strony {firma.domena}, zgodnie z Rozporządzeniem
            Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO).
          </p>

          <div>
            <h2>Administrator danych osobowych</h2>
            <p>
              Administratorem danych osobowych jest {firma.wlasciciel}, prowadzący działalność
              gospodarczą pod firmą {firma.nazwaPelna}, z siedzibą przy {firma.adres.pelny}.
              Kontakt z administratorem: {firma.email}, {firma.telefon}.
            </p>
          </div>

          <div>
            <h2>Formularz kontaktowy</h2>
            <p>
              Formularz na podstronie „Kontakt” nie przesyła wpisanych danych na żaden serwer.
              Po kliknięciu „Wyślij zapytanie” przeglądarka jedynie składa z wpisanych treści
              (imię i nazwisko, adres e-mail, opcjonalnie telefon i treść wiadomości) gotową
              wiadomość e-mail i otwiera domyślny program pocztowy użytkownika, który decyduje,
              czy taką wiadomość faktycznie wysłać. Strona {firma.domena} nie gromadzi, nie
              przechowuje ani nie przetwarza danych wpisanych w formularzu.
            </p>
          </div>

          <div>
            <h2>Korespondencja e-mail i telefoniczna</h2>
            <p>
              Jeśli zdecydujesz się wysłać wiadomość na adres {firma.email} (np. za pomocą
              formularza opisanego wyżej) lub skontaktujesz się telefonicznie, podane w ten sposób
              dane osobowe (imię i nazwisko, adres e-mail, numer telefonu, treść korespondencji)
              są przetwarzane przez administratora w celu udzielenia odpowiedzi oraz, na żądanie
              nadawcy, podjęcia działań przed zawarciem umowy. Podstawą prawną przetwarzania jest
              zgoda osoby, której dane dotyczą (art. 6 ust. 1 lit. a RODO) oraz, w zakresie
              niezbędnym do podjęcia działań przed zawarciem umowy, art. 6 ust. 1 lit. b RODO.
              Dane te są przechowywane przez okres niezbędny do obsługi korespondencji oraz
              ewentualnej dalszej współpracy, nie dłużej jednak niż przez okres przedawnienia
              roszczeń wynikających z obowiązujących przepisów prawa, i nie są udostępniane
              podmiotom trzecim w celach marketingowych.
            </p>
          </div>

          <div>
            <h2>Prawa osoby, której dane dotyczą</h2>
            <p>Osobie, której dane dotyczą, przysługuje prawo do:</p>
            <ul>
              <li>dostępu do swoich danych osobowych,</li>
              <li>sprostowania danych,</li>
              <li>usunięcia danych,</li>
              <li>ograniczenia przetwarzania,</li>
              <li>przenoszenia danych,</li>
              <li>wniesienia sprzeciwu wobec przetwarzania,</li>
              <li>cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej cofnięciem,</li>
              <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
            </ul>
          </div>

          <div>
            <h2>Dobrowolność podania danych</h2>
            <p>
              Podanie danych osobowych w formularzu kontaktowym jest dobrowolne, ale niezbędne do
              udzielenia odpowiedzi na przesłane zapytanie.
            </p>
          </div>

          <div>
            <h2>Pliki cookies i narzędzia analityczne</h2>
            <p>
              Strona nie wykorzystuje plików cookies do celów analitycznych ani marketingowych i
              nie korzysta z narzędzi statystycznych (np. Google Analytics) ani pikseli
              śledzących.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
