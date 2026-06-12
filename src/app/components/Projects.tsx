import { ExternalLink, Eye, X } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { useState } from "react";
import electionImage from 'figma:asset/39982f0984ae7b267a486a6d7c1ab5b06b31ca29.png';
import catalogueImage from 'figma:asset/e7b6dbb926429e1f80134f0e81cc90003e635961.png';
import riceMakaImage from 'figma:asset/0aaf6229b79c7b880fc1589e0abd7157399ea39a.png';
import riceSoSoaImage from 'figma:asset/c3cbc0663e01e12130c8ae3830b3ac14de7e4b77.png';
import riceAlaotraImage from 'figma:asset/592bae6a49c112887eb2fa4e98afaaf324e99a0f.png';
import posterChapiteaux from 'figma:asset/d9079b5b4342d8799ef098434074748a01ef1d84.png';
import posterYoplaitDeg from 'figma:asset/643df360e0d06f13fe71ffbb34beefd28c57aad1.png';
import posterYoplaitPromo from 'figma:asset/08c3ac7bd0d7a5c6b48ed6ec6acfefcf2daf72df.png';
import logoAlokaloka from 'figma:asset/58f66aef8f9f1f0072e9e45411842973f287a38f.png';
import logoMandonaBe from 'figma:asset/215ca02433033e37e01c1e3567fcfe8a164f799b.png';
import logoEkone from 'figma:asset/19a98a3ce3bf1766d04b18ded32d5ff3dd7d8e1f.png';

interface Project {
  title: string;
  description: string;
  image: string;
  images?: string[];
  bannerWeb?: string;
  tags: string[];
  category: string;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Logos & Identités visuelles",
      description: "Création de logos et chartes graphiques pour divers secteurs : Alokaloka (vente de chapiteaux), Mandona Be (restaurant), E-kone (informatique).",
      image: logoAlokaloka,
      images: [logoAlokaloka, logoMandonaBe, logoEkone],
      tags: ["Logo", "Branding", "Identité"],
      category: "Identité visuelle"
    },
    {
      title: "Packaging Riz Makalioka",
      description: "Gamme complète de packagings pour les riz Makalioka : Riz Maka (long grain), Riz So'Soa (riz rouge des Hautes Terres) et Riz Alaotra (premium). Design d'identité visuelle et gestion prépresse.",
      image: riceMakaImage,
      images: [riceMakaImage, riceSoSoaImage, riceAlaotraImage],
      tags: ["Branding", "Packaging", "Prépresse"],
      category: "Packaging design"
    },
    {
      title: "Catalogue produits",
      description: "Mise en page et production d'un catalogue de produits alimentaires avec gestion des références et déclinaisons multilingues.",
      image: catalogueImage,
      tags: ["Éditorial", "Catalogue", "Print"],
      category: "Design éditorial"
    },
    {
      title: "Élection Municipales 2026",
      description: "Supports de campagne électorale complets (projet fictif à but démonstratif) : bulletins de votes, profession de foi, affiches électorales, tracts et bannière web pour une candidature municipale.",
      image: electionImage,
      images: [electionImage],
      bannerWeb: "https://images.unsplash.com/photo-1668706971199-37e30a4e6298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpdGljYWwlMjBlbGVjdGlvbiUyMGJhbm5lciUyMHdlYnxlbnwxfHx8fDE3NjMxMTAyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Campagne", "Print", "Digital"],
      category: "Design graphique"
    },
    {
      title: "Affiches promotionnelles",
      description: "Conception d'affiches publicitaires pour campagnes de promotion et événements : chapiteaux Alokaloka, campagnes Yoplait et Leader Price.",
      image: posterChapiteaux,
      images: [posterChapiteaux, posterYoplaitDeg, posterYoplaitPromo],
      tags: ["Publicité", "Print", "Promotion"],
      category: "Design graphique"
    }
  ];

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <>
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">Projets sélectionnés</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Découvrez une sélection de mes réalisations récentes qui illustrent ma démarche créative
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  {project.images && project.images.length > 1 ? (
                    <div className="grid grid-cols-3 gap-2 p-4 h-full bg-white">
                      {project.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="flex items-center justify-center">
                          <ImageWithFallback
                            src={img}
                            alt={`${project.title} ${imgIndex + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                      {project.bannerWeb && (
                        <div className="flex items-center justify-center">
                          <ImageWithFallback
                            src={project.bannerWeb}
                            alt={`${project.title} bannière web`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-purple-600">{project.category}</span>
                  </div>
                  <h3 className="text-2xl mb-2 text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    size="sm"
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => handleViewProject(project)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Voir le projet
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl text-slate-900">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-lg text-slate-600">
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <div className="mb-6">
                  <p className="text-slate-700 leading-relaxed">{selectedProject.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-4">
                  {selectedProject.images && selectedProject.images.length > 0 ? (
                    <>
                      {selectedProject.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="rounded-lg overflow-hidden bg-slate-100 p-4">
                          <ImageWithFallback
                            src={img}
                            alt={`${selectedProject.title} ${imgIndex + 1}`}
                            className="w-full h-auto object-contain max-h-96 mx-auto"
                          />
                        </div>
                      ))}
                      {selectedProject.bannerWeb && (
                        <div className="rounded-lg overflow-hidden bg-slate-100 p-4">
                          <p className="text-sm text-slate-600 mb-2">Bannière Web</p>
                          <ImageWithFallback
                            src={selectedProject.bannerWeb}
                            alt={`${selectedProject.title} bannière web`}
                            className="w-full h-auto object-contain max-h-96 mx-auto"
                          />
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="rounded-lg overflow-hidden bg-slate-100 p-4">
                      <ImageWithFallback
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-auto object-contain max-h-96 mx-auto"
                      />
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
