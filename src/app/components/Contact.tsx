import { Mail, MapPin, Phone, Instagram, Linkedin, Figma } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    
    // Create mailto link
    const mailtoLink = `mailto:nicherymalala@yahoo.fr?subject=Contact depuis le portfolio - ${formData.name}&body=${encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    toast.success("Votre client mail va s'ouvrir !");
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nicherymalala@yahoo.fr",
      href: "mailto:nicherymalala@yahoo.fr"
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+261 33 84 857 27",
      href: "tel:+261338485727"
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Antananarivo, Madagascar",
      href: null
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/nicolasrandriamalala?igsh=cjZ5NHU1dWZnaWpu", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/nicolas-randriamalala-a405aa1b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: Figma, href: "https://www.figma.com/@nicolasrandriamalala", label: "Figma" }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">Contact</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Un projet en tête ? Discutons ensemble pour créer quelque chose d'unique
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl mb-6 text-slate-900">Informations de contact</h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-slate-900 hover:text-purple-600 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-900">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="mb-4 text-slate-900">Suivez-moi</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-100 hover:bg-purple-100 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-slate-600 group-hover:text-purple-600" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-slate-700">
                  Nom
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-slate-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre.email@exemple.fr"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-slate-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Parlez-moi de votre projet..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
