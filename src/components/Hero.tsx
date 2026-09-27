"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            Innovez avec <br />
            <span className="text-blue-600 dark:text-blue-400">AMBO TECH</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            Développement Sur-Mesure, Intégration d'Intelligence Artificielle (MCP) et Automatisation de vos processus métiers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
              Découvrir nos services <ArrowRight size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition flex items-center justify-center">
              Nous contacter
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="aspect-square bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 absolute inset-0"></div>
          {/* Using a placeholder for the hero graphic */}
          <div className="relative z-10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl border border-white/20 dark:border-gray-700 p-8 rounded-3xl shadow-2xl">
            <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-hidden">
              <code>
{`// AMBO TECH Services
const solutions = {
  dev: "Web & Mobile App",
  ai: "LLM & MCP Integration",
  automation: "n8n, Make, Zapier"
};

await AMBOTECH.deploy(solutions);
console.log("Future is now.");`}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
