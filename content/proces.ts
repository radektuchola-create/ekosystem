export type KrokWspolpracy = {
  numer: string;
  icon: string;
  tytul: string;
  opis: string;
};

export const krokiWspolpracy: KrokWspolpracy[] = [
  {
    numer: "01",
    icon: "PhoneCall",
    tytul: "Analiza",
    opis: "Rozpoznaję zakres, warunki i cel inwestycji.",
  },
  {
    numer: "02",
    icon: "Lightbulb",
    tytul: "Koncepcja",
    opis: "Proponuję warianty rozwiązania i ustalam optymalny kierunek dalszych prac.",
  },
  {
    numer: "03",
    icon: "Handshake",
    tytul: "Uzgodnienia",
    opis: "Prowadzę formalności w imieniu inwestora.",
  },
  {
    numer: "04",
    icon: "Compass",
    tytul: "Projekt",
    opis: "Dobieram rozwiązanie i przygotowuję dokumentację.",
  },
  {
    numer: "05",
    icon: "Stamp",
    tytul: "Pozwolenie na budowę / zgłoszenie robót",
    opis: "Kompletuję dokumentację i uzyskuję pozwolenie na budowę lub dokonuję zgłoszenia robót.",
  },
  {
    numer: "06",
    icon: "HardHat",
    tytul: "Realizacja",
    opis: "Wspieram budowę i sprawuję nadzór inwestorski.",
  },
];
