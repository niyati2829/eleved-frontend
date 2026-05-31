"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState("");
  const [prahar, setPrahar] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const prahars = [
    { name: "Brahma Prahar", time: "04:00 - 08:00", desc: "Sattva & Sunrise meditation" },
    { name: "Madhya Prahar", time: "08:00 - 12:00", desc: "Energy & Circadian tonic pairing" },
    { name: "Aparahna Prahar", time: "12:00 - 16:00", desc: "Pitta digestion & seasonal lunch" },
    { name: "Sayahna Prahar", time: "16:00 - 20:00", desc: "Sunset transition & adaptogenic chais" },
    { name: "Pradosha Prahar", time: "20:00 - 00:00", desc: "Ojas restorative nightcap" },
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const resetModal = () => {
    setStep(1);
    setDate("");
    setPrahar("");
    setGuests("2 Guests");
    setName("");
    setEmail("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetModal}
            className="absolute inset-0 bg-[#120E0D]/80 dark:bg-[#120E0D]/90 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white dark:bg-charcoal-900 border border-beige-200 dark:border-charcoal-850 rounded-[2.5rem] p-8 md:p-12 shadow-2xl z-10 overflow-hidden transition-colors duration-1000"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-10">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-600 dark:text-gold-300 font-bold">
                  Circadian Sanctuary
                </span>
                <h3 className="font-serif text-3.5xl font-light text-charcoal-900 dark:text-beige-50 mt-2 transition-colors duration-1000">
                  Reserve Table
                </h3>
              </div>
              <button
                onClick={resetModal}
                className="p-3 rounded-full border border-beige-200 dark:border-charcoal-800 text-charcoal-400 hover:text-charcoal-900 dark:hover:text-beige-50 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Steps Progress */}
            {step < 3 && (
              <div className="flex space-x-2 mb-10">
                <div className={`h-[2px] flex-1 transition-all duration-500 ${step >= 1 ? "bg-gold-500" : "bg-beige-200 dark:bg-charcoal-800"}`} />
                <div className={`h-[2px] flex-1 transition-all duration-500 ${step >= 2 ? "bg-gold-500" : "bg-beige-200 dark:bg-charcoal-800"}`} />
              </div>
            )}

            {/* Step 1: Date & Prahar Selection */}
            {step === 1 && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-charcoal-400 dark:text-charcoal-500 mb-3 font-semibold transition-colors duration-1000">
                      Select Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-beige-50 dark:bg-charcoal-950 border border-beige-200 dark:border-charcoal-800 rounded-2xl px-5 py-4 text-sm text-charcoal-900 dark:text-beige-100 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-charcoal-400 dark:text-charcoal-500 mb-3 font-semibold transition-colors duration-1000">
                      Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-beige-50 dark:bg-charcoal-950 border border-beige-200 dark:border-charcoal-800 rounded-2xl px-5 py-4 text-sm text-charcoal-900 dark:text-beige-100 focus:outline-none focus:border-gold-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-widest text-charcoal-400 dark:text-charcoal-500 mb-4 font-semibold transition-colors duration-1000">
                    Select Circadian Prahar
                  </label>
                  <div className="grid grid-cols-1 gap-3 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                    {prahars.map((p) => (
                      <button
                        key={p.name}
                        onClick={() => setPrahar(p.name)}
                        className={`w-full text-left p-5 rounded-2xl border text-sm transition-all duration-300 cursor-pointer ${
                          prahar === p.name
                            ? "bg-gold-500/10 border-gold-500 text-charcoal-900 dark:text-beige-50 shadow-inner"
                            : "bg-beige-50 dark:bg-charcoal-950 border-beige-200 dark:border-charcoal-800/60 text-charcoal-600 dark:text-charcoal-350 hover:border-charcoal-300 dark:hover:border-charcoal-700"
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-serif text-base font-light">{p.name}</span>
                          <span className="font-sans text-xs tracking-wider text-gold-600 dark:text-gold-300">{p.time}</span>
                        </div>
                        <p className="font-sans text-xs font-light text-charcoal-500 dark:text-charcoal-400">{p.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    disabled={!date || !prahar}
                    onClick={handleNext}
                    className="flex items-center space-x-3 px-8 py-4 bg-charcoal-900 dark:bg-beige-50 text-beige-50 dark:text-charcoal-950 rounded-full font-sans text-xs uppercase tracking-[0.2em] font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gold-500 dark:hover:bg-gold-350 transition-all duration-500 cursor-pointer"
                  >
                    <span>Next Alignment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Contact Details */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-charcoal-400 dark:text-charcoal-500 mb-3 font-semibold transition-colors duration-1000">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ananya Sharma"
                      className="w-full bg-beige-50 dark:bg-charcoal-950 border border-beige-200 dark:border-charcoal-800 rounded-2xl px-5 py-4 text-sm text-charcoal-900 dark:text-beige-100 placeholder-charcoal-400 dark:placeholder-charcoal-600 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-charcoal-400 dark:text-charcoal-500 mb-3 font-semibold transition-colors duration-1000">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ananya@living.com"
                      className="w-full bg-beige-50 dark:bg-charcoal-950 border border-beige-200 dark:border-charcoal-800 rounded-2xl px-5 py-4 text-sm text-charcoal-900 dark:text-beige-100 placeholder-charcoal-400 dark:placeholder-charcoal-600 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="font-sans text-xs uppercase tracking-[0.2em] text-charcoal-500 hover:text-charcoal-900 dark:text-charcoal-400 dark:hover:text-beige-50 transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex items-center space-x-3 px-8 py-4 bg-gold-500 text-charcoal-950 rounded-full font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold-450 transition-all duration-500 cursor-pointer"
                  >
                    <span>Request Reservation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Success Confirmation */}
            {step === 3 && (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 bg-gold-500/10 border border-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-gold-500" />
                </div>
                <h4 className="font-serif text-3.5xl font-light text-charcoal-900 dark:text-beige-50 transition-colors duration-1000">
                  Circadian Request Received
                </h4>
                <p className="font-sans text-sm text-charcoal-600 dark:text-charcoal-350 max-w-md mx-auto leading-relaxed tracking-wider transition-colors duration-1000">
                  Dear {name}, we have locked in your energy alignment for <span className="text-gold-600 dark:text-gold-300">{date}</span> during the <span className="text-gold-600 dark:text-gold-300">{prahar}</span>. A luxury hospitality host will confirm shortly.
                </p>
                <div className="pt-8">
                  <button
                    onClick={resetModal}
                    className="px-8 py-4 border border-beige-200 dark:border-charcoal-800 hover:border-charcoal-900 dark:hover:border-beige-50 text-charcoal-900 dark:text-beige-100 rounded-full font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500 cursor-pointer"
                  >
                    Return to Sanctuary
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
