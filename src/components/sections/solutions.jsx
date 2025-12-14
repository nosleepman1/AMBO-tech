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
      image: "/solutions/MCN.png",
      lien: "https://www.mcn.sn",
      categorie: "Web",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      titre: "Salle de jeux de societe",
      description: "Application de quiz fait avec react JS et Express",
      image: "/solutions/QUIZ.png",
      lien: "https://www.quiz-app-demo.com",
      categorie: "Web",
      technologies: ["React", "Express", "WebSocket"]
    },
    {
      id: 3,
      titre: "Plateforme Immobilière Premium",
      description: "Site web moderne pour agence immobilière avec recherche avancée, visites virtuelles 3D, gestion des annonces et système de réservation en ligne",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      lien: "https://www.immobilier-premium.com",
      categorie: "Web",
      technologies: ["Next.js", "PostgreSQL", "Stripe"],
      featured: true
    },
    {
      id: 4,
      titre: "E-Commerce Fashion Store",
      description: "Boutique en ligne complète avec panier d'achat, paiement sécurisé, gestion des stocks et tableau de bord administrateur",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      lien: "https://www.fashion-store-demo.com",
      categorie: "E-commerce",
      technologies: ["React", "Stripe", "Firebase"]
    },
    {
      id: 5,
      titre: "Dashboard Analytique",
      description: "Interface d'analyse de données interactive avec graphiques dynamiques, KPIs en temps réel et export de rapports",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      lien: "https://www.analytics-dashboard.com",
      categorie: "Dashboard",
      technologies: ["React", "D3.js", "WebSocket"]
    },
    {
      id: 6,
      titre: "Application de Gestion Restaurant",
      description: "Système complet de gestion pour restaurants : commandes, menu digital, caisse, réservations et suivi des livraisons",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      lien: "https://www.resto-manager.com",
      categorie: "Mobile",
      technologies: ["React Native", "Firebase", "Node.js"]
    },
    {
      id: 7,
      titre: "Portfolio Créatif",
      description: "Site portfolio moderne pour artistes et designers avec galerie photo, animations fluides et design minimaliste",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      lien: "https://www.creative-portfolio.com",
      categorie: "Web",
      technologies: ["Next.js", "Framer Motion", "Sanity"]
    },
    {
      id: 8,
      titre: "Plateforme de Réservation Voyage",
      description: "Application de réservation de voyages avec recherche de vols, hôtels, comparateur de prix et système de paiement intégré",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      lien: "https://www.travel-booking.com",
      categorie: "Web",
      technologies: ["Vue.js", "Node.js", "Redis"],
      featured: true
    }
  ];

  const categories = ['Tous', 'Web', 'Mobile', 'E-commerce', 'Dashboard'];

  const filteredSolutions = activeFilter === 'Tous' 
    ? solutions 
    : solutions.filter(sol => sol.categorie === activeFilter);

  const featuredProject = solutions.find(s => s.featured && s.id === 3);
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
            <button className="cta-button">Démarrer un projet</button>
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


