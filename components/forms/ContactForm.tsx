"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Mail, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { firma } from "@/content/firma";

export function ContactForm({ tematDomyslny = "" }: { tematDomyslny?: string }) {
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const imie = String(formData.get("imie") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const telefon = String(formData.get("telefon") ?? "").trim();
    const temat = String(formData.get("temat") ?? "").trim();
    const wiadomosc = String(formData.get("wiadomosc") ?? "").trim();

    const subject = `Zapytanie ze strony w sprawie: ${temat || "kontaktu"}`;
    const body = [
      `Imię i nazwisko: ${imie}`,
      `E-mail: ${email}`,
      telefon ? `Telefon: ${telefon}` : null,
      "",
      wiadomosc,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const mailtoUrl = `mailto:${firma.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setOpened(true);
  }

  return (
    <form onSubmit={handleSubmit} aria-describedby="info-wysylki" className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Imię i nazwisko" name="imie" required>
          <input id="imie" name="imie" type="text" required autoComplete="name" className={inputClasses} />
        </Field>
        <Field label="E-mail" name="email" required>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Telefon (opcjonalnie)" name="telefon">
          <input id="telefon" name="telefon" type="tel" autoComplete="tel" className={inputClasses} />
        </Field>
        <Field label="Temat / zakres projektu" name="temat">
          <input id="temat" name="temat" type="text" defaultValue={tematDomyslny} className={inputClasses} />
        </Field>
      </div>

      <Field label="Wiadomość" name="wiadomosc" required>
        <textarea id="wiadomosc" name="wiadomosc" required rows={6} minLength={10} className={inputClasses} />
      </Field>

      <p id="info-wysylki" className="flex items-start gap-2 text-sm leading-relaxed text-graphite-500">
        <Info className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
        <span>
          Wysyłka odbywa się przez Twój program pocztowy, który otworzy się po kliknięciu z gotową
          do wysłania wiadomością. Dane z formularza nie są zapisywane ani przesyłane przez tę
          stronę. Więcej w{" "}
          <Link href="/polityka-prywatnosci" className="font-semibold text-brand-blue-600 hover:text-brand-blue-700">
            polityce prywatności
          </Link>
          .
        </span>
      </p>

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Wyślij zapytanie
      </Button>

      {opened ? (
        <div className="flex items-start gap-2 rounded-btn bg-brand-blue-50 px-4 py-3 text-sm text-brand-blue-700">
          <Mail className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
          <span>
            Powinien otworzyć się Twój program pocztowy z gotową wiadomością. Jeśli nic się nie
            stało, napisz bezpośrednio na{" "}
            <a href={firma.emailHref} className="font-semibold underline">
              {firma.email}
            </a>{" "}
            lub zadzwoń: {firma.telefon}.
          </span>
        </div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  required,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-graphite-800">
        {label}
        {required ? <span className="text-brand-blue-600"> *</span> : null}
      </label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

const inputClasses =
  "block w-full rounded-btn border border-graphite-200 px-4 py-2.5 text-base text-graphite-900 placeholder:text-graphite-500 focus:border-brand-blue-500 focus:outline-none focus:ring-2 focus:ring-brand-blue-500/30";
