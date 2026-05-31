"use client";
import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface FooterProps {
  onOpenReservation?: () => void;
}

export default function Footer({ onOpenReservation }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-beige-100 dark:bg-charcoal-900 text-charcoal-900 dark:text-beige-50 overflow-hidden transition-colors duration-1000">

      {/* Ambient background gradients */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] rounded-full bg-gold-400/4 dark:bg-gold-500/2 blur-[110px] transition-colors duration-1000" />
        <div className="absolute top-0 left-0 w-[45vw] h-[45vw] rounded-full bg-beige-200/60 dark:bg-charcoal-800/30 blur-[90px] transition-colors duration-1000" />
      </div>

      {/* ─── Decorative top ornament ─── */}
      <div className="relative z-10 flex flex-col items-center pt-20 pb-0">
        <div className="flex items-center w-full max-w-7xl px-6 md:px-12 gap-6">
          <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-beige-300 dark:via-charcoal-700 to-beige-300 dark:to-charcoal-700 transition-colors duration-1000" />
          <span className="font-serif-editorial text-[13px] italic text-gold-600 dark:text-gold-300 tracking-[0.18em] whitespace-nowrap transition-colors duration-1000">
            ✦ &nbsp; Circadian Luxury &nbsp; ✦
          </span>
          <span className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-beige-300 dark:via-charcoal-700 to-beige-300 dark:to-charcoal-700 transition-colors duration-1000" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* ─── Reservation / Newsletter CTA ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pt-24 pb-28 border-b border-beige-200/70 dark:border-charcoal-800/60 items-center transition-colors duration-1000">

          {/* Reservation narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-sans text-[10px] uppercase tracking-[0.38em] text-gold-600 dark:text-gold-300 font-bold block transition-colors duration-1000">
              Vedic Wisdom · South Delhi
            </span>
            <h3 className="font-serif text-3.5xl md:text-5xl font-light leading-[1.12] transition-colors duration-1000">
              Begin Your Journey <br />
              <span className="font-serif-editorial text-gold-600 dark:text-gold-300 italic">at our Sanctuary Hearth</span>
            </h3>
            <p className="font-sans text-xs md:text-sm text-charcoal-700 dark:text-beige-200 font-light leading-relaxed max-w-lg tracking-wider transition-colors duration-1000">
              Experience the convergence of ancient Ayurveda and quiet architectural luxury. We recommend booking table reservations and wellness consultations in advance. Walk-ins are accommodated based on cosmic cycles of space.
            </p>
            {onOpenReservation && (
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center space-x-3 px-8 py-3.5 bg-charcoal-900 dark:bg-beige-50 text-beige-50 dark:text-charcoal-950 rounded-full font-sans text-[10px] uppercase tracking-[0.22em] font-bold hover:bg-gold-500 dark:hover:bg-gold-350 transition-all duration-500 cursor-pointer"
              >
                <span>Reserve a Placement</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-5 lg:col-start-8">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="space-y-2">
                <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-charcoal-700 dark:text-beige-200 block font-bold transition-colors duration-1000">
                  The ELEVED Journal
                </span>
                <p className="font-sans text-xs text-charcoal-600 dark:text-charcoal-400 font-light tracking-wide leading-relaxed transition-colors duration-1000">
                  Seasonal wellness invitations, Dincharya guides, and editorial stories.
                </p>
              </div>

              <div className="relative flex items-center border-b border-beige-300 dark:border-charcoal-700 pb-3 group focus-within:border-gold-500 transition-colors duration-500">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-transparent border-none text-sm font-light text-charcoal-900 dark:text-beige-100 placeholder-charcoal-400 dark:placeholder-charcoal-600 focus:outline-none focus:ring-0 py-2.5 font-sans tracking-widest transition-colors duration-1000"
                  required
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-500 group-focus-within:w-full" />
                <button
                  type="submit"
                  className="p-2.5 text-charcoal-800 dark:text-beige-100 hover:text-gold-500 dark:hover:text-gold-300 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-[17px] h-[17px]" />
                </button>
              </div>

              <p className="font-sans text-[10px] text-charcoal-500 dark:text-charcoal-500 tracking-wider transition-colors duration-1000">
                By subscribing, you agree to receive digital Dincharya guides. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        {/* ─── Main Footer Links ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-14 py-24">

          {/* Brand & Vibe — 4 cols */}
          <div className="lg:col-span-4 space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <img
                src="/eleved-symbol.png"
                alt=""
                aria-hidden="true"
                className="h-10 w-auto object-contain flex-shrink-0 transition-all duration-500 dark:brightness-125 dark:saturate-125"
              />
              <span className="inline-flex items-baseline font-sans text-[1.4rem] font-light tracking-[0.22em] text-charcoal-950 dark:text-[#EAD09D] transition-colors duration-500 lowercase select-none whitespace-nowrap">
                ele
                <span className="relative mx-[0.04em] leading-none">
                  <span className="invisible text-[0.85em]" aria-hidden="true">v</span>
                  <span className="absolute left-[44%] -translate-x-1/2 w-[55%] h-[1.5px] bg-current" style={{ bottom: '0' }} />
                  <span className="absolute left-1/2 -translate-x-1/2 leading-none text-[0.85em]" style={{ bottom: 'calc(1.5px + 2px)' }}>v</span>
                </span>
                ed
              </span>
            </div>

            <p className="font-sans text-xs text-charcoal-700 dark:text-beige-300 font-light leading-[1.9] max-w-[260px] tracking-wider transition-colors duration-1000">
              A premium South Delhi sanctuary dedicated to slow living, Ayurvedic lineages, and quiet hospitality.
            </p>

            <div className="space-y-2.5">
              <div className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-ping flex-shrink-0" />
                <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-gold-600 dark:text-gold-300 font-bold transition-colors duration-1000">
                  Open Daily: 06:00 AM – 10:00 PM
                </span>
              </div>
              <p className="font-sans text-[10px] text-charcoal-600 dark:text-charcoal-400 tracking-wide pl-[18px] transition-colors duration-1000">
                Chanakyapuri, New Delhi
              </p>
            </div>
          </div>

          {/* Philosophy — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <h4 className="font-sans text-[10px] uppercase tracking-[0.30em] text-charcoal-900 dark:text-beige-100 font-bold transition-colors duration-1000">
                Philosophy
              </h4>
              <span className="block h-[1px] w-8 bg-gold-500/50" />
            </div>
            <ul className="space-y-4">
              {["Circadian Science", "The 6 Prahars", "Sattvic Sourcing", "Adaptogens"].map((link) => (
                <li key={link}>
                  <a href="#philosophy" className="font-sans text-[11px] text-charcoal-600 dark:text-beige-300 hover:text-gold-600 dark:hover:text-gold-300 transition-colors font-light tracking-wide leading-none">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reservations — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <h4 className="font-sans text-[10px] uppercase tracking-[0.30em] text-charcoal-900 dark:text-beige-100 font-bold transition-colors duration-1000">
                Reservations
              </h4>
              <span className="block h-[1px] w-8 bg-gold-500/50" />
            </div>
            <ul className="space-y-4">
              {[
                { label: "Book Table", action: true },
                { label: "Wellness Consult", action: true },
                { label: "Private Sound Bath", action: true },
                { label: "Gift an Experience", action: true },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={item.action ? onOpenReservation : undefined}
                    className="font-sans text-[11px] text-charcoal-600 dark:text-beige-300 hover:text-gold-600 dark:hover:text-gold-300 transition-colors font-light tracking-wide text-left cursor-pointer leading-none"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Journal — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <h4 className="font-sans text-[10px] uppercase tracking-[0.30em] text-charcoal-900 dark:text-beige-100 font-bold transition-colors duration-1000">
                Journal
              </h4>
              <span className="block h-[1px] w-8 bg-gold-500/50" />
            </div>
            <ul className="space-y-4">
              {["Summer Solstice", "Brahmi for Focus", "Delhi Slow Living", "Vedic Sound"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-sans text-[11px] text-charcoal-600 dark:text-beige-300 hover:text-gold-600 dark:hover:text-gold-300 transition-colors font-light tracking-wide leading-none">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Location — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <h4 className="font-sans text-[10px] uppercase tracking-[0.30em] text-charcoal-900 dark:text-beige-100 font-bold transition-colors duration-1000">
                Connect
              </h4>
              <span className="block h-[1px] w-8 bg-gold-500/50" />
            </div>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[11px] text-charcoal-600 dark:text-beige-300 hover:text-gold-600 dark:hover:text-gold-300 transition-colors font-light flex items-center space-x-1.5 tracking-wide leading-none"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-sans text-[11px] text-charcoal-600 dark:text-beige-300 hover:text-gold-600 dark:hover:text-gold-300 transition-colors font-light flex items-center space-x-1.5 tracking-wide leading-none"
                >
                  <span>Journal</span>
                  <ArrowUpRight className="w-3 h-3 opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-sans text-[11px] text-charcoal-600 dark:text-beige-300 hover:text-gold-600 dark:hover:text-gold-300 transition-colors font-light flex items-center space-x-1.5 tracking-wide leading-none"
                >
                  <span>Press Kit</span>
                  <ArrowUpRight className="w-3 h-3 opacity-70" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ─── Luxury bottom row ─── */}
        <div className="border-t border-beige-200/60 dark:border-charcoal-800/50 pt-12 pb-16 flex flex-col md:flex-row justify-between items-center gap-7 text-center transition-colors duration-1000">

          <span className="font-sans text-[10px] text-charcoal-500 dark:text-charcoal-500 tracking-widest font-light transition-colors duration-1000">
            © {new Date().getFullYear()} ELEVED Wellness Hospitality
          </span>

          <div className="flex flex-col items-center gap-2">
            <span className="font-serif-editorial text-[11px] italic text-gold-600 dark:text-gold-300 tracking-[0.1em] transition-colors duration-1000">
              Aligning Surya and Chandra in South Delhi
            </span>
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-charcoal-400 dark:text-charcoal-600 transition-colors duration-1000">
              Vedic Wellness · Quiet Luxury · Circadian Living
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="group font-sans text-[10px] uppercase tracking-[0.28em] text-charcoal-700 hover:text-gold-600 dark:text-beige-300 dark:hover:text-gold-300 transition-all font-bold flex items-center space-x-2.5 cursor-pointer"
          >
            <span>Return to Summit</span>
            <span className="w-5 h-[1px] bg-charcoal-400 dark:bg-charcoal-600 group-hover:w-8 group-hover:bg-gold-500 transition-all duration-500" />
          </button>

        </div>
      </div>
    </footer>
  );
}
