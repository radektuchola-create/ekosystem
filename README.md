# EKO-SYSTEM — studioekosystem.pl

Strona wizerunkowa jednoosobowego biura projektowego branży sanitarnej (Radosław Ryl) — projekty sieci wodociągowych, kanalizacji sanitarnej i deszczowej, przepompowni, stacji uzdatniania wody oraz nadzór inwestorski. Grupa docelowa: gminy i urzędy, firmy drogowe, firmy ogólnobudowlane/sanitarne oraz inwestorzy indywidualni. Celem strony jest budowanie zaufania i generowanie kontaktu telefonicznego/mailowego — bez sklepu, bez systemu rezerwacji.

Zbudowana w Next.js (App Router) + React + TypeScript + Tailwind CSS, z animacjami Framer Motion i GSAP/ScrollTrigger.

## Wymagania

- Node.js **20.9+** (zalecane najnowsze LTS)
- npm

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Strona będzie dostępna pod `http://localhost:3000`.

## Formularz kontaktowy

Formularz na `/kontakt` nie ma backendu i nie wymaga żadnego konta ani klucza API. Po kliknięciu „Wyślij zapytanie” przeglądarka składa z wpisanych danych link `mailto:` i otwiera domyślny program pocztowy odwiedzającego z gotową wiadomością do `biuro@studioekosystem.pl` — to użytkownik decyduje, czy ją wysłać. Dane z formularza nie są nigdzie zapisywane ani przesyłane przez stronę.

Jeśli w przyszłości formularz ma wysyłać wiadomości automatycznie w tle (np. przez Resend czy inny dostawca), wymaga to konta u dostawcy usługi e-mail i zmiennych środowiskowych z kluczem API — obecnie świadomie z tego zrezygnowano na rzecz prostszego rozwiązania bez backendu.

## Build produkcyjny

```bash
npm run build
npm run start
```

## Wdrożenie na Vercel + podpięcie domeny studioekosystem.pl

