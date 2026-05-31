"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Calendar, Compass } from "lucide-react";

interface HeroProps {
  onOpenReservation?: () => void;
}

// Atmospheric sunlight motes — floating golden dust in illuminated air, NOT stars
// 14 total (70% reduction); all clustered near the sun for depth and restraint
const atmosphericMotes = [
  // Left solar aureole
  { x: "22%", y: "14%", size: 1.4, brightness: "faint" },
  { x: "30%", y: "8%",  size: 1.7, brightness: "medium" },
  { x: "18%", y: "28%", size: 1.0, brightness: "faint" },
  { x: "35%", y: "20%", size: 1.2, brightness: "faint" },
  // Right solar aureole
  { x: "70%", y: "10%", size: 1.6, brightness: "medium" },
  { x: "78%", y: "20%", size: 1.1, brightness: "faint" },
  { x: "74%", y: "4%",  size: 1.0, brightness: "faint" },
  { x: "66%", y: "30%", size: 1.3, brightness: "faint" },
  // Central halo — most concentrated
  { x: "44%", y: "6%",  size: 1.2, brightness: "faint" },
  { x: "56%", y: "8%",  size: 1.5, brightness: "medium" },
  { x: "50%", y: "24%", size: 1.0, brightness: "faint" },
  { x: "42%", y: "18%", size: 1.1, brightness: "faint" },
  { x: "58%", y: "15%", size: 1.0, brightness: "faint" },
  { x: "48%", y: "34%", size: 1.3, brightness: "faint" },
];

// A handful of soft glowing stars — dark theme only
const glowingStars = [
  { x: "6%",  y: "9%",  size: 2.4 },
  { x: "14%", y: "22%", size: 2.0 },
  { x: "88%", y: "7%",  size: 2.8 },
  { x: "92%", y: "24%", size: 2.0 },
  { x: "38%", y: "5%",  size: 2.2 },
  { x: "62%", y: "6%",  size: 2.5 },
  { x: "80%", y: "38%", size: 1.8 },
  { x: "10%", y: "44%", size: 1.8 },
  { x: "52%", y: "44%", size: 2.0 },
  { x: "76%", y: "14%", size: 3.2 },
  { x: "4%",  y: "58%", size: 2.2 },
  { x: "94%", y: "54%", size: 2.4 },
  { x: "26%", y: "62%", size: 1.8 },
  { x: "70%", y: "60%", size: 2.0 },
  { x: "48%", y: "68%", size: 2.6 },
  { x: "84%", y: "66%", size: 1.8 },
  // Additional bright stars
  { x: "18%", y: "12%", size: 2.6 },
  { x: "33%", y: "34%", size: 2.2 },
  { x: "58%", y: "48%", size: 2.4 },
  { x: "82%", y: "12%", size: 2.0 },
  { x: "96%", y: "42%", size: 2.8 },
  { x: "3%",  y: "74%", size: 2.2 },
  { x: "42%", y: "78%", size: 2.0 },
  { x: "72%", y: "74%", size: 2.4 },
  // More bright stars
  { x: "24%", y: "48%", size: 2.3 },
  { x: "90%", y: "34%", size: 2.6 },
  { x: "8%",  y: "32%", size: 2.1 },
  { x: "44%", y: "52%", size: 2.0 },
  { x: "66%", y: "42%", size: 2.5 },
  { x: "16%", y: "68%", size: 2.2 },
  { x: "56%", y: "72%", size: 2.3 },
  { x: "86%", y: "78%", size: 2.0 },
];

