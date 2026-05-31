"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    setTimeout(() => {
      if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      } else {
        setTheme("light");
        document.documentElement.classList.remove("dark");
      }
    }, 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Dincharya", href: "#dincharya" },
    { name: "Experience", href: "#experience" },
    { name: "Menu", href: "#menu" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
            ? "py-4 bg-beige-50/60 dark:bg-charcoal-950/60 backdrop-blur-xl border-b border-beige-200/20 dark:border-charcoal-800/20 shadow-[0_10px_40px_rgba(0,0,0,0.015)]"
            : "py-7 bg-transparent"
          }`}
      >
        <div className="max-w-[92vw] mx-auto px-6 flex items-center justify-between">

          {/* Brand Logo — symbol + eleved text */}
          <a href="#" className="relative group flex items-center gap-2 self-start">
            <img
              src="/eleved-symbol.png"
              alt=""
              aria-hidden="true"
              className="h-8 md:h-9 w-auto object-contain flex-shrink-0 transition-all duration-500 dark:brightness-125 dark:saturate-125"
            />
            <span className="inline-flex items-baseline font-sans text-[1.25rem] md:text-[1.5rem] font-light tracking-[0.22em] text-charcoal-950 dark:text-[#EAD09D] transition-colors duration-500 lowercase select-none whitespace-nowrap">
              ele
              <span className="relative mx-[0.04em] leading-none">
                <span className="invisible text-[0.85em]" aria-hidden="true">v</span>
                <span className="absolute left-[44%] -translate-x-1/2 w-[55%] h-[1.5px] bg-current" style={{ bottom: '0' }} />
                <span className="absolute left-1/2 -translate-x-1/2 leading-none text-[0.85em]" style={{ bottom: 'calc(1.5px + 2px)' }}>v</span>
              </span>
              ed
            </span>
          </a>

          {/* Desktop Nav Links — centered, slightly below logo baseline */}
          <div className="hidden md:flex items-center space-x-12 mt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-[12px] md:text-[13px] uppercase tracking-[0.3em] text-charcoal-900 dark:text-beige-100 hover:text-gold-600 dark:hover:text-gold-350 transition-all duration-300 relative py-1 group font-bold"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gold-500 transition-all duration-500 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </div>

          {/* Actions: Celestial Switcher */}
          <div className="hidden md:flex items-center space-x-7 self-start">

            <button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-full border border-beige-200/50 dark:border-charcoal-800/40 text-charcoal-700 dark:text-beige-100 hover:bg-beige-100/80 dark:hover:bg-charcoal-900/60 transition-all duration-300 group cursor-pointer"
              aria-label="Toggle celestial alignment"
            >
              <div className="relative w-5 h-5 overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  {theme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ y: 20, opacity: 0, rotate: -45 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      exit={{ y: -20, opacity: 0, rotate: 45 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Sun className="w-[18px] h-[18px] text-gold-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ y: 20, opacity: 0, rotate: 45 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      exit={{ y: -20, opacity: 0, rotate: -45 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Moon className="w-[18px] h-[18px] text-indigo-500 dark:text-indigo-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </div>

          {/* Mobile Actions Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-charcoal-700 dark:text-beige-100"
              aria-label="Toggle Celestial alignment"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-gold-500" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-500 dark:text-indigo-300" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-charcoal-900 dark:text-beige-50"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-beige-50 dark:bg-charcoal-950 pt-28 px-8 flex flex-col justify-between pb-12 md:hidden"
          >
            <div className="flex flex-col space-y-7">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3.5xl font-light tracking-[0.1em] text-charcoal-900 dark:text-beige-100 hover:text-gold-500 dark:hover:text-gold-450 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col space-y-6"
            >
              <div className="h-[1px] bg-beige-200 dark:bg-charcoal-800" />
              <p className="font-sans text-[9px] tracking-widest text-charcoal-400 dark:text-charcoal-500 uppercase">
                South Delhi • Wellness Hospitality Destination
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
