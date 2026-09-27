"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => setScrolled(window.scrollY > 50));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const navLinks = [
    { title: "Accueil", href: "#hero" },
    { title: "Expertise", href: "#services" },
    { title: "Projets", href: "#projects" },
    { title: "Équipe", href: "#team" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="#hero" className="text-2xl font-bold tracking-tighter text-blue-600 dark:text-blue-400">
          AMBO TECH
        </Link>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <button 
          className="md:hidden text-gray-900 dark:text-white" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black shadow-lg py-4 flex flex-col items-center space-y-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 dark:text-gray-200 text-lg font-medium"
              >
                {link.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
