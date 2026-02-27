import { Phone } from "lucide-react";

export default function NotdienstBanner() {
  return (
    <section className="-mx-4 sm:-mx-6 lg:-mx-8 relative overflow-hidden rounded-xl bg-brand-red my-8">
      {/* Watermark house icon */}
      <svg
        className="pointer-events-none absolute -right-8 -top-8 h-64 w-64 text-white/5"
        viewBox="0 0 120 120"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M60 8L10 52h100L60 8z" />
        <rect x="22" y="52" width="76" height="56" rx="2" />
        <rect x="78" y="20" width="12" height="22" rx="1" />
      </svg>
      <svg
        className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rotate-12 text-white/5"
        viewBox="0 0 120 120"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M60 8L10 52h100L60 8z" />
        <rect x="22" y="52" width="76" height="56" rx="2" />
        <rect x="78" y="20" width="12" height="22" rx="1" />
      </svg>

      <div className="relative z-10 px-6 py-12 text-center sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
          Wir sind immer für Sie da
        </p>
        <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
          NOTDIENST: 24&nbsp;Stunden an 365&nbsp;Tagen
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">
          Heizungsausfall, Wasserrohrbruch oder andere Notfälle? Rufen Sie uns
          jetzt an&nbsp;– wir sind sofort zur Stelle.
        </p>

        <a
          href="tel:+49913142827"
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-brand-red shadow-lg transition-transform hover:scale-105 active:scale-100"
        >
          <Phone className="h-7 w-7" strokeWidth={2.5} />
          <span className="text-2xl font-extrabold tracking-wide sm:text-3xl">
            09131 42827
          </span>
        </a>
      </div>
    </section>
  );
}
