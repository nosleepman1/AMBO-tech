"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

const team = [
  {
    name: "El H Boubacar MBAYE",
    stack: "Développeur Frontend",
    role: "CEO & Co-Founder",
    linkedin: "https://www.linkedin.com/in/el-hadji-boubacar-mbaye-612002336",
    github: "https://www.github.com/Bouba-sn",
    instagram: "https://www.instagram.com/bouba_talibe_cheikh",
  },
  {
    name: "Abdallah DIOUF",
    stack: "Dev FullStack & DevOps",
    role: "CEO & Co-Founder",
    linkedin: "https://www.linkedin.com/in/abdallah-diouf-b7a530368",
    github: "https://www.github.com/nosleepman1",
    instagram: "https://www.instagram.com/informagicien_",
  },
  {
    name: "Mohamed Dieye TINE",
    stack: "Développeur Backend",
    role: "CEO & Co-Founder",
    linkedin: "https://www.linkedin.com/in/abdallah-diouf-b7a530368",
    github: "https://www.github.com/mohamedtine1975-droid",
    instagram: "https://www.instagram.com/ur_mohameddd",
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">L'Équipe Fondatrice</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Les experts passionnés derrière AMBO TECH, prêts à relever vos défis technologiques les plus ambitieux.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 mb-6 flex items-center justify-center border-4 border-white dark:border-gray-950 shadow-xl overflow-hidden relative">
                {/* Fallback avatar if images are missing */}
                <span className="text-4xl font-bold text-blue-300 dark:text-gray-600">
                  {member.name.split(" ").map(n => n[0]).join("").substring(0,2)}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{member.role}</p>
              <p className="text-gray-500 dark:text-gray-400 mb-6">{member.stack}</p>
              
              <div className="flex space-x-4">
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                    <Github size={20} />
                    <span className="sr-only">GitHub</span>
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition">
                    <Linkedin size={20} />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                )}
                {member.instagram && (
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition">
                    <Instagram size={20} />
                    <span className="sr-only">Instagram</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
