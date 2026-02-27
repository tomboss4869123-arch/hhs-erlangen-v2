import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Hubert's Hausmeister Service GmbH",
  description:
    "Datenschutzerklärung der Hubert's Hausmeister Service GmbH. Informationen zur Erhebung und Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.",
};

const sections = [
  { id: "ueberblick", label: "Datenschutz auf einen Blick" },
  { id: "hosting", label: "Hosting" },
  { id: "allgemein", label: "Allgemeine Hinweise und Pflichtinformationen" },
  { id: "datenerfassung", label: "Datenerfassung auf dieser Website" },
  { id: "externe-dienste", label: "Externe Dienste" },
  { id: "schriftarten", label: "Schriftarten" },
  { id: "soziale-medien", label: "Soziale Medien" },
  { id: "ihre-rechte", label: "Ihre Rechte" },
];

export default function Datenschutz() {
  return (
    <div className="mx-auto max-w-3xl py-16">
      {/* Page header */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8 mb-12 rounded-xl bg-brand-blue px-8 py-10 text-white">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Datenschutzerklärung
        </h1>
        <p className="mt-2 text-white/70">
          Informationen zur Erhebung und Verarbeitung Ihrer personenbezogenen
          Daten auf unserer Website.
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
        {/* 1. Überblick */}
        <Section id="ueberblick" title="1. Datenschutz auf einen Blick">
          <Sub title="Allgemeine Hinweise">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </Sub>
          <Sub title="Wer ist verantwortlich für die Datenerfassung?">
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
            &ldquo;Verantwortliche Stelle&rdquo; entnehmen.
          </Sub>
          <Sub title="Wie erfassen wir Ihre Daten?">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen (z.&nbsp;B. über unser Kontaktformular). Andere Daten
            werden automatisch beim Besuch der Website durch unsere IT-Systeme
            erfasst (z.&nbsp;B. Internetbrowser, Betriebssystem, Uhrzeit des
            Seitenaufrufs).
          </Sub>
          <Sub title="Welche Rechte haben Sie?">
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder
            Löschung Ihrer gespeicherten personenbezogenen Daten. Außerdem
            können Sie eine erteilte Einwilligung zur Datenverarbeitung
            jederzeit widerrufen. Ihnen steht zudem ein Beschwerderecht bei der
            zuständigen Aufsichtsbehörde zu.
          </Sub>
        </Section>

        {/* 2. Hosting */}
        <Section id="hosting" title="2. Hosting">
          <p>
            Diese Website wird bei einem externen Dienstleister gehostet. Die
            personenbezogenen Daten, die auf dieser Website erfasst werden,
            werden auf den Servern des Hosters gespeichert (u.&nbsp;a.
            IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten).
          </p>
          <p>
            Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
            (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren,
            schnellen und effizienten Bereitstellung unseres Online-Angebots
            (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </Section>

        {/* 3. Allgemeine Hinweise */}
        <Section id="allgemein" title="3. Allgemeine Hinweise und Pflichtinformationen">
          <Sub title="Verantwortliche Stelle">
            <div className="rounded-lg bg-neutral p-4 not-prose">
              <p className="font-medium text-gray-900">
                Hubert&apos;s Hausmeister Service GmbH
              </p>
              <p>Häuslinger Str. 5, 91056 Erlangen</p>
              <p>
                Telefon:{" "}
                <a
                  href="tel:+49913142827"
                  className="text-brand-blue hover:underline"
                >
                  09131 42827
                </a>
              </p>
              <p className="mt-2">
                Geschäftsführer: Anna Maria Dudek, Hubert Dudek, Sandra Anna
                Dudek
              </p>
            </div>
          </Sub>
          <Sub title="Speicherdauer">
            Ihre personenbezogenen Daten verbleiben bei uns, bis der Zweck für
            die Datenverarbeitung entfällt. Bei berechtigtem Löschersuchen oder
            Widerruf werden Ihre Daten gelöscht, sofern keine anderen rechtlich
            zulässigen Gründe für die Speicherung bestehen (z.&nbsp;B. steuer-
            oder handelsrechtliche Aufbewahrungsfristen).
          </Sub>
          <Sub title="Rechtsgrundlagen">
            Die Datenverarbeitung erfolgt je nach Fall auf Grundlage von Art. 6
            Abs. 1 lit. a (Einwilligung), lit. b (Vertragserfüllung), lit. c
            (rechtliche Verpflichtung) oder lit. f (berechtigtes Interesse)
            DSGVO. Sofern besondere Datenkategorien verarbeitet werden, gilt
            Art. 9 Abs. 2 lit. a DSGVO.
          </Sub>
        </Section>

        {/* 4. Datenerfassung */}
        <Section id="datenerfassung" title="4. Datenerfassung auf dieser Website">
          <Sub title="Server-Log-Dateien">
            Der Provider erhebt und speichert automatisch Informationen in
            Server-Log-Dateien: Browsertyp/-version, Betriebssystem, Referrer
            URL, Hostname, Uhrzeit der Serveranfrage und IP-Adresse. Eine
            Zusammenführung mit anderen Datenquellen wird nicht vorgenommen
            (Art. 6 Abs. 1 lit. f DSGVO).
          </Sub>
          <Sub title="Kontaktformular (Formspree)">
            <p>
              Ihre Angaben aus dem Kontaktformular werden zwecks Bearbeitung bei
              uns gespeichert. Wir nutzen den Dienst{" "}
              <strong>Formspree</strong> (Formspree, Inc., USA). Ihre Daten
              werden an Formspree-Server übertragen und per E-Mail an uns
              weitergeleitet.
            </p>
            <p>
              Die Datenübertragung in die USA erfolgt auf Grundlage von Art. 49
              Abs. 1 lit. a DSGVO. Die Verarbeitung beruht auf Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die jederzeit
              widerrufbar ist.
            </p>
          </Sub>
          <Sub title="Anfrage per E-Mail oder Telefon">
            Ihre Anfrage wird zum Zwecke der Bearbeitung bei uns gespeichert.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
            (Vertragserfüllung/vorvertragliche Maßnahmen) oder lit. f
            (berechtigtes Interesse).
          </Sub>
        </Section>

        {/* 5. Externe Dienste */}
        <Section id="externe-dienste" title="5. Externe Dienste">
          <Sub title="Tailwind CSS (CDN)">
            Diese Website nutzt Tailwind CSS über ein CDN. Beim Aufruf unserer
            Seiten wird Ihre IP-Adresse an den CDN-Anbieter übermittelt. Die
            Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an optimierter Darstellung).
          </Sub>
          <Sub title="Google Maps">
            <p>
              Auf unserer Website nutzen wir Google Maps (Google Ireland
              Limited) zur Darstellung unseres Standorts. Beim Laden der Karte
              werden Daten (u.&nbsp;a. Ihre IP-Adresse) an Google übertragen.
            </p>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an der Darstellung unseres Standorts). Mehr dazu:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:underline"
              >
                Google Datenschutzerklärung
              </a>
            </p>
          </Sub>
        </Section>

        {/* 6. Schriftarten */}
        <Section id="schriftarten" title="6. Schriftarten">
          <p>
            Diese Website verwendet die Schriftart <strong>Inter</strong> lokal
            (Self-Hosting). Es wird kein externes CDN wie Google Fonts
            verwendet. Es werden keine Daten an Drittanbieter übertragen
            (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </Section>

        {/* 7. Soziale Medien */}
        <Section id="soziale-medien" title="7. Soziale Medien">
          <p>
            Auf unserer Website finden Sie Links zu unseren Profilen auf{" "}
            <strong>Facebook</strong> und <strong>Instagram</strong> (Meta
            Platforms Ireland Limited). Wir verwenden ausschließlich einfache
            Hyperlinks – keine Plugins, Tracking-Pixel oder Tracker. Erst wenn
            Sie aktiv auf einen Link klicken, werden Sie auf die externe
            Plattform weitergeleitet.
          </p>
        </Section>

        {/* 8. Ihre Rechte */}
        <Section id="ihre-rechte" title="8. Ihre Rechte">
          <div className="grid gap-4 sm:grid-cols-2">
            <RightCard title="Auskunft" article="Art. 15 DSGVO">
              Recht auf unentgeltliche Auskunft über Ihre gespeicherten Daten.
            </RightCard>
            <RightCard title="Berichtigung" article="Art. 16 DSGVO">
              Recht auf Berichtigung unrichtiger oder unvollständiger Daten.
            </RightCard>
            <RightCard title="Löschung" article="Art. 17 DSGVO">
              Recht auf Löschung Ihrer gespeicherten Daten.
            </RightCard>
            <RightCard title="Einschränkung" article="Art. 18 DSGVO">
              Recht auf Einschränkung der Verarbeitung Ihrer Daten.
            </RightCard>
            <RightCard title="Datenübertragbarkeit" article="Art. 20 DSGVO">
              Recht auf Aushändigung Ihrer Daten in maschinenlesbarem Format.
            </RightCard>
            <RightCard title="Widerruf" article="Art. 7 Abs. 3 DSGVO">
              Recht auf jederzeitigen Widerruf einer erteilten Einwilligung.
            </RightCard>
          </div>
          <div className="mt-6 rounded-lg bg-neutral p-4">
            <p className="text-xs">
              <strong>Aufsichtsbehörde:</strong> Bayerisches Landesamt für
              Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach,{" "}
              <a
                href="https://www.lda.bayern.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:underline"
              >
                www.lda.bayern.de
              </a>
            </p>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-6">
        <Link href="/" className="text-sm text-brand-blue hover:underline">
          ← Zurück zur Startseite
        </Link>
        <p className="text-xs text-gray-400">Stand: Februar 2026</p>
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
      <h2 className="mb-5 text-xl font-bold text-brand-blue">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed text-gray-600">
        {children}
      </div>
    </div>
  );
}

function Sub({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold text-gray-900">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function RightCard({
  title,
  article,
  children,
}: {
  title: string;
  article: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
      <p className="text-xs font-medium text-brand-blue">{article}</p>
      <h4 className="mt-1 font-semibold text-gray-900">{title}</h4>
      <p className="mt-1 text-xs text-gray-500">{children}</p>
    </div>
  );
}
