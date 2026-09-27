"use client";

import { motion } from "framer-motion";
import { Code, BrainCircuit, Workflow } from "lucide-react";

const services = [
  {
    icon: <Code size={40} className="text-blue-500" aria-hidden="true" />,
    title: "Développement Web & Mobile",
    description: "Applications modernes, performantes et scalables utilisant Next.js, React, et React Native. Nous transformons vos idées en produits exceptionnels.",
  },
  {
    icon: <BrainCircuit size={40} className="text-purple-500" aria-hidden="true" />,
    title: "Intégration IA & MCP",
    description: "Intégrez la puissance des LLM dans vos applications via le Model Context Protocol (MCP). Agents autonomes et outils sur-mesure.",
  },
  {
    icon: <Workflow size={40} className="text-green-500" aria-hidden="true" />,
    title: "Automatisation (n8n, Make)",
    description: "Réduisez vos coûts opérationnels en automatisant vos flux de travail avec n8n, Make, Zapier et des scripts personnalisés.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Notre Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Une approche moderne pour propulser votre entreprise avec les dernières technologies.
          </p>
        </div>

        <ul className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all list-none"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
