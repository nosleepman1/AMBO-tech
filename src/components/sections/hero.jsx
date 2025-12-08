import React, { useState, useEffect, useMemo } from 'react';
import '../styles/hero.css';
import HeroImage from '../../assets/Hero.webp';

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
                    setTypingSpeed(150);
                } else {
                    // Pause avant de supprimer
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Suppression
                if (currentText.length > 0) {
                    setCurrentText(currentWord.substring(0, currentText.length - 1));
                    setTypingSpeed(100);
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
            <div className="hero__content container">
                <div className="hero__left">
                    <h1 className="hero__title">
                        <span className="hero__main">AMBO TECH <span className="hero__typed js-typed typewriter">{currentText || 'BIENVENUE'}<span className="cursor">|</span></span></span>
                    </h1>
                    <p className="hero__lead"></p>
                    <div className="hero__ctas">
                        <a className="btn btn--primary" href="#services">Découvrir nos services</a>
                        <a className="btn btn--ghost" href="#team">En savoir plus</a>
                    </div>
                </div>

                <div className="hero__image-wrapper">
                    <img src={HeroImage} alt="AMBO TECH" className="hero__image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
