import './styles/card.css'
import FONCTIONNALITES from '../data/fonctionnalites.json'
import { motion as Motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';

const listVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12
        }
    }
}

const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.2, 0.9, 0.3, 1] } }
}

export default function FonctionnaliteCards() {
    const scrollContainerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
    const [activeIndicator, setActiveIndicator] = useState(0);

    useEffect(() => {
        // Détecter les changements de taille d'écran
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isMobile || !scrollContainerRef.current) return;

        const scrollContainer = scrollContainerRef.current;

        const handleScroll = () => {
            const scrollLeft = scrollContainer.scrollLeft;
            const cardWidth = 220 + 16; // card width + gap
            const currentCard = Math.round(scrollLeft / cardWidth);
            const totalCards = FONCTIONNALITES.length;
            
            // Limiter à 3 indicateurs maximum
            const indicator = Math.min(currentCard, totalCards - 1);
            setActiveIndicator(indicator);
        };

        scrollContainer.addEventListener('scroll', handleScroll);
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    return (
        <div className="fonctionnalites-container">
            {/* Carousel Container */}
            <Motion.div 
                ref={scrollContainerRef}
                className="fonctionnalites-grid snap-x snap-mandatory overflow-x-auto sm:overflow-visible flex gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 sm:p-0" 
                initial="hidden" 
                animate="visible" 
                variants={listVariants}
            >
                {FONCTIONNALITES.map((card, i) => (
                    <Motion.div key={card.id || i} className="card-wrapper snap-start shrink-0 min-w-[220px] sm:min-w-0" variants={cardVariants} whileHover={{ translateY: -6 }} role="article" aria-label={card.title}>
                        <div className="card-hover-bg" />
                        <div className="card-media">
                            <img src={card.image} alt={card.title} className="card-image" loading="lazy" />
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-desc">{card.text}</p>
                            <div className="card-meta">
                                <button className="card-cta" type="button" aria-label={`En savoir plus sur ${card.title}`}>En savoir +</button>
                            </div>
                        </div>
                    </Motion.div>
                ))}
            </Motion.div>

            {/* Indicateurs de Section - Visible uniquement sur mobile */}
            {isMobile && (
                <div className="carousel-indicators">
                    {FONCTIONNALITES.map((_, index) => (
                        <div 
                            key={index}
                            className={`indicator-line ${activeIndicator === index ? 'active' : ''}`}
                            aria-label={`Section ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

