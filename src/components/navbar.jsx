import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import './styles/navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const navLinks = useMemo(() => [
        { title: 'Accueil', href: '#hero', id: 'hero' },
        { title: 'Fonctionnalites', href: '#fonctionnalites', id: 'fonctionnalites' },
        { title: 'Solutions', href: '#solutions', id: 'solutions' },
        { title: 'Équipe', href: '#team', id: 'team' },
        { title: 'Stack', href: '#stack', id: 'stack' },
        { title: 'Contact', href: '#contact', id: 'contact' },
    ], []);

    useEffect(() => {
        const handleScroll = () => {
            
            setScrolled(window.scrollY > 50);

            // Détecter la section active
            const sections = navLinks.map(link => link.id);
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navLinks]);

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <a 
                    href="#hero" 
                    className="navbar-logo"
                    onClick={(e) => handleLinkClick(e, '#hero')}
                >
                    <span className="navbar-logo-text">AMBO TECH</span>
                </a>

                {/* Menu Desktop */}
                <div className="navbar-menu">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className={`navbar-link ${activeSection === link.id ? 'active' : ''}`}
                            onClick={(e) => handleLinkClick(e, link.href)}
                        >
                            <span>{link.title}</span>
                            <span className="navbar-link-underline"></span>
                        </a>
                    ))}
                </div>

                

                {/* Bouton Menu Mobile */}
                <button
                    className={`navbar-toggle ${isOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Menu Mobile */}
            <div className={`navbar-mobile ${isOpen ? 'open' : ''}`}>
                <div className="navbar-mobile-content">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className={`navbar-mobile-link ${activeSection === link.id ? 'active' : ''}`}
                            onClick={(e) => handleLinkClick(e, link.href)}
                        >
                            {link.title}
                        </a>
                    ))}
                    <a 
                        href="#contact" 
                        className="navbar-mobile-cta"
                        onClick={(e) => handleLinkClick(e, '#contact')}
                    >
                        Nous Contacter
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
