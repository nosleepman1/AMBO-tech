"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Accueil", href: "#hero" },
    { title: "Services", href: "#services" },
    { title: "Projets", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-blue-600 dark:text-blue-400">
          AMBO TECH
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black shadow-lg py-4 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 dark:text-gray-200 text-lg font-medium"
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
