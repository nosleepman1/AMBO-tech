import React, { useState, useEffect } from 'react';
import '../styles/contact.css';
import { Mail, Phone, MapPin } from 'lucide-react';
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

        // Validation des champs
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setIsSubmitting(false);
            setFormMessage({
                type: 'error',
                text: 'Veuillez remplir tous les champs du formulaire.'
            });
            return;
        }

        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setIsSubmitting(false);
            setFormMessage({
                type: 'error',
                text: 'Veuillez entrer une adresse email valide.'
            });
            return;
        }

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
            <div className="contact-container">
                {/* Header */}
                <div className="contact-header">
                    <h2 className="contact-title">Contactez-nous</h2>
                    <p className="contact-subtitle">Restons en contact et discutons de vos projets passionnants</p>
                </div>

                {/* Main Content Grid */}
                <div className="contact-wrapper">
                    {/* Left Side - Info */}
                    <div className="contact-info-section">
                        <div className="contact-info-card">
                            <h3 className="contact-info-title">Restons en contact</h3>
                            <p className="contact-info-description">Nous sommes toujours disponibles pour discuter de vos projets passionnants et de nouvelles opportunités. Collaborons ensemble !</p>
                        </div>

                        {/* Contact Items */}
                        <div className="contact-details">
                            <div className="contact-item reveal">
                                <div className="contact-item-icon">
                                    <Mail className="icon-size" />
                                </div>
                                <div className="contact-item-content">
                                    <span className="contact-item-label">Email</span>
                                    <a href="mailto:ambotech@gmail.com">ambotech@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-item reveal">
                                <div className="contact-item-icon">
                                    <Phone className="icon-size" />
                                </div>
                                <div className="contact-item-content">
                                    <span className="contact-item-label">Téléphone</span>
                                    <a href="tel:+221774731493">+221 77 473 14 93</a>
                                </div>
                            </div>
                            <div className="contact-item reveal">
                                <div className="contact-item-icon">
                                    <MapPin className="icon-size" />
                                </div>
                                <div className="contact-item-content">
                                    <span className="contact-item-label">Adresse</span>
                                    <span>Sénégal, Keur Massar</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="contact-form-section">
                        <div className="contact-form-card">
                            <h2 className="contact-form-title">Envoyez-nous un message</h2>
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
            </div>
        </section>
    );
};

export default Contact;

