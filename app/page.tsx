import type { Metadata } from "next";
import { Hero } from "@/sections/Hero";
import { DlaKogo } from "@/sections/DlaKogo";
import { ZakresUslug } from "@/sections/ZakresUslug";
import { JakWygladaWspolpraca } from "@/sections/JakWygladaWspolpraca";
import { Statystyki } from "@/sections/Statystyki";
import { Realizacje } from "@/sections/Realizacje";
import { CTAFinal } from "@/sections/CTAFinal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Biuro projektów branży sanitarnej — Kujawsko-Pomorskie",
  description:
    "Projekty sieci wodociągowych, kanalizacji i nadzór inwestorski. Uprawnienia bez ograniczeń, współpraca z 15 gminami na Kujawach i Pomorzu.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <DlaKogo />
      <ZakresUslug />
      <JakWygladaWspolpraca />
      <Statystyki />
      <Realizacje />
      <CTAFinal />
    </>
  );
}
