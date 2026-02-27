import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – Hubert's Hausmeister Service GmbH",
  description:
    "Impressum von Hubert's Hausmeister Service GmbH in Erlangen. Angaben gemäß DDG, Kontaktdaten, Registereintrag und rechtliche Hinweise.",
};

const sections = [
  { id: "angaben", label: "Angaben gemäß DDG" },
  { id: "kontakt", label: "Kontakt" },
  { id: "register", label: "Registereintrag" },
  { id: "ust", label: "Umsatzsteuer-ID" },
  { id: "beruf", label: "Berufsbezeichnung" },
  { id: "versicherung", label: "Berufshaftpflichtversicherung" },
  { id: "streitschlichtung", label: "EU-Streitschlichtung" },
  { id: "haftung-inhalte", label: "Haftung für Inhalte" },
  { id: "haftung-links", label: "Haftung für Links" },
  { id: "urheberrecht", label: "Urheberrecht" },
];

export default function Impressum() {
  return (
    <div className="mx-auto max-w-3xl py-16">
      {/* Page header */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8 mb-12 rounded-xl bg-brand-blue px-8 py-10 text-white">
        <h1 className="text-3xl font-bold sm:text-4xl">Impressum</h1>
        <p className="mt-2 text-white/70">
          Gesetzliche Pflichtangaben und rechtliche Hinweise zu unserer Website.
        </p>
      </div>

      {/* Table of contents */}
      <nav className="mb-12 rounded-xl bg-neutral p-6">
        <h2 className="mb-3 text-lg font-bold text-gray-900">
          Inhaltsübersicht
        </h2>
        <ol className="list-inside list-decimal space-y-1.5 text-sm text-brand-blue">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="hover:underline">
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Content */}
      <div className="space-y-10">
        <Section id="angaben" title="1. Angaben gemäß DDG (Digitale-Dienste-Gesetz)">
          <p>Hubert&apos;s Hausmeister Service GmbH</p>
          <p>Häuslinger Str. 5</p>
          <p>91056 Erlangen</p>
          <p className="mt-4">
            <strong>Vertreten durch die Geschäftsführer:</strong>
          </p>
          <p>Anna Maria Dudek, Hubert Dudek, Sandra Anna Dudek</p>
        </Section>

        <Section id="kontakt" title="2. Kontakt">
          <p>
            Telefon:{" "}
            <a href="tel:+49913142827" className="text-brand-blue hover:underline">
              09131 42827
            </a>
          </p>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:info@hhs-erlangen.de"
              className="text-brand-blue hover:underline"
            >
              info@hhs-erlangen.de
            </a>
          </p>
          <p>Telefax: 09131 9410156</p>
        </Section>

        <Section id="register" title="3. Registereintrag">
          <p>Eintragung im Handelsregister.</p>
          <p>Registergericht: Amtsgericht Fürth</p>
          <p>Registernummer: HRB 14225</p>
        </Section>

        <Section id="ust" title="4. Umsatzsteuer-ID">
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          </p>
          <p>DE 216/128/90304</p>
        </Section>

        <Section id="beruf" title="5. Berufsbezeichnung und berufsrechtliche Regelungen">
          <p>Berufsbezeichnung: Hausmeister Service (IHK)</p>
          <p>Zuständige Kammer: Industrie- und Handelskammer (IHK)</p>
          <p>
            Hubert Dudek ist ausgebildeter Heizungs- und Sanitärinstallateur.
          </p>
        </Section>

        <Section id="versicherung" title="6. Berufshaftpflichtversicherung">
          <p>
            <strong>Name und Sitz des Versicherers:</strong>
          </p>
          <p>Provinzial Rheinland Versicherung AG</p>
          <p className="mt-3">
            <strong>Geltungsbereich der Versicherung:</strong> Deutschland
          </p>
        </Section>

        <Section id="streitschlichtung" title="7. EU-Streitschlichtung">
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:underline break-all"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p className="mt-3">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </Section>

        <Section id="haftung-inhalte" title="8. Haftung für Inhalte">
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
        </Section>

        <Section id="haftung-links" title="9. Haftung für Links">
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
        </Section>

        <Section id="urheberrecht" title="10. Urheberrecht">
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </Section>
      </div>

      {/* Back link */}
      <div className="mt-12 border-t border-gray-200 pt-6">
        <Link
          href="/"
          className="text-sm text-brand-blue hover:underline"
        >
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="border-b border-gray-100 pb-10 last:border-0">
      <h2 className="mb-4 text-xl font-bold text-brand-blue">{title}</h2>
      <div className="space-y-2 text-sm leading-relaxed text-gray-600">
        {children}
      </div>
    </div>
  );
}
