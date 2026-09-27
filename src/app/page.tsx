import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 selection:bg-blue-200 dark:selection:bg-blue-900">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
