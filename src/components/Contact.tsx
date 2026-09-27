"use client";

import { useState } from "react";
import { sendEmailAction } from "@/app/actions/contact";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message: string }>({ type: "idle", message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Envoi en cours..." });
    const formData = new FormData(e.currentTarget);
    
    try {
      const res = await sendEmailAction(null, formData);
      if (res.success) {
        setStatus({ type: "success", message: res.message || "" });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({ type: "error", message: res.error || "Erreur" });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Une erreur inattendue s'est produite." });
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Discutons de votre projet</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Prêt à intégrer l'IA ou automatiser vos process ? Envoyez-nous un message.
          </p>
        </div>

        <div className="bg-white dark:bg-black p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nom</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Votre nom complet" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="votre@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Parlez-nous de votre projet..."></textarea>
            </div>
            
            <button disabled={status.type === "loading"} type="submit" className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-50">
              {status.type === "loading" ? "Envoi..." : <><Send size={20} /> Envoyer le message</>}
            </button>

            {status.type === "success" && (
              <div className="p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl flex items-center gap-2">
                <CheckCircle size={20} /> {status.message}
              </div>
            )}
            {status.type === "error" && (
              <div className="p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-xl flex items-center gap-2">
                <AlertCircle size={20} /> {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
