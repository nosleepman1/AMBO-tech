"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendEmailAction, ActionState } from "@/app/actions/contact";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [state, formAction, isPending] = useActionState(sendEmailAction, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

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
          <form action={formAction} ref={formRef} className="space-y-6">
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
            
            <button disabled={isPending} type="submit" className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
              {isPending ? "Envoi..." : <><Send size={20} aria-hidden="true" /> Envoyer le message</>}
            </button>

            <div aria-live="polite">
              <AnimatePresence>
                {state?.success && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl flex items-center gap-2">
                    <CheckCircle size={20} aria-hidden="true" /> {state.message}
                  </motion.div>
                )}
                {state?.success === false && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-xl flex items-center gap-2">
                    <AlertCircle size={20} aria-hidden="true" /> {state.error}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
