import React, { useState, useEffect, useMemo } from 'react';
import '../styles/hero.css';
import HeroImage from '../../assets/Hero.webp';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const words = useMemo(() => ['BIENVENUE', 'WELCOME', 'مرحبا بكم'], []);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        // Animation au scroll pour le hero
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.classList.add('active-reveal');
        }
    }, []);

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        
        const type = () => {
            if (!isDeleting) {
                // Écriture
                if (currentText.length < currentWord.length) {
                    setCurrentText(currentWord.substring(0, currentText.length + 1));
                    setTypingSpeed(120);
                } else {
                    // Pause avant de supprimer
                    setTimeout(() => setIsDeleting(true), 3000);
                }
            } else {
                // Suppression
                if (currentText.length > 0) {
                    setCurrentText(currentWord.substring(0, currentText.length - 1));
                    setTypingSpeed(80);
                } else {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        };

        const timer = setTimeout(type, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, typingSpeed, words]);

    return (
        <section className="hero text-reveal" id="hero">
            <div className="hero-container">
                <div className="hero-content">
                    {/* Left Section */}
                    <div className="hero-left">
                        {/* Brand + Typing Animation */}
                        <div className="hero-brand-section">
                            <h1 className="hero-title">AMBO TECH</h1>
                            <div className="hero-subtitle typing-wrapper" aria-hidden="false">
                                <span className="typing-text">{currentText || 'BIENVENUE'}</span>
                                <span className="cursor"></span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="hero-description">
                            Solutions digitales innovantes, créatives et performantes pour transformer vos idées en produits exceptionnels.
                        </p>

                        {/* CTA Buttons */}
                        <div className="hero-ctas">
                            <a className="hero-btn hero-btn--primary" href="#solutions">
                                <span>Découvrir nos solutions</span>
                                <ArrowRight className="btn-icon" />
                            </a>
                            <a className="hero-btn hero-btn--secondary" href="#fonctionnalites">
                                En savoir plus
                            </a>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="hero-right">
                        <div className="hero-image-wrapper">
                            <img src={HeroImage} alt="AMBO TECH - Solutions Digitales" className="hero-image" />
                            <div className="hero-image-glow"></div>
                        </div>
                    </div>
                </div>

               
            </div>
        </section>
    );
};

export default Hero;
