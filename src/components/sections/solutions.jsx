import React, { useState } from 'react';
import { ExternalLink, Code, Smartphone, Monitor, Filter, ArrowRight, Sparkles, Zap } from 'lucide-react';
import '../styles/solutions.css';

const SolutionsSection = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [hoveredId, setHoveredId] = useState(null);


const solutions = [
    {
      id: 1,
      titre: "Site Musee des Civilisations Noires",
      description: "Site du musee des civilisations noires avec pas mal de choses",
      image: "https://res.cloudinary.com/daaiip4ou/image/upload/v1765998838/interieur-de-la-chambre-d-une-crypte_k4rxta.jpg",
      lien: "https://musee-des-civilisations-noires.vercel.app",
      categorie: "Web",
      technologies: ["React", "Node.js", "MongoDB"],
       featured: true
    },
    {
      id: 2,
      titre: "Salle de jeux de societe",
      description: "Application de quiz avec plus de 12 themes",
      image: "/projects/cg.jpg",
      lien: "https://science-quizz.vercel.app",
      categorie: "Web",
      technologies: ["React", "Express", "MongoDB", "Node.js"]
    },
   
    {
        id: 3,
        titre: "Agri-Senegal",
        description: "Plateforme de gestion agricole pour les agriculteurs sénégalais, offrant des outils de suivi des cultures, prévisions météorologiques et conseils agricoles personnalisés",
        image: "/projects/agri.jpg",
        lien: "http://agri-senegal.gt.tc/",
        categorie: "agriculture",
        technologies: ["PHP", "PostgreSQL", "JS"],

      },
       {
        id: 4,
        titre: "Site d'annonces mariage ",
        description: "Site d'annonces de mariage pour les futurs mariés, avec des fonctionnalités de recherche avancée, de messagerie et de gestion des annonces pour les prestataires de services de mariage",
        image: "/projects/weeding.jpg",
        lien: "https://site-de-mariage.vercel.app/",
        categorie : "Societe",
        technologies: ["PHP", "MySQL", "JS"],

      },
      
      {
        id: 5,
        titre: "Sites Pour Quizz Islamiques",
        description: "Site de quizz islamiques pour les étudiants et les passionnés d'islam, avec des questions sur l'histoire, la culture et les enseignements de l'islam, ainsi que des fonctionnalités de suivi des progrès et de partage des résultats",
        image: "/projects/islam.jpg",
        lien: "https://quizizlamique.great-site.net/qcm_islamique/",
        categorie: "culture | religion",
        technologies: ["PHP", "MySQL", "JS"]
      }
  ];

  const categories = ['Tous', 'Web', 'Mobile', 'E-commerce', 'Dashboard'];

  const filteredSolutions = activeFilter === 'Tous' 
    ? solutions 
    : solutions.filter(sol => sol.categorie === activeFilter);

  const featuredProject = solutions.find(s => s.featured && s.id === 1);
  const otherProjects = filteredSolutions.filter(s => s.id !== featuredProject?.id);

  const getCategoryIcon = (cat) => {
    switch(cat) {
      case 'Web': return <Monitor className="w-4 h-4" />;
      case 'Mobile': return <Smartphone className="w-4 h-4" />;
      case 'Dashboard': return <Code className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section className="solutions-section team text-reveal" id="solutions">
      <div className="solutions-container">
        {/* Header avec animations */}
        <div className="solutions-header">
          
          <h2 className="solutions-title">Nos Solutions</h2>
          <p className="solutions-subtitle">
            Découvrez nos projets web et mobile qui transforment les idées en expériences digitales exceptionnelles
          </p>
        </div>

        {/* Filtres avec style cohérent */}
        <div className="solutions-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`solutions-filter-btn ${activeFilter === cat ? 'active' : ''}`}
            >
              <Filter className="filter-icon" />
              {cat}
            </button>
          ))}
        </div>

        {/* Projet en vedette */}
        {activeFilter === 'Tous' && featuredProject && (
          <div 
            className="featured-project"
            onMouseEnter={() => setHoveredId(featuredProject.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => window.open(featuredProject.lien, '_blank')}
          >
            <div className="featured-image-wrapper">
              <img 
                src={featuredProject.image} 
                alt={featuredProject.titre}
                className="featured-image"
              />
              <div className="featured-overlay" />
              
              {/* Badges */}
              <div className="featured-badge featured-badge-main">
                <Zap className="badge-icon" />
                <span>Projet Phare</span>
              </div>

              <div className="featured-badge featured-badge-category">
                {getCategoryIcon(featuredProject.categorie)}
                <span>{featuredProject.categorie}</span>
              </div>

              {/* Contenu */}
              <div className="featured-content">
                <h3 className="featured-title">{featuredProject.titre}</h3>
                <p className="featured-description">{featuredProject.description}</p>
                
                {/* Technologies */}
                <div className="featured-technologies">
                  {featuredProject.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>

                {/* CTA */}
                <button className="featured-cta">
                  Voir le projet
                  <ArrowRight className={`cta-icon ${hoveredId === featuredProject.id ? 'arrow-shift' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Grille de projets */}
        <div className="solutions-grid">
          {otherProjects.map((solution, index) => (
            <div
              key={solution.id}
              className="solution-card"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={() => setHoveredId(solution.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => window.open(solution.lien, '_blank')}
            >
              {/* Image */}
              <div className="solution-image-wrapper">
                <img 
                  src={solution.image} 
                  alt={solution.titre}
                  className="solution-image"
                />
                <div className="solution-overlay" />
                
                {/* Category Badge */}
                <div className="solution-category-badge">
                  {getCategoryIcon(solution.categorie)}
                  <span>{solution.categorie}</span>
                </div>

                {/* Hover Icon */}
                <div className="solution-hover-icon">
                  <ExternalLink className="external-link-icon" />
                </div>
              </div>

              {/* Contenu */}
              <div className="solution-content">
                <h3 className="solution-title">{solution.titre}</h3>
                <p className="solution-description">{solution.description}</p>

                {/* Technologies */}
                {solution.technologies && (
                  <div className="solution-technologies">
                    {solution.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="solution-tech-tag">{tech}</span>
                    ))}
                  </div>
                )}

                {/* Lien */}
                <div className="solution-link">
                  Découvrir
                  <ArrowRight className={`link-arrow ${hoveredId === solution.id ? 'arrow-shift' : ''}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section finale */}
        <div className="solutions-cta-section">
          <div className="cta-card">
            <h3 className="cta-title">Un projet en tête ?</h3>
            <p className="cta-description">Discutons de votre prochaine solution digitale</p>
            <button 
              className="cta-button" 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Démarrer un projet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;


















            //  <section className="team text-reveal  id="solutions">
            //         <h1>Nos Solutions</h1>
            //         <p className="section__subtitle"><center>Découvrez des solutions pensés pour transformer vos idées en produits live.</center></p>


