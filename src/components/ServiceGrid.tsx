import {
  Building2,
  Hammer,
  SparklesIcon,
  Snowflake,
  Trash2,
  Palmtree,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  highlighted?: boolean;
}

const services: ServiceCard[] = [
  {
    icon: Building2,
    title: "Gebäudebetreuung & Überwachung",
    description:
      "Wir überwachen den ordnungsgemäßen Gesamtzustand Ihrer Anlage.",
    items: [
      "Heizungs- & Klimaanlagen",
      "Aufzug- & Garagensysteme",
      "Zählerstandsablesungen",
      "Handwerkerüberwachung",
    ],
  },
  {
    icon: Hammer,
    title: "Reparaturen & Renovierungen",
    description:
      "Kleinere Instandsetzungs- und Renovierungsarbeiten direkt von uns erledigt.",
    items: [
      "Wartungsarbeiten",
      "Kleinreparaturen",
      "Renovierungsarbeiten",
      "Schadensbehebung",
    ],
  },
  {
    icon: SparklesIcon,
    title: "Reinigungsservice",
    description:
      "Professionelle Reinigung für ein sauberes und gepflegtes Erscheinungsbild.",
    items: [
      "Fenster- & Glasreinigung",
      "Treppenhausreinigung",
      "Büroreinigung",
      "Baureinigung",
    ],
  },
  {
    icon: Snowflake,
    title: "Winterdienst & Gartenpflege",
    description:
      "Ganzjährige Außenanlagenpflege – vom Rasenmähen bis zum Streudienst.",
    items: [
      "Schneeräumung",
      "Streudienst",
      "Rasenpflege",
      "Heckenschnitt",
    ],
  },
  {
    icon: Trash2,
    title: "Abfallmanagement",
    description:
      "Zuverlässige Entsorgung und Bereitstellung nach Abfuhrplan.",
    items: [
      "Müll- & Sperrmüllentsorgung",
      "Tonnenreinigung",
      "Bereitstellung nach Plan",
      "Kleinreparaturen",
    ],
  },
  {
    icon: Palmtree,
    title: "Urlaubsservice",
    description:
      "Wir kümmern uns um Ihr Zuhause, während Sie entspannt verreisen.",
    items: [
      "Wohnung lüften",
      "Post aus dem Briefkasten nehmen",
      "Pflanzen gießen",
      "Reinigung vor Rückkehr",
    ],
    highlighted: true,
  },
];

export default function ServiceGrid() {
  return (
    <section id="leistungen" className="py-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
          Was wir bieten
        </p>
        <h2 className="mt-2 text-3xl font-bold text-brand-blue">
          Unsere Leistungen
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
          Von der Gebäudeüberwachung bis zum Urlaubsservice&nbsp;– wir sind Ihr
          zuverlässiger Ansprechpartner für alle Belange rund um Ihre Immobilie.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCardComponent key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCardComponent({ service }: { service: ServiceCard }) {
  const Icon = service.icon;

  return (
    <div
      className={`group relative rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md ${
        service.highlighted
          ? "ring-2 ring-brand-red/20"
          : ""
      }`}
    >
      {/* Top border — blue default, red on hover */}
      <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-lg bg-brand-blue transition-colors group-hover:bg-brand-red" />

      {/* Highlighted badge */}
      {service.highlighted && (
        <span className="absolute -top-3 right-4 rounded-full bg-brand-red px-3 py-0.5 text-xs font-bold text-white">
          Besonderer Service
        </span>
      )}

      <div className="mb-4 inline-flex rounded-lg bg-brand-blue-light p-3">
        <Icon className="h-6 w-6 text-brand-blue" strokeWidth={1.5} />
      </div>

      <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
      <p className="mt-1 text-sm text-gray-500">{service.description}</p>

      <ul className="mt-4 space-y-1.5">
        {service.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue"
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
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
