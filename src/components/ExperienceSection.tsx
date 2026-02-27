import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Professionelle Betreuung von Häusern und Grundstücken",
  "Erfahrenes Team aus technischen und handwerklichen Berufen",
  "Starkes Netzwerk an Spezialfirmen für alle Anforderungen",
  "Umfangreiches Wissen für passgenaue Lösungen",
  "Ordentlich, sauber und schnell bei jedem Auftrag",
];

export default function ExperienceSection() {
  return (
    <section
      id="ueber-uns"
      className="-mx-4 sm:-mx-6 lg:-mx-8 rounded-xl bg-neutral px-6 py-16 sm:px-8 lg:px-12 my-8"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
          Warum wir?
        </p>
        <h2 className="mt-2 text-3xl font-bold text-brand-blue">
          Über 20 Jahre Kompetenz und Erfahrung
        </h2>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — large 20+ graphic */}
          <div className="flex flex-col items-center justify-center rounded-xl bg-white p-10 shadow-sm lg:aspect-square">
            <span className="text-6xl font-black leading-none text-brand-blue sm:text-8xl lg:text-9xl">
              20+
            </span>
            <span className="mt-3 text-lg font-semibold text-gray-500">
              Jahre Erfahrung
            </span>
            <div className="mt-6 h-1 w-16 rounded-full bg-brand-red" />
            <div className="mt-6 grid grid-cols-2 gap-6 text-center">
              <div>
                <span className="text-2xl font-bold text-brand-blue sm:text-3xl">
                  10.000+
                </span>
                <p className="mt-1 text-sm text-gray-500">Betreute Objekte</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-brand-blue sm:text-3xl">365</span>
                <p className="mt-1 text-sm text-gray-500">Tage erreichbar</p>
              </div>
            </div>
          </div>

          {/* Right — text content */}
          <div>
            <p className="text-lg leading-relaxed text-gray-600">
              <strong className="text-gray-900">Anna und Hubert Dudek</strong>,
              die Firmengründer, stehen Ihnen in unzähligen Fachbereichen mit
              jahrelanger Erfahrung zur Verfügung.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              <strong className="text-gray-700">Schwerpunkt Reinigung:</strong>{" "}
              Anna Dudek und ihr Team sorgen dafür, dass es überall blitzeblank
              ist. Durch ihre lange Erfahrung verfügt sie über umfangreiches
              Wissen, um die passende Lösung für verschmutzte oder matte Böden
              zu finden – im Handumdrehen und mit einem Lächeln.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              <strong className="text-gray-700">Schwerpunkt Handwerk:</strong>{" "}
              Mit Hubert Dudek, gelernter Heizungs- und Sanitärinstallateur mit
              Gesellenbrief, gibt es keine Aufgabe, die nicht gelöst werden kann.
              Mit kreativen Ideen und handwerklichem Können gibt er nicht auf,
              bis der Kunde zufrieden ist.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                    strokeWidth={2}
                  />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
