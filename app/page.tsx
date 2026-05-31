"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PhilosophySection from "@/components/PhilosophySection";
import DincharyaSection from "@/components/DincharyaSection";
import ExperienceSection from "@/components/ExperienceSection";
import MenuPreview from "@/components/MenuPreview";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  useEffect(() => {
    // Premium loading delay to align celestial gears
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const openReservation = () => setIsReservationModalOpen(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-charcoal-950"
          >
            {/* Celestial Gear Loading animation */}
            <div className="relative flex items-center justify-center w-32 h-32">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-beige-200/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-dashed border-gold-500/10 rounded-full"
              />
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="font-serif text-2xl tracking-[0.22em] text-[#EAD09D] lowercase"
              >
                ele<span className="relative inline-flex flex-col items-center">v<span className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-[90%] h-[1.8px] bg-current" /></span>ed
              </motion.span>
            </div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-6 font-sans text-[10px] uppercase tracking-[0.3em] text-gold-300"
            >
              Aligning Daily Circadian Flow
            </motion.span>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col min-h-screen bg-beige-50 dark:bg-charcoal-950 text-charcoal-900 dark:text-beige-50 selection:bg-gold-200 dark:selection:bg-gold-500 transition-colors duration-1000"
      >
        {/* Global Navigation bar */}
        <Navbar />

        {/* Cinematic Main Section */}
        <main className="flex-grow">
          {/* 1. Hero Section */}
          <Hero onOpenReservation={openReservation} />

          {/* 2. Philosophy Section */}
          <PhilosophySection />

          {/* 3. Dincharya Six Prahars Section */}
          <DincharyaSection />

          {/* 4. Cafe Experience Showcase Section */}
          <ExperienceSection onOpenReservation={openReservation} />

          {/* 5. Menu Preview Section */}
          <MenuPreview />
        </main>

        {/* 6. Footer Section */}
        <Footer onOpenReservation={openReservation} />
      </motion.div>

      {/* Circadian Reservation Modal */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </>
  );
}
