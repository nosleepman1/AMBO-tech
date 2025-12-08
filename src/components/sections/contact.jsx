import React, { useState, useEffect } from 'react';
import '../styles/contact.css';
import {FaMailBulk} from 'react-icons/fa'
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formMessage, setFormMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        // Animation au scroll pour le contact
        const contactSection = document.querySelector('.contact');
        if (contactSection) {
            contactSection.classList.add('active-reveal');
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormMessage({ type: '', text: '' });

        // Simulation d'envoi (remplacer par votre API)
        setTimeout(() => {
            setIsSubmitting(false);
            setFormMessage({
                type: 'success',
                text: 'Message envoyé avec succès ! Nous vous répondrons bientôt.'
            });
            setFormData({ name: '', email: '', message: '' });
            
            // Effacer le message après 5 secondes
            setTimeout(() => {
                setFormMessage({ type: '', text: '' });
            }, 5000);
        }, 1500);
    };

    return (
        <section className="contact text-reveal" id="contact">
            <h1 className="text-glow">Contactez-nous</h1>
            <hr />
            <div className="contact-content">
                <div className="contact-info">
                    <div className="contact-info-card">
                        <h3 className="contact-info-title">Restons en contact</h3>
                        <p>Nous sommes toujours disponibles pour discuter de vos projets passionnants et de nouvelles opportunités. Collaborons ensemble !</p>
                    </div>
                    <div className="contact-details">
                        <div className="contact-item reveal">
                            <div className="contact-item-icon">
                                {FaMailBulk}
                            </div>
                            <div className="contact-item-content">
                                <span className="contact-item-label">Email</span>
                                <a href="mailto:ambotech@gmail.com">ambotech@gmail.com</a>
                            </div>
                        </div>
                        <div className="contact-item reveal">
                            <div className="contact-item-icon">
                                <i className="fa-solid fa-phone" aria-hidden="true"></i>
                            </div>
                            <div className="contact-item-content">
                                <span className="contact-item-label">Téléphone</span>
                                <a href="tel:+2214731493">+221 473 14 93</a>
                            </div>
                        </div>
                        <div className="contact-item reveal">
                            <div className="contact-item-icon">
                                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                            </div>
                            <div className="contact-item-content">
                                <span className="contact-item-label">Adresse</span>
                                <span>Sénégal, Rufisque</span>
                            </div>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="#" className="social-link reveal" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="#" className="social-link reveal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://wa.me/2214731493" className="social-link reveal" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </div>

                <div className="contact-form">
                    <div className="contact-form-card">
                        <h3 className="contact-form-title">Envoyez-nous un message</h3>
                        <form id="contact-form" onSubmit={handleSubmit} noValidate>
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Nom</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    placeholder="Votre nom" 
                                    required 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    aria-label="Nom"
                                    className={formData.name ? 'has-value' : ''}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    placeholder="Votre email" 
                                    required 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    aria-label="Email"
                                    className={formData.email ? 'has-value' : ''}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea 
                                    id="message"
                                    name="message" 
                                    placeholder="Votre message" 
                                    rows="5" 
                                    required 
                                    value={formData.message}
                                    onChange={handleChange}
                                    aria-label="Message"
                                    className={formData.message ? 'has-value' : ''}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-send" disabled={isSubmitting}>
                                <span className="btn-text" style={{ display: isSubmitting ? 'none' : 'inline' }}>
                                    <i className="fa-solid fa-paper-plane"></i> Envoyer le message
                                </span>
                                <span className="btn-loading" style={{ display: isSubmitting ? 'inline-flex' : 'none' }}>
                                    <i className="fa-solid fa-spinner fa-spin"></i> Envoi...
                                </span>
                            </button>
                            {formMessage.text && (
                                <div className={`form-message ${formMessage.type}`}>
                                    <i className={`fa-solid ${formMessage.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                                    {formMessage.text}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

