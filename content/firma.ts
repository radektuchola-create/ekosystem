export const firma = {
  nazwa: "EKO-SYSTEM",
  nazwaPelna: "Studio Projektowe EKO-SYSTEM Radosław Ryl",
  wlasciciel: "Radosław Ryl",
  telefon: "+48 607 205 099",
  telefonHref: "tel:+48607205099",
  email: "biuro@studioekosystem.pl",
  emailHref: "mailto:biuro@studioekosystem.pl",
  adres: {
    ulica: "Przy Szosie Bydgoskiej 14A",
    kodPocztowy: "89-500",
    miasto: "Tuchola",
    pelny: "Przy Szosie Bydgoskiej 14A, 89-500 Tuchola",
  },
  domena: "studioekosystem.pl",
  url: "https://studioekosystem.pl",
  mapaEmbedSrc: "https://www.google.com/maps?q=53.5696233,17.8624776&z=17&output=embed",
  powiaty: ["tucholski", "chojnicki", "świecki", "chełmiński", "sępoleński"],
  wojewodztwa: ["kujawsko-pomorskie", "pomorskie"],
  liczbaGmin: 15,
  statystyki: {
    lataDoswiadczenia: new Date().getFullYear() - 2006,
    lataDzialalnosci: new Date().getFullYear() - 2011,
    liczbaGmin: 15,
    liczbaPowiatow: 5,
  },
  uprawnienia: {
    budowlane: {
      typ: "Wykonawcze",
      nazwa:
        "Uprawnienia budowlane bez ograniczeń do kierowania robotami budowlanymi w specjalności instalacyjnej (sieci, instalacje i urządzenia cieplne, wentylacyjne, gazowe, wodociągowe i kanalizacyjne)",
      numer: "KUP/0141/OWOS/08",
      data: "10.12.2008",
      organ: "Kujawsko-Pomorska Okręgowa Izba Inżynierów Budownictwa",
    },
    projektowe: {
      typ: "Projektowe",
      nazwa:
        "Uprawnienia projektowe bez ograniczeń w specjalności instalacyjnej (sieci, instalacje i urządzenia cieplne, wentylacyjne, gazowe, wodociągowe i kanalizacyjne)",
      numer: "KUP/0105/PBS/19",
      data: "13.06.2019",
      organ: "Kujawsko-Pomorska Okręgowa Izba Inżynierów Budownictwa",
    },
  },
} as const;

export const nawigacja = [
  { href: "/", label: "Strona główna" },
  { href: "/oferta", label: "Oferta" },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/o-mnie", label: "O mnie" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
