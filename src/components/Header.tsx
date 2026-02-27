"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

const navItems = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/mascot.jpg"
            alt="Huberts Hausmeisterservice Erlangen – Handwerker-Maskottchen"
            className="h-10 w-auto"
          />
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-brand-red">
              Hubert&apos;s
            </span>
            <span className="ml-1 text-sm font-medium text-foreground">
              Hausmeisterservice
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+49913142827"
            className="inline-flex items-center gap-2 rounded-md bg-brand-red px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-red-dark"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            <span className="hidden sm:inline">24h Notdienst</span>
            <span className="sm:hidden">Notdienst</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 md:hidden"
            aria-label="Menü öffnen"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-gray-200 bg-white px-4 pb-4 pt-2 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-brand-blue-light hover:text-brand-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
