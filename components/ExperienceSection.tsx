"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Flame, Heart, Sparkles, Moon, Sun, ArrowRight } from "lucide-react";

interface ExperienceItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  details: string[];
  icon: React.ComponentType<{ className?: string }>;
  vibe: string;
  image: string;
}

interface ExperienceSectionProps {
  onOpenReservation?: () => void;
}

export default function ExperienceSection({ onOpenReservation }: ExperienceSectionProps) {
  const [activeItem, setActiveItem] = useState<string>("beverages");

  const items: ExperienceItem[] = [
    {
      id: "beverages",
      category: "Elixirs & Infusions",
      title: "Ayurvedic Beverages",
      desc: "Nourishing, warm beverages crafted using potent wild-harvested herbs, customized to settle or stimulate your core Dosha alignment.",
      vibe: "Quiet, warming, healing. Ideal for restoration.",
      details: ["Active Brahmi & Gotu Kola Infusions", "Saffron Cardamom Sacred Milk", "Lotus Petal Blue Tea"],
      icon: Heart,
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "coffees",
      category: "Elevated Caffeine",
      title: "Adaptogenic Coffees",
      desc: "Single-origin, shade-grown Arabica from the hills of Coorg, infused with adaptogens to prevent spikes in cortisol, providing clean sustained focus.",
      vibe: "Clear, focused, grounding. Clean, sustained cognitive drive.",
      details: ["Lion's Mane Maca Espresso", "Ashwagandha Cortado", "Reishi Salted Maple Cold Brew"],
      icon: Coffee,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "desserts",
      category: "Conscious Confectionery",
      title: "Botanical Desserts",
      desc: "Exquisite culinary creations, sweeten naturally with organic date reduction and wild forest honey. Free from refined sugar or gluten.",
      vibe: "Sensual, delicate, beautiful. Pure botanical pleasure.",
      details: ["Saffron Rose Raw Mousse Cake", "Fennel Pollen & Cashew Tart", "Blueberry Ashwagandha Truffles"],
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "meals",
      category: "Sattvic Cuisine",
      title: "Conscious Meals",
      desc: "Warm bowls, ancient grains, and fire-kissed seasonal local vegetables. Cooked using pure A2 Ghee and cold-pressed organic seed oils.",
      vibe: "Nourishing, light, highly digestible. Peak physical vitality.",
      details: ["Tri-Dosha Sprouted Quinoa Bowl", "A2 Ghee Stewed Heirloom Roots", "Saffron Kitchari with Microgreens"],
      icon: Flame,
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "evenings",
      category: "Chandra Ritual",
      title: "Sound Healing Evenings",
      desc: "As twilight sets in, our lounge transitions into an acoustic sound sanctuary featuring Tibetan singing bowls, gongs, and ambient sitar.",
      vibe: "Mystical, deeply relaxing, slow. Cosmic meditation.",
      details: ["Bi-weekly Full Moon Gong Baths", "Ambient Sitar & Drone Meditations", "Vedic Chanting Resonance Sessions"],
      icon: Moon,
      image: "/sound-healing.jpg",
    },
    {
      id: "mornings",
      category: "Surya Ritual",
      title: "Slow Mornings",
      desc: "Silenced devices, sunlight filtering through clean stone arches, and deep breathing. Start your day in South Delhi's calmest sanctuary.",
      vibe: "Bright, peaceful, spacious. Pure baseline clarity.",
      details: ["Silent Journaling Spaces", "Guided Pranam Breathwork (07:00 AM)", "Interactive Herbal Apocathery Counter"],
      icon: Sun,
      image: "/slow_morning.jpg",
    },
  ];

  return (
    <section 
      id="experience" 
      className="relative py-36 md:py-52 bg-beige-100 dark:bg-charcoal-900 text-charcoal-900 dark:text-beige-50 overflow-hidden border-t border-b border-beige-200/50 dark:border-charcoal-900/60 transition-colors duration-1000"
    >
      
      {/* High-Performance Static Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Light theme: Symmetrical, balanced mix of gold champagne and rose-saffron clay */}
        <div className="absolute -top-[10%] left-[15%] w-[50vw] h-[50vw] bg-[#FAF1D6]/15 rounded-full blur-[90px] pointer-events-none dark:hidden" />
        <div className="absolute -bottom-[10%] right-[10%] w-[50vw] h-[50vw] bg-[#FDF0EB]/15 rounded-full blur-[100px] pointer-events-none dark:hidden" />
        <div className="absolute top-[30%] right-[10%] w-[45vw] h-[45vw] bg-yellow-400/6 rounded-full blur-[90px] pointer-events-none dark:hidden" />
        <div className="absolute bottom-[20%] left-[10%] w-[45vw] h-[45vw] bg-amber-300/6 rounded-full blur-[90px] pointer-events-none dark:hidden" />
        
        {/* Original Dark Theme subtle backplates - UNCHANGED */}
        <div className="absolute -top-[10%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-gold-550/2 blur-[90px] hidden dark:block" />
        <div className="absolute -bottom-[10%] left-[10%] w-[55vw] h-[55vw] rounded-full bg-stone-900/10 blur-[100px] hidden dark:block" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title Block */}
        <div className="max-w-3xl mb-24 md:mb-32">
          <div className="flex items-center space-x-3 mb-4">
            <span className="h-[1px] w-10 bg-gold-500" />
            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold-700 dark:text-gold-300 font-bold">
              Elevated Living Experience
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6.5xl lg:text-7.5xl font-extralight leading-tight">
            A Sanctuary of <br />
            <span className="font-serif-editorial text-gold-600 dark:text-gold-300 italic">Sensory Reconnect</span>
          </h2>
        </div>

        {/* Layout: Interactive Vertical Column on Left, Big Display Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Side: Experience List (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {items.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeItem === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`w-full text-left p-6 md:p-7 rounded-[1.8rem] transition-all duration-500 border flex items-center justify-between group backdrop-blur-md cursor-pointer ${
                    isActive
                      ? "bg-white dark:bg-charcoal-900 border-gold-500/25 dark:border-charcoal-800 shadow-xl"
                      : "bg-transparent border-transparent hover:bg-beige-200/50 dark:hover:bg-charcoal-800/30"
                  }`}
                >
                  <div className="flex items-center space-x-6">
                    <div className={`p-3 rounded-full transition-all duration-500 ${
                      isActive
                        ? "bg-gold-500 text-charcoal-950"
                        : "bg-beige-200 dark:bg-charcoal-900 text-charcoal-600 dark:text-charcoal-400 group-hover:bg-beige-300 dark:group-hover:bg-charcoal-800"
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-sans text-[9px] uppercase tracking-[0.18em] text-charcoal-550 dark:text-charcoal-400 block mb-1 font-bold">
                        {item.category}
                      </span>
                      <span className="font-serif text-lg md:text-xl lg:text-2xl font-light text-charcoal-900 dark:text-beige-50 transition-colors duration-1000">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  
                  <span className="w-8 h-[1px] bg-beige-300 dark:bg-charcoal-800 group-hover:bg-gold-500 group-hover:w-11 transition-all duration-500" />
                </button>
              );
            })}
          </div>

          {/* Right Side: Big Premium Editorial Display (7 Cols) */}
          <div className="lg:col-span-7 flex items-stretch">
            <AnimatePresence mode="wait">
              {items.map((item) => {
                if (item.id !== activeItem) return null;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20, scale: 0.99 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.99 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full rounded-[2.8rem] bg-white dark:bg-charcoal-900 border border-gold-300/35 dark:border-charcoal-800 p-10 md:p-14 flex flex-col md:flex-row gap-8 items-stretch shadow-2xl relative overflow-hidden backdrop-blur-md transition-all duration-1000"
                  >
                    
                    {/* Left: Premium Realistic Photography */}
                    <div className="flex-1 min-h-[280px] md:min-h-full relative rounded-2xl overflow-hidden border border-beige-200 dark:border-charcoal-850/80 transition-colors duration-1000">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-beige-100/90 dark:from-charcoal-950/70 to-transparent transition-all duration-1000" />
                    </div>

                    {/* Right: Premium Narrative details */}
                    <div className="flex-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold-700 dark:text-gold-300 font-bold block">
                          {item.category}
                        </span>

                        <h3 className="font-serif text-2xl md:text-3.5xl font-light text-charcoal-900 dark:text-beige-50 leading-tight transition-colors duration-1000">
                          {item.title}
                        </h3>

                        <p className="font-sans text-xs md:text-sm lg:text-base text-charcoal-700 dark:text-charcoal-300 leading-relaxed font-light transition-colors duration-1000">
                          {item.desc}
                        </p>
                      </div>

                      {/* Vibe Statement */}
                      <div className="bg-beige-50 dark:bg-charcoal-950 p-4 rounded-xl border border-beige-200 dark:border-charcoal-850 transition-colors duration-1000">
                        <p className="font-sans text-[11px] text-charcoal-800 dark:text-beige-200 leading-snug transition-colors duration-1000">
                          <strong>Atmosphere:</strong> {item.vibe}
                        </p>
                      </div>

                      {/* Details */}
                      <div className="border-t border-beige-200 dark:border-charcoal-850 pt-5 space-y-3 transition-colors duration-1000">
                        <h4 className="font-sans text-[9px] uppercase tracking-[0.25em] text-charcoal-500 dark:text-charcoal-400 font-bold">
                          Signature Inclusions
                        </h4>
                        <ul className="space-y-2">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center space-x-2.5">
                              <span className="w-1 h-1 rounded-full bg-gold-500" />
                              <span className="font-serif text-sm lg:text-base font-light text-charcoal-900 dark:text-beige-50 transition-colors duration-1000">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Optional Reserve Table CTA integrated inside evenings/mornings */}
                      {onOpenReservation && (
                        <button
                          onClick={onOpenReservation}
                          className="w-full mt-4 flex items-center justify-center space-x-2 py-3.5 bg-charcoal-900 dark:bg-beige-50 text-beige-50 dark:text-charcoal-950 rounded-full font-sans text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-gold-500 dark:hover:bg-gold-350 transition-all duration-500 cursor-pointer"
                        >
                          <span>Reserve Placement</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
