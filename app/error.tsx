"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="bg-slate-50 py-24">
      <Container className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-graphite-900 sm:text-5xl">
          Coś poszło nie tak
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-graphite-600">
          Strona nie załadowała się poprawnie. Spróbuj ponownie lub zadzwoń: +48 607 205 099.
        </p>
        <div className="mt-10 flex justify-center">
          <Button type="button" onClick={reset} variant="primary">
            Spróbuj ponownie
          </Button>
        </div>
      </Container>
    </section>
  );
}
