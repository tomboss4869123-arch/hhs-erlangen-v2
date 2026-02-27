"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";

// Replace with your Formspree form ID from https://formspree.io
const FORMSPREE_ID = "xreadkol";

const subjectOptions = [
  { value: "", label: "Bitte wählen…" },
  { value: "reparaturanfrage", label: "Reparaturanfrage" },
  { value: "winterdienst", label: "Winterdienst Angebot" },
  { value: "reinigung", label: "Reinigungsservice" },
  { value: "urlaubsservice", label: "Urlaubsservice" },
  { value: "allgemein", label: "Allgemeine Anfrage" },
];

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  return (
    <section id="kontakt" className="py-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
          Sprechen Sie uns an
        </p>
        <h2 className="mt-2 text-3xl font-bold text-brand-blue">Kontakt</h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-500">
          Sie benötigen ein Angebot oder haben eine Frage? Füllen Sie das
          Formular aus oder rufen Sie uns direkt an.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        {/* Left — Contact info cards */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <ContactInfoCard
            icon={Phone}
            label="Telefon"
            href="tel:+49913142827"
          >
            09131 42827
          </ContactInfoCard>
          <ContactInfoCard
            icon={Mail}
            label="E-Mail"
            href="mailto:info@hhs-erlangen.de"
          >
            info@hhs-erlangen.de
          </ContactInfoCard>
          <ContactInfoCard icon={MapPin} label="Adresse">
            Häuslinger Str. 5, 91056 Erlangen
          </ContactInfoCard>
          <ContactInfoCard icon={Clock} label="Erreichbarkeit">
            24h Notdienst – 365 Tage im Jahr
          </ContactInfoCard>

          {/* Trust factor */}
          <div className="mt-2 rounded-xl border border-brand-blue/10 bg-brand-blue-light px-5 py-4 text-center">
            <p className="text-sm font-semibold text-brand-blue">
              Hunderte zufriedene Kunden in der Region Erlangen
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Vertrauen Sie auf über 20 Jahre Erfahrung
            </p>
          </div>
        </div>

        {/* Right — Lead form */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-3">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-7 w-7 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Vielen Dank!
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Ihre Anfrage wurde gesendet. Wir melden uns schnellstmöglich.
              </p>
            </div>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setStatus("sending");
                try {
                  const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                    method: "POST",
                    headers: { Accept: "application/json" },
                    body: new FormData(e.currentTarget),
                  });
                  setStatus(res.ok ? "success" : "error");
                } catch {
                  setStatus("error");
                }
              }}
              className="space-y-5"
            >
              <input type="hidden" name="_subject" value="Neue Anfrage über hhs-erlangen.de" />
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Vorname" name="Vorname" required />
                <FormField label="Nachname" name="Nachname" required />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="E-Mail"
                  name="email"
                  type="email"
                  required
                />
                <FormField label="Telefon" name="Telefon" type="tel" />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Betreff <span className="text-brand-red">*</span>
                </label>
                <select
                  id="subject"
                  name="Betreff"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
                >
                  {subjectOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} disabled={!opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Nachricht <span className="text-brand-red">*</span>
                </label>
                <textarea
                  id="message"
                  name="Nachricht"
                  rows={4}
                  required
                  placeholder="Beschreiben Sie kurz Ihr Anliegen…"
                  className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-brand-red">
                  Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns an.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-blue-dark disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {status === "sending" ? "Wird gesendet…" : "Nachricht senden"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-gray-700"
      >
        {label} {required && <span className="text-brand-red">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
      />
    </div>
  );
}

function ContactInfoCard({
  icon: Icon,
  label,
  href,
  children,
}: {
  icon: typeof Phone;
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm transition-colors hover:border-brand-blue/20">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue-light">
        <Icon className="h-5 w-5 text-brand-blue" strokeWidth={2} />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
          {label}
        </p>
        <p className="text-sm font-semibold text-gray-900">{children}</p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }
  return content;
}
