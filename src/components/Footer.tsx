import { Phone, Mail, MapPin } from "lucide-react";
import FooterMap from "./FooterMap";

export default function Footer() {
  return (
    <footer className="-mx-4 sm:-mx-6 lg:-mx-8 mt-8 bg-brand-blue-dark text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-12">
        {/* Main: Map left + Content right */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Map — vertical rectangle */}
          <div className="w-full shrink-0 lg:w-52">
            <FooterMap />
          </div>

          {/* Content columns */}
          <div className="grid flex-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <span className="text-lg font-bold text-white">
                Hubert&apos;s
              </span>
              <span className="ml-1.5 text-sm font-medium text-white/70">
                Hausmeister Service GmbH
              </span>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Ihr kompetenter Partner für Haus &amp; Garten seit über
                20&nbsp;Jahren in Erlangen und Umgebung.
              </p>
            </div>

            {/* Kontakt */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
                Kontakt
              </h3>
              <ul className="mt-3 space-y-2.5">
                <li>
                  <a
                    href="tel:+49913142827"
                    className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    09131 42827
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@hhs-erlangen.de"
                    className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    info@hhs-erlangen.de
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-2 text-sm text-white/80">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                      Häuslinger Str. 5, 91056 Erlangen
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
                Navigation
              </h3>
              <ul className="mt-3 space-y-1.5">
                {[
                  { label: "Startseite", href: "/" },
                  { label: "Leistungen", href: "#leistungen" },
                  { label: "Über uns", href: "#ueber-uns" },
                  { label: "Kontakt", href: "#kontakt" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rechtliches */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
                Rechtliches
              </h3>
              <ul className="mt-3 space-y-1.5">
                <li>
                  <a
                    href="/impressum"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    Impressum
                  </a>
                </li>
                <li>
                  <a
                    href="/datenschutz"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    Datenschutzerklärung
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-5 text-xs text-white/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Hubert&apos;s Hausmeister Service
            GmbH. Alle Rechte vorbehalten.
          </p>
          <p>HRB 14225 &middot; Amtsgericht Fürth</p>
        </div>
      </div>
    </footer>
  );
}
