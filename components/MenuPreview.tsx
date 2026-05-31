"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  name: string;
  sanskrit: string;
  ingredients: string;
  benefit: string;
  price: string;
  badge?: string;
}

interface MenuPreviewProps {
  onOpenReservation?: () => void;
}

export default function MenuPreview({ onOpenReservation }: MenuPreviewProps) {
  const [activeCategory, setActiveCategory] = useState<string>("tonics");

  const categories = [
    { id: "tonics", name: "Signature Tonics" },
    { id: "coffee", name: "Botanical Coffee" },
    { id: "desserts", name: "Circadian Desserts" },
    { id: "bowls", name: "Seasonal Bowls" },
  ];

  const menuData: Record<string, MenuItem[]> = {
    tonics: [
      {
        name: "Brahmi Mind Elixir",
        sanskrit: "ब्राह्मी रस",
        ingredients: "Wild Gotu Kola, fresh ginger root, raw forest honey, active Brahmi extract, spring mineral water.",
        benefit: "Enhances cognitive capacity, calm focus, and sensory clarity.",
        price: "₹480",
        badge: "Signature",
      },
      {
        name: "Blue Lotus Twilight Nectar",
        sanskrit: "नीलकमल आसव",
        ingredients: "Organic Egyptian Blue Lotus, chamomile buds, lavender mist, Shatavari adaptogen, moon silver elixir.",
        benefit: "Nourishes the nervous system, settling active Vata before rest.",
        price: "₹520",
        badge: "Ritual Selection",
      },
      {
        name: "Oorja Sunrise Tonic",
        sanskrit: "ऊर्जा पेय",
        ingredients: "Sea buckthorn berry, cold-pressed turmeric root, organic ashwagandha, black pepper oil, spark of ginger.",
        benefit: "Fires up the metabolic core, providing physical strength.",
        price: "₹460",
      },
    ],
    coffee: [
      {
        name: "Ashwagandha Gold Cortado",
        sanskrit: "अश्वगंधा कॉफी",
        ingredients: "Double-shot shade-grown Coorg espresso, active Ashwagandha extract, wild cardamom, organic oat milk, gold leaf.",
        benefit: "Maintains optimal cortisol levels, preventing caffeine crashes.",
        price: "₹420",
        badge: "Best Seller",
      },
      {
        name: "Lion's Mane Nitro Brew",
        sanskrit: "सिंहकेसर कषाय",
        ingredients: "24-hour slow-dripped organic nitro cold brew, cognitive Lion's Mane, calming Reishi mushroom, maple.",
        benefit: "Stimulates neurogenesis and deep executive mental drive.",
        price: "₹450",
      },
      {
        name: "Saffron Cardamom Latte",
        sanskrit: "केशर कषाय",
        ingredients: "Organic dark roast, Kashmiri saffron threads, freshly ground cardamom pods, A2 milk or almond cream.",
        benefit: "Supports active digestion and raises emotional warmth.",
        price: "₹460",
      },
    ],
    desserts: [
      {
        name: "Saffron Pistachio Raw Gateau",
        sanskrit: "केशर पिस्ता मिष्टान्न",
        ingredients: "Raw sprouted cashew cream, Kashmiri saffron, crushed green pistachios, organic date crust, wild forest honey.",
        benefit: "Pure Sattvic pleasure, entirely free of gluten and refined sugar.",
        price: "₹480",
        badge: "Raw Luxury",
      },
      {
        name: "Chandra Lavender Berry Tart",
        sanskrit: "चन्द्र जामुन",
        ingredients: "Wild Himalayan blackberries, lavender essential oil, sprouted almond flour base, thick coconut double cream.",
        benefit: "Calming floral notes that ease internal heat (Pitta).",
        price: "₹520",
      },
      {
        name: "Blueberry Ashwagandha Truffles",
        sanskrit: "गुटिका",
        ingredients: "Dark raw cacao (85%), mountain blueberry reduction, organic ashwagandha, coconut blossom nectar.",
        benefit: "Deep antioxidant recovery with mild adaptogenic relaxation.",
        price: "₹380",
      },
    ],
    bowls: [
      {
        name: "Tri-Dosha Mung Kitchari",
        sanskrit: "त्रिदोष खिचड़ी",
        ingredients: "Sprouted split green mung, red raw rice, house-churned A2 Ghee, fresh ginger, turmeric, coriander, microgreens.",
        benefit: "The ultimate easily-digestible meal that balances all constitution models.",
        price: "₹620",
        badge: "Healing",
      },
      {
        name: "Amrit Vela Yoghurt Bowl",
        sanskrit: "अमृत वेला पात्र",
        ingredients: "Thick probiotic adaptogenic coconut yoghurt, wild forest berries, sprouted pumpkin seeds, raw honey glaze.",
        benefit: "Gentle morning nourishment that hydrates cells.",
        price: "₹580",
      },
      {
        name: "Sacred Hearth Roots",
        sanskrit: "मूल भोजन",
        ingredients: "Steamed sweet potato, organic baby carrots, wild beetroots tossed in cold-pressed sesame oil, fresh dill, rock salt.",
        benefit: "Strong grounding earth energies, perfect for grounding active Vata.",
        price: "₹640",
      },
    ],
  };

  return (
    <section 
      id="menu" 
      className="relative py-36 md:py-52 bg-beige-50 dark:bg-charcoal-950 text-charcoal-900 dark:text-beige-50 overflow-hidden transition-colors duration-1000"
    >
      
      {/* High-Performance Static Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Light theme: Gorgeous premium combination of solar gold and rose-saffron clay */}
        <div className="absolute top-[20%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#FAF1D6]/15 blur-[90px] pointer-events-none dark:hidden" />
        <div className="absolute bottom-[10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#FDF0EB]/18 blur-[100px] pointer-events-none dark:hidden" />
        <div className="absolute top-[40%] right-[15%] w-[40vw] h-[40vw] rounded-full bg-yellow-400/6 blur-[80px] pointer-events-none dark:hidden" />
        <div className="absolute bottom-[30%] left-[15%] w-[40vw] h-[40vw] rounded-full bg-amber-300/6 blur-[80px] pointer-events-none dark:hidden" />
        
        {/* Original Dark Theme subtle backplates - UNCHANGED */}
        <div className="absolute top-[30%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-gold-550/2 blur-[90px] hidden dark:block" />
        <div className="absolute bottom-[10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-stone-900/10 blur-[100px] hidden dark:block" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center space-x-3 mb-4">
            <span className="h-[1px] w-8 bg-gold-500" />
            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold-700 dark:text-gold-300 font-bold">
              The Tasting List
            </span>
            <span className="h-[1px] w-8 bg-gold-500" />
          </div>
          
          <h2 className="font-serif text-5xl md:text-6.5xl lg:text-7.5xl font-extralight leading-tight">
            Botanical <span className="font-serif-editorial text-gold-600 dark:text-gold-300 italic">Nourishment Menu</span>
          </h2>
          
          <p className="mt-6 font-sans text-sm md:text-base lg:text-lg text-charcoal-700 dark:text-charcoal-300 max-w-2xl leading-relaxed tracking-wider font-light">
            Every creation is prepared freshly inside our kitchen, curated to support specific energy blocks and align with the circadian timing cycle.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-7 mb-24 border-b border-beige-200 dark:border-charcoal-850/60 pb-8 transition-colors duration-1000">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="relative py-3.5 px-8 rounded-full font-sans text-xs uppercase tracking-[0.25em] transition-all duration-500 cursor-pointer"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeMenuTab"
                    className="absolute inset-0 bg-[#B38F44] dark:bg-beige-50 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className={`relative z-10 font-bold transition-colors duration-500 ${
                  isActive
                    ? "text-beige-50 dark:text-charcoal-950"
                    : "text-charcoal-550 dark:text-charcoal-450 hover:text-charcoal-900 dark:hover:text-beige-50"
                }`}>
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Showcase */}
        <div className="min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-14"
            >
              {menuData[activeCategory]?.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col md:flex-row md:items-start justify-between gap-5 pb-9 border-b border-dashed border-beige-200 dark:border-charcoal-800/80 hover:border-gold-500/30 transition-colors duration-500"
                >
                  <div className="flex-1 space-y-3.5">
                    
                    {/* Item Title, Sanskrit & Badge */}
                    <div className="flex flex-wrap items-baseline gap-3.5">
                      <h3 className="font-serif text-2.5xl md:text-3xl lg:text-3.5xl font-light text-charcoal-900 dark:text-beige-100 group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors duration-500">
                        {item.name}
                      </h3>
                      <span className="font-serif-editorial text-sm font-semibold text-gold-600 dark:text-gold-300">
                        ({item.sanskrit})
                      </span>
                      {item.badge && (
                        <span className="font-sans text-[8px] uppercase tracking-[0.25em] font-extrabold px-3 py-1 rounded-full border border-gold-500/30 dark:border-gold-500/20 text-gold-700 dark:text-gold-300 bg-gold-500/12 dark:bg-gold-500/5">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Ingredients */}
                    <p className="font-sans text-xs md:text-sm lg:text-base text-charcoal-700 dark:text-charcoal-300 font-light leading-relaxed max-w-3xl transition-colors duration-1000">
                      {item.ingredients}
                    </p>

                    {/* Core Benefit */}
                    <div className="flex items-center space-x-2.5 text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-gold-700 dark:text-gold-300 font-bold transition-colors duration-1000">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                      <span><strong>Vedic Benefit:</strong> {item.benefit}</span>
                    </div>

                  </div>

                  {/* Price */}
                  <div className="flex items-center md:items-start md:pt-1.5">
                    <span className="font-serif text-xl md:text-2.5xl lg:text-3xl font-light text-charcoal-900 dark:text-beige-50 group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors duration-500">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Action Button: Connect to circadian reservation */}
        {onOpenReservation && (
          <div className="flex justify-center mt-24">
            <button
              onClick={onOpenReservation}
              className="group flex items-center space-x-3.5 px-9 py-4 bg-charcoal-900 dark:bg-beige-50 text-beige-50 dark:text-charcoal-950 rounded-full font-sans text-xs uppercase tracking-[0.25em] font-bold hover:bg-gold-500 dark:hover:bg-gold-350 transition-all duration-500 cursor-pointer"
            >
              <span>Reserve Circadian Experience</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
