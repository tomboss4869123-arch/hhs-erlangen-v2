"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Lunasa 1409",
    initial: "L",
    color: "bg-[#5AACA8]",
    stars: 5,
    text: "Ich kann den Hausmeisterservice wärmstens empfehlen. Ich hatte ein dringendes Problem und habe um 23 Uhr abends angerufen und der Mitarbeiter war äußerst nett und hat sich sofort um mein Anliegen gekümmert. Vielen Dank für die schnelle Hilfe.",
  },
  {
    name: "christian k.",
    initial: "C",
    color: "bg-[#5C6BC0]",
    stars: 5,
    text: "Sehr guter und freundlicher Service. Termine und Fragen konnten unkompliziert telefonisch geklärt werden.",
  },
  {
    name: "Louisa Macheleidt",
    initial: "L",
    color: "bg-[#43A047]",
    stars: 5,
    text: "Super Service, absolute Empfehlung \u2013 Von der ersten Kontaktaufnahme an war Herr Harris äußerst sympathisch, professionell, freundlich und hat sich um alle unsere Anliegen gekümmert. Besonders beeindruckt hat mich die schnelle Reaktionszeit und die Flexibilität bei kurzfristigen Anfragen.",
  },
  {
    name: "M F",
    initial: "M",
    color: "bg-[#7E57C2]",
    stars: 5,
    text: "Herr Harris ist sehr humorvoll, tüchtig und pragmatisch. Wir fühlen uns sehr wohl mit ihm als Hausmeister.",
  },
  {
    name: "Victorius",
    initial: "V",
    color: "bg-[#546E7A]",
    stars: 5,
    text: "Alle Terminabsprachen wurden eingehalten \u2013 es wurde sogar einmal vor dem eigentlichen Termin angerufen und gefragt, ob es spontan möglich sei vorbeizukommen um uns schneller helfen zu können. Hat mich sehr beeindruckt und positiv überrascht. Preislich wirklich fair und alle Mitarbeiter inkl. Inhaber sehr freundlich.",
  },
  {
    name: "Inge",
    initial: "I",
    color: "bg-[#5AACA8]",
    stars: 5,
    text: "Wir sind mit Huberts Hausmeisterservice rundum zufrieden! Alles lief schnell und reibungslos \u2013 unsere Tür funktioniert jetzt wieder einwandfrei. Zuverlässige, gründliche Arbeit, pünktlich und freundlich. Faire Preise und ein Ergebnis, das überzeugt. Können wir absolut weiterempfehlen!",
  },
  {
    name: "Marco",
    initial: "M",
    color: "bg-[#4A148C]",
    stars: 5,
    text: "Meine erste Bewertung seit >27 Jahren, da ich von den handwerklichen Arbeiten und dem Service mehr als beeindruckt war. Nach nicht einmal einer Stunde waren sie schon vor Ort. Die Arbeiter haben sich noch viel Zeit genommen der Ursache auf den Grund zu gehen.",
  },
  {
    name: "Anna Wolf-Serebrina",
    initial: "A",
    color: "bg-[#BF360C]",
    stars: 5,
    text: "Nachdem in der Wohnung der Strom ausgefallen war, fand ich in dem Hausmeister Herr Harris sehr schnell einen freundlichen Ansprechpartner. Dieser kümmerte sich sehr rasch um einen Elektriker. Insgesamt wurde sehr professionell und adäquat gehandelt. Man kann den Hubert\u2019s Hausmeister Service nur weiter empfehlen.",
  },
];

// Duplicate for seamless infinite loop
const loopedReviews = [...reviews, ...reviews];

const OVERALL_RATING = 4.2;
const FULL_STARS = Math.floor(OVERALL_RATING);
const PARTIAL = OVERALL_RATING - FULL_STARS;
const EMPTY_STARS = 5 - FULL_STARS - (PARTIAL > 0 ? 1 : 0);
const AUTO_SPEED = 30; // pixels per second

function RatingStars({ size = "h-5 w-5" }: { size?: string }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(FULL_STARS)].map((_, i) => (
        <Star key={`full-${i}`} className={`${size} fill-[#FBBC05] text-[#FBBC05]`} />
      ))}
      {PARTIAL > 0 && (
        <div className="relative">
          <Star className={`${size} text-gray-200`} />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${PARTIAL * 100}%` }}>
            <Star className={`${size} fill-[#FBBC05] text-[#FBBC05]`} />
          </div>
        </div>
      )}
      {[...Array(EMPTY_STARS)].map((_, i) => (
        <Star key={`empty-${i}`} className={`${size} text-gray-200`} />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div className="w-[280px] flex-shrink-0 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:w-[360px]">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${review.color}`}
        >
          {review.initial}
        </div>
        <p className="truncate text-sm font-semibold text-gray-900">
          {review.name}
        </p>
      </div>
      <div className="mt-3 flex gap-0.5">
        {[...Array(review.stars)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        {review.text}
      </p>
    </div>
  );
}

export default function ReviewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const pausedRef = useRef(false);
  const animRef = useRef(0);
  const manualPauseRef = useRef(0);
  const posRef = useRef(0); // sub-pixel accumulator

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(true);
  }, []);

  // Seamless infinite auto-scroll
  useEffect(() => {
    let prev = 0;

    function tick(now: number) {
      if (prev > 0) {
        const el = scrollRef.current;
        const isPaused = pausedRef.current || now < manualPauseRef.current;
        if (el && !isPaused) {
          const dt = (now - prev) / 1000;
          posRef.current += AUTO_SPEED * dt;
          el.scrollLeft = Math.round(posRef.current);

          const halfWidth = el.scrollWidth / 2;
          if (posRef.current >= halfWidth) {
            posRef.current -= halfWidth;
            el.scrollLeft = Math.round(posRef.current);
          }
        } else if (el) {
          // Keep accumulator in sync when paused (e.g. after manual arrow click)
          posRef.current = el.scrollLeft;
        }
      }
      prev = now;
      animRef.current = requestAnimationFrame(tick);
    }

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  function scroll(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    // Pause auto-scroll for 800ms so it doesn't fight the smooth scroll
    manualPauseRef.current = performance.now() + 800;
    const cardWidth = el.querySelector<HTMLElement>(":scope > div")?.offsetWidth ?? 340;
    el.scrollBy({
      left: direction === "left" ? -cardWidth - 20 : cardWidth + 20,
      behavior: "smooth",
    });
  }

  return (
    <section className="py-16 lg:py-20">
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          <span className="text-lg font-semibold text-gray-700">Google Bewertungen</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-4xl font-bold text-gray-900">{OVERALL_RATING}</span>
          <RatingStars />
        </div>
      </div>

      {/* Carousel wrapper */}
      <div
        className="relative"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        {/* Fade edges */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent transition-opacity duration-300"
          style={{ opacity: canScrollLeft ? 1 : 0 }}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

        {/* Arrow buttons — hidden on mobile (users swipe instead) */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute -left-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:flex"
            aria-label="Vorherige Bewertung"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
        )}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:flex"
          aria-label="Nächste Bewertung"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>

        {/* Scrollable track with duplicated cards for seamless looping */}
        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-5 overflow-x-auto px-1 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {loopedReviews.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
