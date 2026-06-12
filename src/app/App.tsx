import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Toaster } from "./components/ui/sonner";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Nicolas RANDRIAMALALA | Portfolio";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Toaster />
      
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2025 Nicolas RANDRIAMALALA. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
