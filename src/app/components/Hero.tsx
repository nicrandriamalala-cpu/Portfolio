import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mjc0OTgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-10" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6 inline-block">
          <span className="text-purple-400 px-4 py-2 rounded-full border border-purple-400/30 bg-purple-400/10">
            Bienvenue sur mon portfolio
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl text-white mb-6">
          Bonjour, je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Nicolas RANDRIAMALALA</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Graphiste print professionnelle spécialisée en prépresse et production éditoriale
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Voir mes réalisations
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-purple-400/30 text-white hover:bg-purple-400/10"
          >
            Me contacter
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-purple-400" />
        </div>
      </div>
    </section>
  );
}