export default function Hero({ onOpenReservation }: HeroProps) {
  const { scrollY } = useScroll();
  
  // High-performance restrained scroll scaling & translation for luxury sun depth zoom
  const sunY = useTransform(scrollY, [0, 800], [0, 260]);
  const sunScale = useTransform(scrollY, [0, 800], [1, 4.2]);
  const sunOpacity = useTransform(scrollY, [0, 700], [0.8, 0.45]);
  const textY = useTransform(scrollY, [0, 800], [0, 80]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 bg-beige-50 dark:bg-charcoal-950 text-charcoal-900 dark:text-beige-50 transition-colors duration-1000"
    >
      
      {/* 1. CELESTIAL BACKGROUND & LIGHTING SYSTEM - Restrained and Atmospheric */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Symmetrical Left and Right Side Ambient Sunburst Glows - Dissolving toward the pristine white center column */}
        {/* Left Corner & Side Joyful Sunset Glow - richer and more colorful */}
        <div className="absolute left-0 top-0 bottom-0 w-[45%] bg-gradient-to-r from-[#EAD09D]/70 via-[#FAF1D6]/40 to-transparent pointer-events-none z-0 dark:hidden" />
        <div className="absolute left-0 top-0 h-[80%] w-[38%] bg-gradient-to-br from-[#FDF0EB]/65 via-[#FAF1D6]/30 to-transparent blur-[40px] pointer-events-none z-0 dark:hidden" />
        
        {/* Right Corner & Side Joyful Sunset Glow - richer and more colorful */}
        <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-gradient-to-l from-[#EAD09D]/70 via-[#FAF1D6]/40 to-transparent pointer-events-none z-0 dark:hidden" />
        <div className="absolute right-0 top-0 h-[80%] w-[38%] bg-gradient-to-bl from-[#FDF0EB]/65 via-[#FAF1D6]/30 to-transparent blur-[40px] pointer-events-none z-0 dark:hidden" />

        {/* Original Dark Theme subtle corner backplates - UNCHANGED and ISOLATED */}
        <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-[#CCA553]/3 blur-[130px] hidden dark:block" />
        <div className="absolute -bottom-[20%] -right-[15%] w-[70vw] h-[70vw] bg-[#A6823C]/1.5 blur-[150px] hidden dark:block" />

        {/* Atmospheric sunlight motes — floating golden dust near the sun, dark theme only */}
        {atmosphericMotes.map((mote, idx) => {
          const duration = `${18 + (idx % 5) * 4}s`;
          const delay = `${(idx % 7) * 1.2}s`;
          // No drop-shadows — just pure translucent floating dust
          const minOpacity = mote.brightness === "medium" ? "0.28" : "0.10";
          const maxOpacity = mote.brightness === "medium" ? "0.48" : "0.25";

          return (
            <div
              key={idx}
              className="absolute rounded-full bg-gold-300 animate-star-twinkle z-10 hidden dark:block"
              style={{
                left: mote.x,
                top: mote.y,
                width: `${mote.size}px`,
                height: `${mote.size}px`,
                // @ts-ignore
                "--star-duration": duration,
                "--star-opacity-min": minOpacity,
                "--star-opacity-max": maxOpacity,
                animationDelay: delay,
              }}
            />
          );
        })}

        {/* Soft glowing stars — restrained handful, dark theme only */}
        {glowingStars.map((star, idx) => (
          <div
            key={`glow-${idx}`}
            className="absolute rounded-full bg-gold-300 animate-star-twinkle z-10 hidden dark:block"
            style={{
              left: star.x,
              top: star.y,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: `0 0 ${star.size * 2.5}px rgba(234,208,157,0.75), 0 0 ${star.size * 5}px rgba(204,165,83,0.35)`,
              // @ts-ignore
              "--star-duration": `${10 + (idx % 4) * 3.5}s`,
              "--star-opacity-min": "0.55",
              "--star-opacity-max": "0.90",
              animationDelay: `${(idx % 5) * 0.8}s`,
            }}
          />
        ))}


        <motion.div
          style={{ y: sunY, scale: sunScale, opacity: sunOpacity }}
          className="absolute left-1/2 top-[8%] -translate-x-1/2 w-[96vw] h-[96vw] md:w-[63vw] md:h-[63vw] max-w-[1000px] max-h-[1000px] flex items-center justify-center z-0 origin-center"
        >
          {/* Dark theme: layered atmospheric corona halos — light scattering and depth */}
          <div className="absolute inset-[-24%] rounded-full bg-[#B8903A]/4 blur-[120px] hidden dark:block pointer-events-none" />
          <div className="absolute inset-[-10%] rounded-full bg-[#CCA553]/6 blur-[70px] hidden dark:block pointer-events-none" />

          {/* Infinite slow rotation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
            className="w-full h-full flex items-center justify-center origin-center"
          >
            <svg viewBox="0 0 400 400" className="w-full h-full transition-colors duration-1000">
              <defs>
                <radialGradient id="sunAuraDark" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stopColor="#CCA553" stopOpacity="0.40" />
                  <stop offset="18%"  stopColor="#B8903A" stopOpacity="0.24" />
                  <stop offset="44%"  stopColor="#A6823C" stopOpacity="0.11" />
                  <stop offset="70%"  stopColor="#8C6B2A" stopOpacity="0.03" />
                  <stop offset="100%" stopColor="#120E0D" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="sunAuraLight" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stopColor="#EAC45A" stopOpacity="0.92" />
                  <stop offset="22%"  stopColor="#D4A83A" stopOpacity="0.72" />
                  <stop offset="50%"  stopColor="#F2CC70" stopOpacity="0.44" />
                  <stop offset="80%"  stopColor="#FFF5D6" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Light — outer haze, ~12% stronger glow */}
              <circle cx="200" cy="200" r="195" fill="url(#sunAuraLight)" className="dark:hidden transition-all duration-1000" style={{ opacity: 0.66, filter: 'blur(6px)' }} />
              {/* Dark — outer haze with heavy diffusion for atmospheric scatter */}
              <circle cx="200" cy="200" r="195" fill="url(#sunAuraDark)"  className="hidden dark:block transition-all duration-1000" style={{ opacity: 0.65, filter: 'blur(5px)' }} />

              {/* Light — core radiant mass */}
              <circle cx="200" cy="200" r="170" fill="url(#sunAuraLight)" className="dark:hidden transition-all duration-1000" style={{ opacity: 0.84, filter: 'blur(2px)' }} />
              {/* Dark — core mass with deep blur: shape dissolves into atmosphere */}
              <circle cx="200" cy="200" r="152" fill="url(#sunAuraDark)"  className="hidden dark:block transition-all duration-1000" style={{ opacity: 0.52, filter: 'blur(9px)' }} />

              {/* Rays — 15% shorter: endpoint 148 → 126. Equal length, equal spacing. */}
              {Array.from({ length: 16 }).map((_, idx) => {
                const angle = (idx * 22.5 * Math.PI) / 180;
                return (
                  <React.Fragment key={idx}>
                    <line
                      x1="200" y1="200"
                      x2={200 + 126 * Math.cos(angle)}
                      y2={200 + 126 * Math.sin(angle)}
                      className="stroke-gold-500/28 dark:hidden"
                      strokeWidth="1.2"
                    />
                    <line
                      x1="200" y1="200"
                      x2={200 + 126 * Math.cos(angle)}
                      y2={200 + 126 * Math.sin(angle)}
                      className="hidden dark:block stroke-gold-300/7"
                      strokeWidth="1.0"
                    />
                  </React.Fragment>
                );
              })}
            </svg>
          </motion.div>
        </motion.div>
 
        {/* Dynamic Theme-Responsive Gradient Floor */}
        <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-beige-50 dark:from-charcoal-950 via-transparent to-transparent z-2 transition-colors duration-1000" />
      </div>
 
      {/* 3. CINEMATIC EDITORIAL TEXT & ACTIONS */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center"
      >
        
        {/* Subtitle */}
        <div className="overflow-hidden mb-7">
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 0.95 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.45em] text-[#6E5010] dark:text-gold-200 dark:text-glow-gold font-extrabold"
          >
            Vedic Wisdom • Circadian Wellness Sanctuary
          </motion.p>
        </div>
 
        {/* Editorial Heading - Scaled for supreme cinematic visual scale */}
        <div className="overflow-hidden py-2 mb-10">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4.5xl md:text-6.5xl lg:text-8xl font-light tracking-tight leading-[1.08] text-charcoal-900 dark:text-beige-50 max-w-4xl"
          >
            Elevated Living <br />
            <span className="font-serif-editorial text-[#7A5B15] dark:text-gold-300 font-normal italic">Through Dincharya</span>
          </motion.h1>
        </div>
 
        {/* Sophisticated Description - Higher visual contrast for Light theme */}
        <div className="overflow-hidden mb-28">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.95 }}
            transition={{ delay: 0.8, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-xs md:text-sm lg:text-base text-charcoal-900 dark:text-beige-50 max-w-xl leading-relaxed tracking-wider font-normal"
          >
            Step into a silent wellness sanctuary of circadian alignment, adaptogenic elixirs, and mindful luxury.
          </motion.p>
        </div>
 
        {/* Luxury CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="#philosophy"
            className="group flex items-center space-x-3 px-9 py-4 bg-charcoal-900 dark:bg-beige-50 text-beige-50 dark:text-charcoal-950 rounded-full font-sans text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-gold-500 dark:hover:bg-gold-350 transition-all duration-500"
          >
            <Compass className="w-3.5 h-3.5 opacity-80" />
            <span>Philosophy Journey</span>
          </a>
 
          {onOpenReservation && (
            <button
              onClick={onOpenReservation}
              className="group flex items-center space-x-3 px-9 py-4 border border-charcoal-300 dark:border-beige-300/30 text-charcoal-950 dark:text-beige-50 hover:border-charcoal-900 dark:hover:border-beige-50 rounded-full font-sans text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500"
            >
              <Calendar className="w-3.5 h-3.5 opacity-80" />
              <span>Reserve Table</span>
            </button>
          )}
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ delay: 1.8, duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none"
      >
        <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-charcoal-400 mb-2">
          Scroll to explore
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-charcoal-500" />
      </motion.div>
    </section>
  );
}
