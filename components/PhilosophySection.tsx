"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotationDuration, setRotationDuration] = useState(240);

  useEffect(() => {
    // Detect theme class on document element
    const isDark = document.documentElement.classList.contains("dark");
    setRotationDuration(isDark ? 240 : 48);

    const observer = new MutationObserver(() => {
      const darkActive = document.documentElement.classList.contains("dark");
      setRotationDuration(darkActive ? 240 : 48);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="philosophy" 
      ref={containerRef}
      className="relative py-36 md:py-52 bg-beige-100 dark:bg-charcoal-900 text-charcoal-900 dark:text-beige-50 overflow-hidden transition-colors duration-1000"
    >
      
      {/* Static Atmospheric Gradient Aura - High performance, zero scroll repaints */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] bg-gold-500/6 dark:bg-gold-550/2 rounded-full blur-[90px] transition-colors duration-1000" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[55vw] h-[55vw] bg-[#A6823C]/3 dark:bg-[#A6823C]/1.5 rounded-full blur-[100px] transition-colors duration-1000" />
      </div>

      {/* 1. THE GIANT CELESTIAL DINCHARYA CHAKRA WHEEL - An elegant, subtle background element */}
      <div className="absolute right-[-5%] top-[10%] w-[50vw] h-[50vw] md:w-[42vw] md:h-[42vw] max-w-[550px] max-h-[550px] z-0 pointer-events-none opacity-[0.22] dark:opacity-[0.025] blur-[0.2px] transition-opacity duration-1000">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: rotationDuration, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <svg className="w-full h-full text-gold-500 dark:text-gold-300" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.28">
            {/* Concentric rings denoting time layers */}
            <circle cx="100" cy="100" r="95" />
            <circle cx="100" cy="100" r="90" strokeDasharray="1 3" />
            <circle cx="100" cy="100" r="85" />
            <circle cx="100" cy="100" r="70" strokeDasharray="4 2" />
            <circle cx="100" cy="100" r="55" />
            <circle cx="100" cy="100" r="40" strokeDasharray="1 4" />
            <circle cx="100" cy="100" r="25" />
            <circle cx="100" cy="100" r="8" />

            {/* spokes of the circadian diurnal wheel */}
            {Array.from({ length: 24 }).map((_, spokeIdx) => (
              <line
                key={spokeIdx}
                x1="100"
                y1="10"
                x2="100"
                y2="90"
                transform={`rotate(${spokeIdx * 15} 100 100)`}
                strokeWidth={spokeIdx % 4 === 0 ? "0.2" : "0.1"}
                strokeDasharray={spokeIdx % 2 === 0 ? "" : "2 2"}
              />
            ))}
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Quiet Luxury Storytelling (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-3">
                <span className="h-[1px] w-10 bg-gold-500" />
                <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold-700 dark:text-gold-300 font-bold">
                  Vedic Wisdom for Modern Living
                </span>
              </div>

              <h2 className="font-serif text-5xl md:text-6.5xl lg:text-7.5xl font-light tracking-tight leading-[1.08] text-charcoal-900 dark:text-beige-50">
                Aligning with the <br />
                <span className="font-serif-editorial text-gold-700 dark:text-gold-300 italic">Cosmic Rhythms of Nature</span>
              </h2>

              <p className="font-sans text-sm md:text-base lg:text-lg text-charcoal-900 dark:text-beige-100 leading-relaxed tracking-wider font-normal max-w-xl">
                Derived from the Sanskrit words <span className="font-serif-editorial italic text-charcoal-900 dark:text-beige-100 font-semibold">“Dina”</span> (day) and <span className="font-serif-editorial italic text-charcoal-900 dark:text-beige-100 font-semibold">“Charya”</span> (activity), Dincharya represents the ancient Vedic art of circadian alignment—rituals designed to coordinate our biology with the solar cycle.
              </p>

              <p className="font-sans text-sm md:text-base lg:text-lg text-charcoal-900 dark:text-beige-100 leading-relaxed tracking-wider font-normal max-w-xl">
                At ELEVED, we have translated these timeless heritage principles into an editorial South Delhi hospitality destination. A sanctuary to slow down, nourish your system with adaptogenic botanical elixirs, and inhabit absolute architectural silence. We combine the elegant aesthetics of modern minimal spaces with rich Vedic lineages to restore modern wellness.
              </p>

              <div className="pt-8 grid grid-cols-2 gap-8 border-t border-beige-200 dark:border-charcoal-800 transition-colors duration-1000">
                <div>
                  <h4 className="font-serif text-4xl lg:text-5xl font-light text-gold-600 dark:text-gold-300">100%</h4>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-charcoal-800 dark:text-beige-200 mt-2 font-bold">
                    Botanical & Adaptive
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-4xl lg:text-5xl font-light text-gold-600 dark:text-gold-300">Six Prahars</h4>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-charcoal-800 dark:text-beige-200 mt-2 font-bold">
                    Circadian Flow
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Realistic Photography (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md flex flex-col items-center"
            >
              {/* Premium Lifestyle Image Container - Quiet Luxury Interior */}
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-beige-200 dark:border-charcoal-800 shadow-2xl group transition-all duration-1000">
                <img
                  src="/philosophy.png"
                  alt="Minimal luxury incense burner and stone wellness setup"
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
                />
                
                {/* Translucent warm spiral brush stroke overlay matching the brand guide first image */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <svg viewBox="0 0 200 200" className="w-56 h-56 text-gold-300/70 dark:text-gold-300/40">
                    <path 
                      d="M100,150 C150,150 170,115 145,95 C120,75 55,90 75,125 C95,160 160,125 135,95 C110,65 45,85 80,110" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3.5" 
                      strokeLinecap="round" 
                      strokeDasharray="2 3"
                    />
                  </svg>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-beige-100/90 dark:from-charcoal-950/80 via-transparent to-transparent opacity-90 transition-all duration-1000" />
                
                {/* Ancient Brahmi symbol in overlay corner */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gold-200/90 dark:bg-charcoal-900/80 border border-charcoal-200 dark:border-beige-200/10 flex items-center justify-center font-serif text-sm text-charcoal-900 dark:text-gold-300 backdrop-blur-md transition-colors duration-1000">
                  𑀅
                </div>

                {/* Aesop-like Editorial Label at bottom */}
                <div className="absolute bottom-8 left-8 right-8 text-left">
                  <span className="font-sans text-[9px] uppercase tracking-widest text-gold-700 dark:text-gold-300 font-bold block mb-1">
                    LIFESTYLE PHOTOGRAPHY
                  </span>
                  <p className="font-serif text-lg lg:text-xl font-light text-charcoal-900 dark:text-beige-100 leading-snug transition-colors duration-1000">
                    Tranquil, serene rituals grounded in natural sunlight.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