1. Zainicjuj repozytorium Git i wypchnij na GitHub (patrz sekcja niżej).
2. Wejdź na [vercel.com/new](https://vercel.com/new), zaimportuj repozytorium — Vercel automatycznie wykryje Next.js. Projekt nie wymaga żadnych zmiennych środowiskowych do działania.
3. Wdróż projekt (Deploy).
4. W Settings → Domains dodaj `studioekosystem.pl` (i opcjonalnie `www.studioekosystem.pl`).
5. U rejestratora domeny (obecnie DNS: `dns1.hitme.pl` / `dns2.hitme.pl`) ustaw rekordy wskazane przez Vercel po dodaniu domeny — zwykle:
   - **Rekord A** dla `studioekosystem.pl` → adres IP podany przez Vercel (aktualnie `76.76.21.21`, ale zawsze kieruj się wartością pokazaną w panelu Vercel w momencie dodawania domeny),
   - **Rekord CNAME** dla `www` → `cname.vercel-dns.com`.
6. Po propagacji DNS (od kilku minut do 24h) Vercel automatycznie wystawi certyfikat SSL.

## Inicjalizacja Git i pierwszy push na GitHub

```bash
git init
git add .
git commit -m "Pierwsza wersja strony EKO-SYSTEM"
git branch -M main
git remote add origin <adres-repozytorium-na-github>
git push -u origin main
```

## Struktura projektu

```
app/                 Strony (App Router) — routing, metadata, layout, sitemap, robots
  oferta/, realizacje/, o-mnie/, kontakt/, polityka-prywatnosci/
components/
  ui/                 Komponenty bazowe (Button, Card, Container, Icon, SectionHeading)
  layout/             Header (z menu mobilnym), Footer
  motion/             Wrappery animacji: RevealOnScroll, AnimatedCounter, ParallaxLayer (GSAP)
  forms/              ContactForm — formularz kontaktowy budujący link mailto:
sections/             Sekcje strony głównej (Hero, DlaKogo, ZakresUslug, ...)
content/              Treści i dane jako obiekty TS — jedno miejsce edycji tekstów
lib/                  Helper SEO, hook prefers-reduced-motion
public/               Logo, obrazy realizacji, favicony, obraz Open Graph
```

## Edycja treści

Wszystkie teksty i dane firmowe znajdują się w katalogu `content/` jako typowane obiekty TypeScript — edycja nie wymaga zmian w komponentach:

- `content/firma.ts` — nazwa, telefon, e-mail, adres, obszar działania, liczba gmin, dane uprawnień. Zmiana tutaj propaguje się do stopki, `/kontakt`, danych strukturalnych (JSON-LD) i statystyk na stronie głównej.
- `content/uslugi.ts` — 11 usług widocznych na `/oferta` (pole `featured: true` decyduje, czy dana usługa pojawia się też w skrócie na stronie głównej).
- `content/realizacje.ts` — 5 nazwanych inwestycji użytych w skrócie realizacji na stronie głównej (karty z tytułem i kategorią, bez opisu).
- `content/galeria.ts` — lista zdjęć pokazywanych jako kolaż na pełnej stronie `/realizacje` (bez tytułów/opisów, czysta galeria).
- `content/dlaKogo.ts`, `content/proces.ts`, `content/kariera.ts` — pozostałe sekcje.

### Jak dodać zdjęcia do galerii na `/realizacje`

1. Wgraj zdjęcie(a) do folderu `ZDJĘCIA/` w katalogu głównym projektu — to stały, roboczy folder klienta, nie ruszaj jego lokalizacji ani nie usuwaj plików bez potrzeby.
2. Zoptymalizuj i skopiuj wybrane zdjęcia do `public/images/galeria/` pod nazwami `galeria-NN.jpg` (kolejny numer, `.jpg`, docelowo max ok. 1600px szerokości).
3. Zwiększ `liczbaZdjecGalerii` w `content/galeria.ts` — lista ścieżek generuje się automatycznie na tej podstawie.

### Jak dodać nową realizację na stronę główną

1. Wgraj jedno lub kilka zdjęć do `public/images/realizacje/` (format `.jpg`, docelowo max ok. 2000px szerokości).
2. Dodaj wpis w `content/realizacje.ts` — pole `obrazy` to tablica, pierwsze zdjęcie jest zdjęciem głównym kafelka:
   ```ts
   {
     slug: "nazwa-projektu",
     obrazy: ["/images/realizacje/nazwa-pliku.jpg"],
     tytul: "Tytuł realizacji",
     kategoria: "Kanalizacja sanitarna",
     opis: "Krótki opis zakresu prac.",
   }
   ```

## Edycja brandingu

- **Logo**: plik `public/logo/eko-system-logo.png` (przezroczyste tło). Podmień plik tą samą nazwą lub zaktualizuj ścieżkę w `components/layout/Header.tsx` i `components/layout/Footer.tsx`.
- **Favicon**: `app/icon.png` i `app/apple-icon.png` — wygenerowane z obecnego logo; podmień na docelową wersję, gdy powstanie dedykowany monogram/ikona marki.
- **Kolory i typografia**: tokeny Tailwind w `app/globals.css` w bloku `@theme` (Tailwind v4, konfiguracja przez CSS, bez `tailwind.config.js`). Zmiana `--color-brand-blue-*`, `--color-brand-green-*`, `--color-graphite-*`, `--color-navy-*` zaktualizuje kolory w całym serwisie.
- **Zdjęcie na `/o-mnie`**: `public/images/o-mnie/radoslaw-ryl.jpg`. Podmień plik tą samą nazwą albo zaktualizuj ścieżkę w `app/o-mnie/page.tsx`.

## Materiały źródłowe

### `ZDJĘCIA/` (katalog główny projektu)

To **stały, roboczy folder klienta** — nie jest częścią aplikacji (Next.js serwuje pliki tylko z `public/`), więc zdjęcia stąd trzeba ręcznie zoptymalizować i skopiować do `public/images/galeria/`, żeby pojawiły się na stronie (patrz „Jak dodać zdjęcia do galerii" wyżej). Klient będzie tu na bieżąco dorzucał nowe zdjęcia z realizacji — **nie zmieniaj lokalizacji ani nazwy tego folderu**.

### `_assets/` (archiwum, nieużywane bezpośrednio)

Katalog `_assets/` nie jest częścią aplikacji — zawiera archiwalne materiały z wcześniejszych etapów budowy strony: logo źródłowe, notatkę biograficzną oraz pierwsze, nieuporządkowane zbiory zdjęć z budów (`zdjecia-z-budow-zrodlowe/`, `zdjecia-realizacje-zrodlowe/`), zastąpione później przez `ZDJĘCIA/`.

## Znane ograniczenia pierwszej wersji

- Brak CMS — treści edytowane bezpośrednio w kodzie (`content/`), zgodnie z założeniami briefu.
- Formularz kontaktowy działa przez `mailto:` — wymaga skonfigurowanego programu pocztowego na urządzeniu odwiedzającego; nie pokazuje statusu „wysłano” (bo wysyłką steruje program pocztowy użytkownika, nie strona).

## Sugestie dalszego rozwoju

Świadomie pominięte w pierwszej wersji, gotowe do dodania bez przebudowy całości:

- **Blog / baza wiedzy** — osobna sekcja `content/blog/` + trasa `app/blog/`, gdy pojawią się zasoby na regularne pisanie.
- **FAQ** — sekcja z pytaniami, dobrze wpisująca się w SEO (dane strukturalne `FAQPage`).
- **CMS** — podpięcie headless CMS (np. Sanity, Payload) w miejsce plików w `content/`, jeśli edycja treści przez osobę nietechniczną stanie się częsta.
- **Analytics** — Google Analytics / Vercel Analytics / Plausible, obecnie świadomie pominięte.
- **Kalendarz** (np. Calendly) do umawiania rozmów, jeśli telefon/e-mail przestaną wystarczać.
- **Formularz z wysyłką w tle** — podpięcie dostawcy e-mail (np. Resend) i endpointu API, jeśli `mailto:` okaże się niewystarczający (np. na urządzeniach bez skonfigurowanej poczty).
