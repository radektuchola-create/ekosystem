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
  title: "Biuro projektów branży sanitarnej, Kujawsko-Pomorskie | EKO-SYSTEM",
  description:
    "Projekty sieci wodociągowych i kanalizacji oraz nadzór inwestorski. Tuchola, Chojnice, Świecie, Chełmno, Sępólno Krajeńskie. Uprawnienia bez ograniczeń, 15 gmin.",
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
