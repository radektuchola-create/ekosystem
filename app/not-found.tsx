import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-slate-50 py-24">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue-600">
          Błąd 404
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-graphite-900 sm:text-5xl">
          Nie znaleziono takiej strony
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-graphite-600">
          Adres mógł się zmienić albo został wpisany z błędem. Wróć na stronę główną lub przejdź
          do oferty.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/" variant="primary">
            Strona główna
          </Button>
          <Button href="/oferta" variant="secondary">
            Zobacz ofertę
          </Button>
        </div>
      </Container>
    </section>
  );
}
