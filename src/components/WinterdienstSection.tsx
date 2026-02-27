import { Snowflake, Clock, ShieldCheck, MapPin } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Frühmorgens einsatzbereit",
    text: "Unsere Räumfahrzeuge sind vor dem Berufsverkehr im Einsatz – für sichere Wege ab den frühen Morgenstunden.",
  },
  {
    icon: ShieldCheck,
    title: "Verkehrssicherungspflicht",
    text: "Wir übernehmen Ihre Räum- und Streupflicht zuverlässig und dokumentieren jeden Einsatz sorgfältig.",
  },
  {
    icon: MapPin,
    title: "Erlangen & Umgebung",
    text: "Flächen­deckende Betreuung in Erlangen und den umliegenden Gemeinden – mit kurzen Anfahrtszeiten.",
  },
];

export default function WinterdienstSection() {
  return (
    <section className="my-8 overflow-hidden rounded-xl border-2 border-brand-blue/10 bg-white">
      {/* Top bar */}
      <div className="flex items-center gap-3 bg-brand-blue px-6 py-3">
        <Snowflake className="h-5 w-5 text-white" strokeWidth={2} />
        <span className="text-sm font-bold uppercase tracking-wider text-white">
          Räum- und Streudienst
        </span>
      </div>

      <div className="grid lg:grid-cols-2">
        {/* Left — snow plow photo */}
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/winterdienst.jpg"
            alt="Räumfahrzeug von Huberts Hausmeisterservice mit Schneepflug"
            className="h-full w-full object-cover"
          />
          {/* Overlay with title */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-brand-blue/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Winterdienst
            </h3>
            <p className="mt-1 text-sm text-white/80">
              Professionell &amp; zuverlässig
            </p>
          </div>
        </div>

        {/* Right — feature cards */}
        <div className="flex flex-col justify-center px-4 py-10 sm:px-8 lg:py-12">
          <h2 className="text-2xl font-bold text-brand-blue">
            Sicher durch den Winter
          </h2>
          <p className="mt-2 text-gray-500">
            Unser Räum- und Streudienst schützt Ihre Immobilie und deren
            Bewohner&nbsp;– pünktlich, gründlich und dokumentiert.
          </p>

          <div className="mt-8 space-y-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue-light">
                    <Icon
                      className="h-5 w-5 text-brand-blue"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{f.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">
                      {f.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href="#kontakt"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
          >
            <Snowflake className="h-4 w-4" />
            Winterdienst anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
