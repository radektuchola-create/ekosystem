"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { nawigacja, firma } from "@/content/firma";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-graphite-100 bg-white/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/logo/eko-system-logo.png"
            alt={firma.nazwaPelna}
            width={168}
            height={96}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nawigacja.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-brand-blue-700" : "text-graphite-700 hover:text-brand-blue-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={firma.telefonHref}
            className="flex items-center gap-2 text-sm font-semibold text-graphite-700 hover:text-brand-blue-600"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            {firma.telefon}
          </a>
          <Button href="/kontakt" variant="primary">
            Skontaktuj się
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-btn text-graphite-900 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-graphite-100 bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {nawigacja.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`rounded-btn px-3 py-3 text-base font-medium ${
                      active ? "bg-brand-blue-50 text-brand-blue-700" : "text-graphite-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={firma.telefonHref}
                className="flex items-center gap-2 px-3 py-3 text-base font-semibold text-graphite-700"
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                {firma.telefon}
              </a>
              <div className="px-3 pt-2">
                <Button href="/kontakt" variant="primary" className="w-full">
                  Skontaktuj się
                </Button>
              </div>
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
