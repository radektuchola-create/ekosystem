export const liczbaZdjecGalerii = 32;

export const galeria: string[] = Array.from(
  { length: liczbaZdjecGalerii },
  (_, i) => `/images/galeria/galeria-${String(i + 1).padStart(2, "0")}.jpg`
);
