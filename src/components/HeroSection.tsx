export default function HeroSection() {
  return (
    <section className="py-16 lg:py-24">
      {/* Logo — large and prominent at the top */}
      <div className="flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo-cropped.png?v=2"
          alt="Huberts Hausmeisterservice Erlangen – Logo mit Handwerker-Maskottchen und 24h Notdienst"
          className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl h-auto"
        />
      </div>

      {/* Text — centered below logo */}
      <div className="mx-auto mt-10 max-w-2xl text-center">
        <h1 className="text-3xl font-bold leading-tight text-brand-blue sm:text-4xl lg:text-5xl">
          Ihr kompetenter Partner für Haus&nbsp;&amp;&nbsp;Garten
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-gray-600">
          Professionelle Gebäudebetreuung, Reinigung, Reparaturen und vieles
          mehr&nbsp;– alles aus einer Hand. Rund um die Uhr erreichbar.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#leistungen"
            className="inline-flex items-center justify-center rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-blue-dark"
          >
            Unsere Leistungen
          </a>
          <a
            href="tel:+49913142827"
            className="inline-flex items-center justify-center rounded-md bg-brand-red px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-red-dark"
          >
            24h Notdienst anrufen
          </a>
        </div>
      </div>
    </section>
  );
}
