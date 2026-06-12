export function Skills() {
  const skillCategories = [
    {
      category: "Logiciels",
      skills: [
        { name: "Adobe Photoshop", level: 95 },
        { name: "Adobe Illustrator", level: 98 },
        { name: "Adobe InDesign", level: 92 },
        { name: "PitStop Pro", level: 90 },
        { name: "Figma", level: 88 }
      ]
    },
    {
      category: "Compétences créatives",
      skills: [
        { name: "Identité visuelle", level: 95 },
        { name: "Typographie", level: 90 },
        { name: "Illustration", level: 85 },
        { name: "Print Design", level: 92 }
      ]
    },
    {
      category: "Domaines d'expertise",
      skills: [
        { name: "Gestion d'équipe prépresse", level: 90 },
        { name: "Packaging", level: 85 },
        { name: "Design éditorial", level: 90 },
        { name: "Affichage", level: 87 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">Compétences</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Les outils et savoir-faire que je maîtrise pour donner vie à vos projets créatifs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-2xl mb-6 text-slate-900">{category.category}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
