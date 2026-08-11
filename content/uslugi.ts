export type Usluga = {
  slug: string;
  icon: string;
  tytul: string;
  skrot: string;
  opis: string;
  featured: boolean;
};

export const uslugi: Usluga[] = [
  {
    slug: "sieci-wodociagowe",
    icon: "Droplets",
    tytul: "Projekty sieci wodociągowych",
    skrot: "Projekty budowy i przebudowy sieci wraz z węzłami, armaturą i pełnym zakresem uzgodnień.",
    opis:
      "Projekty budowy i rozbudowy sieci wodociągowych obejmujące koncepcję tras, dobór średnic oraz uzgodnienia z gestorami sieci i właścicielami działek, aż po pełną dokumentację wykonawczą gotową do realizacji. Uwzględniam istniejące uzbrojenie terenu oraz plany rozwoju sieci w danej gminie, tak aby projekt nie wymagał korekt na etapie budowy, zarówno dla gmin rozbudowujących infrastrukturę wodociągową, jak i dla biur projektów drogowych oraz firm architektoniczno-budowlanych prowadzących inwestycje towarzyszące.",
    featured: true,
  },
  {
    slug: "kanalizacja-sanitarna",
    icon: "Waves",
    tytul: "Projekty sieci kanalizacji sanitarnej",
    skrot: "Kanały grawitacyjne i tłoczne, przyłącza oraz rozwiązania dopasowane do warunków terenowych.",
    opis:
      "Projekty sieci kanalizacji sanitarnej grawitacyjnej i tłocznej, uwzględniające warunki gruntowo-wodne, rzeźbę terenu oraz docelową przepustowość. Dokumentacja obejmuje część technologiczną i formalną potrzebną do uzyskania zgód oraz realizacji na budowie, przygotowaną z myślą o współpracy z gminami, biurami projektów drogowych oraz inwestorami uzbrajającymi teren pod zabudowę.",
    featured: true,
  },
  {
    slug: "kanalizacja-deszczowa",
    icon: "CloudRain",
    tytul: "Projekty sieci kanalizacji deszczowej",
    skrot: "Odwodnienie dróg i terenów, retencja oraz urządzenia podczyszczające.",
    opis:
      "Projekty odwodnienia dróg i terenów zurbanizowanych, w tym sieci kanalizacji deszczowej wraz ze zbiornikami retencyjnymi i rozwiązaniami zgodnymi z zasadą zrównoważonego zagospodarowania wód opadowych. Dobór przepustowości opieram na rzeczywistych warunkach zlewni, żeby układ sprawdzał się przy dużych opadach, a nie tylko na papierze, co szczególnie doceniają gminy i biura projektów drogowych zlecające odwodnienie pasa drogowego.",
    featured: true,
  },
  {
    slug: "przylacza",
    icon: "Link2",
    tytul: "Projekty przyłączy wodociągowo-kanalizacyjnych",
    skrot: "Przyłącza wodociągowe i kanalizacyjne wraz z uzgodnieniami z operatorem sieci.",
    opis:
      "Projekty przyłączy wodociągowych i kanalizacyjnych dla budynków jednorodzinnych, wielorodzinnych i obiektów usługowych, wraz z niezbędnymi uzgodnieniami z operatorem sieci. Dokumentację przygotowuję tak, by zgłoszenie lub uzyskanie zgody przebiegło bez zbędnych poprawek, zarówno dla inwestorów indywidualnych budujących dom, jak i dla firm architektoniczno-budowlanych.",
    featured: true,
  },
  {
    slug: "przepompownie",
    icon: "ArrowUpFromDot",
    tytul: "Projekty budowy i przebudowy przepompowni i tłoczni ścieków",
    skrot: "Dobór urządzeń, obliczenia i rozwiązania eksploatacyjne dla przepompowni i tłoczni.",
    opis:
      "Dobór i projekt przepompowni oraz tłoczni ścieków sanitarnych i wód deszczowych wraz z rurociągami tłocznymi i urządzeniami międzyobiektowymi, dopasowane do rzeźby terenu i przepływów docelowych. Obejmuje zarówno budowę nowych obiektów, jak i przebudowę oraz modernizację istniejących przepompowni, głównie na zlecenie gmin oraz firm sanitarnych realizujących sieci na terenach o niekorzystnym spadku.",
    featured: true,
  },
  {
    slug: "stacje-uzdatniania-wody",
    icon: "FlaskConical",
    tytul: "Projekty stacji uzdatniania wody",
    skrot: "Technologia uzdatniania, modernizacja obiektów i infrastruktury towarzyszącej.",
    opis:
      "Projekty budowy i modernizacji stacji uzdatniania wody obejmujące część technologiczną, branżową i automatykę dopasowane do wydajności ujęcia i parametrów wody surowej. Doświadczenie z pracy przy eksploatacji SUW pozwala projektować rozwiązania, które sprawdzają się realnie na obiekcie, nie tylko na rysunku, co ma znaczenie zarówno dla gmin, jak i zakładów wodociągowo-kanalizacyjnych modernizujących swoją infrastrukturę.",
    featured: true,
  },
  {
    slug: "operaty-wodnoprawne",
    icon: "FileText",
    tytul: "Operaty wodnoprawne",
    skrot: "Operaty niezbędne do uzyskania pozwolenia wodnoprawnego dla inwestycji.",
    opis:
      "Opracowanie operatów wodnoprawnych niezbędnych do uzyskania pozwolenia wodnoprawnego dla inwestycji z zakresu gospodarki wodno-ściekowej, w tym dla zrzutu wód opadowych i roztopowych oraz ujęć wody, potrzebne każdemu inwestorowi, którego planowana inwestycja wymaga takiego pozwolenia.",
    featured: false,
  },
  {
    slug: "nadzor-inwestorski",
    icon: "HardHat",
    tytul: "Nadzory inwestorskie na budowach",
    skrot: "Kontrola jakości, zgodności robót z projektem i interesem inwestora na każdym etapie budowy.",
    opis:
      "Pełnienie funkcji inspektora nadzoru inwestorskiego na budowach sieci, przyłączy i urządzeń sanitarnych, obejmujące kontrolę zgodności realizacji z projektem i sztuką budowlaną, odbiory częściowe i końcowe oraz kompletowanie dokumentacji powykonawczej. Regularna obecność na budowie pozwala wychwycić problemy, zanim staną się kosztowne, co doceniają inwestorzy potrzebujący niezależnego nadzoru nad realizacją robót instalacyjnych.",
    featured: true,
  },
  {
    slug: "kontrole-okresowe",
    icon: "ClipboardCheck",
    tytul: "Kontrole okresowe obiektów budowlanych",
    skrot: "Przeglądy techniczne urządzeń, instalacji i sieci sanitarnych zgodnie z Prawem budowlanym.",
    opis:
      "Przeglądy techniczne urządzeń, instalacji i sieci sanitarnych wykonywane zgodnie z wymogami Prawa budowlanego, wraz z protokołem i wskazaniem ewentualnych zaleceń eksploatacyjnych, dla zarządców i właścicieli obiektów zobowiązanych do okresowych przeglądów technicznych.",
    featured: false,
  },
  {
    slug: "kosztorysy",
    icon: "Calculator",
    tytul: "Kosztorysy i przedmiary robót",
    skrot: "Kosztorysy inwestorskie, przedmiary robót oraz specyfikacje techniczne (STWiOR).",
    opis:
      "Sporządzanie kosztorysów inwestorskich, przedmiarów robót oraz specyfikacji technicznych wykonania i odbioru robót (STWiOR), czyli dokumentacji niezbędnej inwestorom szykującym się do postępowania przetargowego na realizację robót.",
    featured: false,
  },
  {
    slug: "kompleksowa-obsluga",
    icon: "Stamp",
    tytul: "Kompleksowa obsługa i doradztwo",
    skrot: "Reprezentowanie inwestora w uzgodnieniach, zgłoszeniach i całym procesie formalnym.",
    opis:
      "Reprezentowanie inwestora w całym procesie budowlanym, od projektu, przez uzgodnienia branżowe i zgłoszenia, po uzyskanie pozwolenia na budowę w starostwie i doradztwo na etapie realizacji. To rozwiązanie dla inwestorów, którzy chcą powierzyć całą stronę formalną i doradczą jednemu podmiotowi, zyskując jeden kontakt zamiast konieczności koordynowania kilku podmiotów samodzielnie.",
    featured: true,
  },
];

export const uslugiFeatured = uslugi.filter((u) => u.featured);
