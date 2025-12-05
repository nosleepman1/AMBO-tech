import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaRocket, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { title: 'Accueil', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Contact', href: '/contact' },
    ];

    const socialLinks = [
        { icon: <FaGithub />, href: 'https://github.com', label: 'GitHub' },
        { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Top Section */}
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <FaRocket className="footer-logo-icon" />
                            <span className="footer-logo-text">AMBO TECH</span>
                        </div>
                        <p className="footer-description">
                            Votre partenaire de confiance pour des solutions technologiques innovantes et sur mesure.
                        </p>
                        <div className="footer-social-links">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-links-section">
                        <h3 className="footer-section-title">Navigation</h3>
                        <ul className="footer-links">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.href} className="footer-link">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-services-section">
                        <h3 className="footer-section-title">Services</h3>
                        <ul className="footer-links">
                            <li><a href="#services" className="footer-link">Développement Web</a></li>
                            <li><a href="#services" className="footer-link">Applications Mobiles</a></li>
                            <li><a href="#services" className="footer-link">Développement Desktop</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact-section">
                        <h3 className="footer-section-title">Contact</h3>
                        <div className="footer-contact-info">
                            <div className="footer-contact-item">
                                <FaEnvelope className="footer-contact-icon" />
                                <span>contact@ambotech.com</span>
                            </div>
                            <div className="footer-contact-item">
                                <FaPhone className="footer-contact-icon" />
                                <span>+221 XX XXX XX XX</span>
                            </div>
                            <div className="footer-contact-item">
                                <FaMapMarkerAlt className="footer-contact-icon" />
                                <span>Dakar, Sénégal</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <div className="footer-divider"></div>
                    <div className="footer-copyright">
                        <p>&copy; {currentYear} AMBO TECH. Tous droits réservés.</p>
                        <p className="footer-made-with">
                             <span className="footer-heart"></span> AMBO TECH
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

