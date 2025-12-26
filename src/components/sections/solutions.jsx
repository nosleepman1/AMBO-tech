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
      description: "Application de quiz fait avec react JS et Express",
      image: "/solutions/QUIZ.png",
      lien: "https://science-quizz.vercel.app",
      categorie: "Web",
      technologies: ["React", "Express", "WebSocket"]
    },
    {
      id: 3,
      titre: "Plateforme Immobilière Premium",
      description: "Site web moderne pour agence immobilière avec recherche avancée, visites virtuelles 3D, gestion des annonces et système de réservation en ligne",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      lien: "",
      categorie: "Web",
      technologies: ["Laravel", "PostgreSQL", "Next.js"],
      featured: true
    },
    {
      id: 4,
      titre: "E-Commerce Fashion Store",
      description: "Boutique en ligne complète avec panier d'achat, paiement sécurisé, gestion des stocks et tableau de bord administrateur",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      lien: "",
      categorie: "E-commerce",
      technologies: ["React", "Stripe", "Firebase"]
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


