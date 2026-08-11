export type Realizacja = {
  slug: string;
  obrazy: string[];
  tytul: string;
  kategoria: string;
  opis: string;
};

export const realizacje: Realizacja[] = [
  {
    slug: "chelmno-kanalizacja-deszczowa-polna-lunawska",
    obrazy: [
      "/images/realizacje/chelmno-polna-1.jpg",
      "/images/realizacje/chelmno-polna-2.jpg",
      "/images/realizacje/chelmno-polna-3.jpg",
    ],
    tytul: "Budowa kanalizacji deszczowej w ul. Polnej i Łunawskiej",
    kategoria: "Kanalizacja deszczowa",
    opis: "Budowa sieci kanalizacji deszczowej w pasie drogowym na terenie Chełmna.",
  },
  {
    slug: "chelmno-piaskownik-separatory-fryba",
    obrazy: [
      "/images/realizacje/chelmno-fryba-1.jpg",
      "/images/realizacje/chelmno-fryba-2.jpg",
      "/images/realizacje/chelmno-fryba-3.jpg",
    ],
    tytul: "Piaskownik i układ dwóch separatorów przed wylotem do rzeki Fryba",
    kategoria: "Urządzenia podczyszczające",
    opis: "Budowa piaskownika oraz układu dwóch separatorów podczyszczających wody opadowe przed zrzutem do rzeki Fryba.",
  },
  {
    slug: "chelmno-siec-deszczowa-zbiornik-retencyjny",
    obrazy: [
      "/images/realizacje/chelmno-retencja-1.jpg",
      "/images/realizacje/chelmno-retencja-2.jpg",
      "/images/realizacje/chelmno-retencja-3.jpg",
    ],
    tytul: "Sieć kanalizacji deszczowej oraz zbiornik retencyjny",
    kategoria: "Kanalizacja deszczowa",
    opis: "Budowa sieci kanalizacji deszczowej wraz z wielkogabarytowym zbiornikiem retencyjnym na terenie Chełmna.",
  },
  {
    slug: "suw-sliwice",
    obrazy: [
      "/images/galeria/galeria-21.jpg",
      "/images/realizacje/suw-sliwice-2.jpg",
      "/images/realizacje/suw-sliwice-3.jpg",
    ],
    tytul: "Stacja uzdatniania wody w Śliwicach",
    kategoria: "Stacje uzdatniania wody",
    opis: "Modernizacja technologii uzdatniania wody wraz z armaturą, filtracją i rozdzielniami elektrycznymi na stacji uzdatniania wody w Śliwicach.",
  },
  {
    slug: "tuchola-przebudowa-sieci",
    obrazy: [
      "/images/realizacje/tuchola-siec-1.jpg",
      "/images/realizacje/tuchola-siec-2.jpg",
    ],
    tytul: "Przebudowa sieci w Tucholi",
    kategoria: "Kanalizacja sanitarna",
    opis: "Przebudowa sieci sanitarnej na terenie miasta Tuchola, prowadzona wraz z nadzorem nad robotami ziemnymi i montażowymi.",
  },
];
