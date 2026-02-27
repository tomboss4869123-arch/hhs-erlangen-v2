import Image from "next/image";
import { Users, Truck, TreePine } from "lucide-react";

const cards = [
  {
    image: "/images/mitarbeiter.jpg",
    alt: "Huberts Hausmeisterservice Erlangen – Teamfoto mit über 15 Mitarbeitern vor Firmenwagen",
    icon: Users,
    title: "Unser Team",
    description:
      "Über 15 engagierte Mitarbeiter aus technischen und handwerklichen Berufen – zuverlässig, erfahren und immer im Einsatz für Sie.",
    aspect: "aspect-[3/1]" as const,
  },
  {
    image: "/images/autos.jpg",
    alt: "Huberts Hausmeisterservice Fuhrpark Erlangen – Firmenwagen und professioneller Gerätepark",
    icon: Truck,
    title: "Unser Fuhrpark & Geräte",
    description:
      "Moderne Fahrzeugflotte und professionelle Ausstattung – von Rasenmähern bis Streudienst-Technik, alles für den reibungslosen Einsatz.",
    aspect: "aspect-[3/1]" as const,
  },
  {
    image: "/images/property.jpg",
    alt: "Huberts Hausmeisterservice Objektbetreuung Erlangen – gepflegte Wohnanlage mit Grünflächen",
    icon: TreePine,
    title: "Gepflegte Objekte",
    description:
      "Saubere Wege, gepflegte Grünanlagen und ein einladendes Erscheinungsbild – so sehen von uns betreute Immobilien aus.",
    aspect: "aspect-[16/9]" as const,
  },
];

export default function WorkReliabilitySection() {
  return (
    <section className="-mx-4 sm:-mx-6 lg:-mx-8 rounded-xl bg-neutral px-6 py-16 sm:px-8 lg:px-12 my-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
          Einblicke in unsere Arbeit
        </p>
        <h2 className="mt-2 text-3xl font-bold text-brand-blue">
          Zuverlässigkeit, die man sieht
        </h2>
        <p className="mt-3 max-w-2xl text-gray-500">
          Hinter jedem gepflegten Objekt steht ein starkes Team mit moderner
          Ausstattung. Überzeugen Sie sich selbst.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Large card — team photo spanning full width on mobile, left col on desktop */}
          <div className="lg:row-span-2">
            <PhotoCard card={cards[0]} tall />
          </div>

          {/* Right column — fleet + property stacked */}
          <PhotoCard card={cards[1]} />
          <PhotoCard card={cards[2]} />
        </div>

      </div>
    </section>
  );
}

function PhotoCard({
  card,
  tall = false,
}: {
  card: (typeof cards)[number];
  tall?: boolean;
}) {
  const Icon = card.icon;

  return (
    <div className="group overflow-hidden rounded-xl border-2 border-brand-blue/20 bg-white shadow-sm transition-all hover:border-brand-blue hover:shadow-md">
      {/* Image container — never stretch, use object-cover */}
      <div
        className={`relative overflow-hidden bg-brand-blue-light ${
          tall ? "aspect-[3/2] lg:aspect-auto lg:h-[280px]" : "h-[200px]"
        }`}
      >
        <Image
          src={card.image}
          alt={card.alt}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Subtle brand overlay on hover */}
        <div className="absolute inset-0 bg-brand-blue/0 transition-colors group-hover:bg-brand-blue/5" />
      </div>

      {/* Caption */}
      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue-light">
            <Icon className="h-4 w-4 text-brand-blue" strokeWidth={2} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">
          {card.description}
        </p>
      </div>
    </div>
  );
}
