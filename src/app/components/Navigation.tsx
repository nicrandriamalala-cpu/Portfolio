import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "À propos", id: "about" },
    { label: "Projets", id: "projects" },
    { label: "Compétences", id: "skills" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`text-2xl transition-colors ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}
          >
            NIC R
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors ${
                  isScrolled
                    ? "text-slate-600 hover:text-purple-600"
                    : "text-white hover:text-purple-400"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Discutons
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? "text-slate-900" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-slate-600 hover:text-purple-600 hover:bg-slate-50 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-3">
              <Button
                size="sm"
                onClick={() => scrollToSection("contact")}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                Discutons
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
