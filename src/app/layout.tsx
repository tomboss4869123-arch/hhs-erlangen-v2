import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hubert's Hausmeisterservice Erlangen – 24h Notdienst | Winterdienst | Reinigung",
  description:
    "Professioneller Hausmeisterservice in Erlangen seit über 20 Jahren. 24h Notdienst, Winterdienst, Gebäudereinigung, Reparaturen & Urlaubsservice. Tel: 09131 42827",
  keywords:
    "Hausmeisterservice Erlangen, Winterdienst Erlangen, Gebäudereinigung, 24h Notdienst, Räum- und Streudienst, Hausmeister Erlangen",
  openGraph: {
    title: "Hubert's Hausmeisterservice Erlangen",
    description:
      "Ihr kompetenter Partner für Haus & Garten seit über 20 Jahren. 24h Notdienst: 09131 42827",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} antialiased bg-neutral`}>
        <Header />
        <main className="mx-auto max-w-6xl bg-white px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
