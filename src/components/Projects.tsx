"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Musée des Civilisations Noires",
    description: "Plateforme digitale pour le célèbre musée sénégalais, avec visites virtuelles et gestion des expositions.",
    link: "https://www.mcn.sn"
  },
  {
    title: "Agri-Senegal",
    description: "Plateforme de gestion pour les agriculteurs, offrant suivi des cultures, météo et conseils agricoles.",
    link: "http://agri-senegal.gt.tc/"
  },
  {
    title: "Science Quizz",
    description: "Application ludique et interactive de quiz développée avec React JS et un backend robuste Express.",
    link: "https://science-quizz.vercel.app"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Nos Réalisations</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez quelques-uns des projets sur lesquels nous avons travaillé avec passion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-black rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative flex items-center justify-center p-6">
                 {/* Placeholder for actual screenshots if they exist */}
                 <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center opacity-50">{project.title}</h3>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Visiter le site <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
