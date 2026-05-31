"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Sunset, Sunrise, Moon, Sparkles, Compass } from "lucide-react";

interface Prahar {
  name: string;
  sanskrit: string;
  time: string;
  desc: string;
  elements: string;
  tonic: string;
  accent: string;
  icon: React.ComponentType<{ className?: string }>;
  energy: string;
}

export default function DincharyaSection() {
  const [activePrahar, setActivePrahar] = useState<string | null>(null);

  const prahars: Prahar[] = [
    {
      name: "UDAYA",
      sanskrit: "उदय",
      time: "06:00 – 10:00",
      energy: "Awakening & Grounding",
      elements: "Earth & Water (Kapha)",
      desc: "Greet the dawn with slow movements and internal focus. A phase of heavy, cool energy that requires gentle physical stimulation to awaken.",
      tonic: "Brahmi Tea & Adaptogenic Morning Matcha",
      icon: Sunrise,
      accent: "from-[#EAD09D]/45 to-[#FAF1D6]/15 dark:from-amber-200/5 dark:to-orange-100/1",
    },
    {
      name: "OORJA",
      sanskrit: "ऊर्जा",
      time: "10:00 – 14:00",
      energy: "Peak Focus & Digestion",
      elements: "Fire & Water (Pitta)",
      desc: "Align with the solar peak. The body's digestive and metabolic fire is at its highest, making this the prime time for intellect and conscious meals.",
      tonic: "Adaptogenic Saffron Espresso & Pitta Brews",
      icon: Sun,
      accent: "from-[#EAD09D]/45 to-[#FAF1D6]/15 dark:from-yellow-200/5 dark:to-amber-100/1",
    },
    {
      name: "DEEPANA",
      sanskrit: "दीपन",
      time: "14:00 – 18:00",
      energy: "Creativity & Mental Clarity",
      elements: "Air & Space (Vata)",
      desc: "A lighter, more cerebral phase of the day. Perfect for creative exploration, philosophical reflection, and stimulating the intellectual fire.",
      tonic: "Cardamom Ashwagandha Cortado & Herbal Waters",
      icon: Sparkles,
      accent: "from-[#EAD09D]/45 to-[#FAF1D6]/15 dark:from-amber-100/5 dark:to-stone-200/1",
    },
    {
      name: "SAMA",
      sanskrit: "सम",
      time: "18:00 – 22:00",
      energy: "Calm, Social & Reflection",
      elements: "Earth & Water (Kapha)",
      desc: "As the sun dips below the horizon, prepare the mind and nervous system for rest. Slow dining, soft candle lighting, and acoustic healing soundscapes.",
      tonic: "Blue Lotus Chamomile Nectar & Shatavari Latte",
      icon: Sunset,
      accent: "from-[#EAD09D]/45 to-[#FAF1D6]/15 dark:from-emerald-100/5 dark:to-teal-200/1",
    },
    {
      name: "RASA",
      sanskrit: "रस",
      time: "22:00 – 02:00",
      energy: "Subconscious Rejuvenation",
      elements: "Fire & Water (Pitta)",
      desc: "The second Pitta phase is cellular repair and deep subconscious rejuvenation. A sacred night window for physical repair and dreaming.",
      tonic: "Soothing Golden Turmeric & Nutmeg Infusion",
      icon: Moon,
      accent: "from-[#EAD09D]/45 to-[#FAF1D6]/15 dark:from-indigo-200/4 dark:to-slate-300/1",
    },
    {
      name: "VISHRAMA",
      sanskrit: "विश्राम",
      time: "02:00 – 06:00",
      energy: "Cosmic Union (Amrit Vela)",
      elements: "Air & Space (Vata)",
      desc: "The ultimate silence of the pre-dawn hours. A window of thin boundaries between physical existence and absolute infinite cosmic energy.",
      tonic: "Sacred Silence & Morning Dew Meditation",
      icon: Compass,
      accent: "from-[#EAD09D]/45 to-[#FAF1D6]/15 dark:from-purple-100/4 dark:to-rose-100/1",
    },
  ];

  return (
    <section 
      id="dincharya" 
      className="relative py-36 md:py-52 bg-beige-50 dark:bg-charcoal-950 text-charcoal-900 dark:text-beige-50 overflow-hidden transition-colors duration-1000"
    >
      
      {/* Background radial glowing effects - Static high-performance layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Light theme rich golden sun flares - extremely soft champagne & rose gold hues to reduce top-right yellow */}
        <div className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#EAD09D]/8 blur-[140px] pointer-events-none dark:hidden" />
        <div className="absolute bottom-[10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#FAF1D6]/6 blur-[130px] pointer-events-none dark:hidden" />
        <div className="absolute left-[30%] top-[40%] w-[50vw] h-[50vw] rounded-full bg-[#FDF0EB]/5 blur-[120px] pointer-events-none dark:hidden" />
        
        {/* Original Dark Theme subtle backplates - UNCHANGED */}
        <div className="absolute top-[10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-gold-550/2 blur-[90px] hidden dark:block" />
        <div className="absolute bottom-[10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-stone-900/20 blur-[100px] hidden dark:block" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24 md:mb-32">
          <div className="flex items-center space-x-3 mb-4">
            <span className="h-[1px] w-8 bg-gold-500" />
            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold-700 dark:text-gold-300 font-bold">
              Six Prahars Journey
            </span>
            <span className="h-[1px] w-8 bg-gold-500" />
          </div>
          
          <h2 className="font-serif text-5xl md:text-6.5xl lg:text-7.5xl font-light leading-tight">
            The Six <span className="font-serif-editorial text-gold-700 dark:text-gold-300 italic">Prahars of the Day</span>
          </h2>
          
          <p className="mt-6 font-sans text-sm md:text-base lg:text-lg text-charcoal-900 dark:text-beige-100 max-w-3xl leading-relaxed tracking-wider font-normal">
            Ayurveda structures the 24-hour cycle into six four-hour segments called Prahars. Every Prahar is dominated by specific elements and physical energies. Discover how our culinary experiences align with these cosmic shifts.
          </p>
        </div>

        {/* Six Prahar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {prahars.map((prahar, idx) => {
            const IconComponent = prahar.icon;
            const isActive = activePrahar === prahar.name;

            return (
              <motion.div
                key={prahar.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                }}
                onClick={() => setActivePrahar(isActive ? null : prahar.name)}
                className={`relative rounded-[2rem] overflow-hidden border p-10 md:p-12 flex flex-col justify-between min-h-[480px] aspect-[3/4.1] group cursor-pointer shadow-lg backdrop-blur-md transition-all duration-1000 ${
                  isActive
                    ? "border-gold-500/50 bg-white dark:border-charcoal-800/60 dark:bg-charcoal-900/60 shadow-2xl scale-[1.02] dark:scale-100"
                    : "border-gold-300/35 dark:border-charcoal-800/60 bg-beige-100 dark:bg-charcoal-900/60"
                }`}
              >
                {/* 3D Refraction Glow on Hover / Active */}
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${prahar.accent} transition-opacity duration-1000 pointer-events-none ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* Top Section: Time, Icon, Sanskrit representation */}
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-8">
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal-550 dark:text-charcoal-450 font-bold transition-colors duration-1000">
                      {prahar.time}
                    </span>
                    <div 
                      className="p-3 rounded-full border border-beige-200 dark:border-charcoal-800 bg-gold-200/50 dark:bg-charcoal-900/60 text-charcoal-800 dark:text-beige-100 shadow-sm transition-colors duration-1000"
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Title & Sanskrit */}
                  <div className="flex items-baseline space-x-3 mb-4">
                    <h3 className="font-serif text-3xl md:text-3.5xl tracking-[0.1em] font-light text-charcoal-900 dark:text-beige-50 transition-colors duration-1000">
                      {prahar.name}
                    </h3>
                    <span className="font-serif-editorial text-sm font-semibold text-gold-600 dark:text-gold-300 transition-colors duration-1000">
                      ({prahar.sanskrit})
                    </span>
                  </div>

                  {/* Energy & Elements */}
                  <div className="space-y-1 mb-8">
                    <p className="font-sans text-[11px] md:text-xs font-bold text-charcoal-900 dark:text-beige-100 tracking-wider uppercase transition-colors duration-1000">
                      {prahar.energy}
                    </p>
                    <p className="font-sans text-[9px] tracking-[0.2em] text-charcoal-550 dark:text-charcoal-400 uppercase font-semibold transition-colors duration-1000">
                      {prahar.elements}
                    </p>
                  </div>
                </div>

                {/* Description & Tonic at the bottom */}
                <div className="relative z-10 mt-auto pt-7 border-t border-beige-200 dark:border-charcoal-800/80 transition-colors duration-1000">
                  <p className="font-sans text-xs md:text-sm text-charcoal-700 dark:text-charcoal-300 leading-relaxed font-light mb-7 transition-colors duration-500 group-hover:text-charcoal-900 dark:group-hover:text-beige-100">
                    {prahar.desc}
                  </p>

                  <div className="flex flex-col space-y-2">
                    <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400 font-bold transition-colors duration-1000">
                      Ritual Tonic Pairing
                    </span>
                    <span className="font-serif text-base font-light text-charcoal-900 dark:text-beige-50 transition-colors duration-500 group-hover:text-gold-600 dark:group-hover:text-gold-300">
                      {prahar.tonic}
                    </span>
                  </div>
                </div>

                {/* Left vertical visual alignment bar that glows on hover / active */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[4px] transition-all duration-700 ${
                    isActive ? "bg-gold-500/90" : "bg-transparent group-hover:bg-gold-500/80"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
