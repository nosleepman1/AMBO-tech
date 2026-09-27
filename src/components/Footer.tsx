export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
          AMBO TECH
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-sm text-center">
          &copy; {new Date().getFullYear()} AMBO TECH. Tous droits réservés. <br className="md:hidden" />
          Développement, IA & Automatisation.
        </div>
      </div>
    </footer>
  );
}
