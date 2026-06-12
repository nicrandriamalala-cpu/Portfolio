import { Palette, PenTool, FileCheck, Package } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Palette,
      title: "Identité visuelle",
      description: "Création de logos, chartes graphiques et systèmes d'identité cohérents pour les marques"
    },
    {
      icon: PenTool,
      title: "Design éditorial",
      description: "Mise en page de magazines, brochures, affiches et supports imprimés avec attention au détail"
    },
    {
      icon: FileCheck,
      title: "Prépresse",
      description: "Préparation professionnelle des fichiers pour l'impression : gestion des couleurs, fonds perdus et exports"
    },
    {
      icon: Package,
      title: "Packaging",
      description: "Conception d'emballages créatifs et fonctionnels qui valorisent vos produits"
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">À propos</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Graphiste professionnelle avec 12 ans d'expérience en graphisme print et prépresse, 
            je maîtrise toute la chaîne de production pour des projets imprimés de qualité irréprochable. 
            Capable de gérer et coordonner une équipe de graphistes prépresse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl mb-2 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
