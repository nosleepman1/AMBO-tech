import React, { useState, useEffect } from 'react';
import '../styles/contact.css';
import { Mail, Phone, MapPin, Check, X, Loader2, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formMessage, setFormMessage] = useState({ type: '', text: '' });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        const contactSection = document.querySelector('.contact');
        if (contactSection) {
            contactSection.classList.add('active-reveal');
        }
    }, []);

    const validateField = (name, value) => {
        let error = '';
        if (!value.trim()) {
            error = `${name === 'name' ? 'Le nom' : name === 'email' ? 'L\'email' : 'Le message'} est requis`;
        } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = 'Email invalide';
        }
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (touched[name]) {
            validateField(name, value);
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        validateField(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate all fields
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            let error = '';
            if (!formData[key].trim()) {
                error = `${key === 'name' ? 'Le nom' : key === 'email' ? 'L\'email' : 'Le message'} est requis`;
            } else if (key === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData[key])) {
                error = 'Email invalide';
            }
            if (error) newErrors[key] = error;
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setTouched({ name: true, email: true, message: true });
            return;
        }

        setIsSubmitting(true);
        setFormMessage({ type: '', text: '' });

        // Simulation d'envoi
        setTimeout(() => {
            setIsSubmitting(false);
            setFormMessage({
                type: 'success',
                text: 'Message envoyé avec succès ! Nous vous répondrons bientôt.'
            });
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
            setTouched({});
            
            setTimeout(() => {
                setFormMessage({ type: '', text: '' });
            }, 5000);
        }, 1500);
    };

    return (
        <section className="contact text-reveal" id="contact">
            <div className="contact-header">
                <h2 className="section-title text-[#0FFCBE]">Contactez-nous</h2>
                <p className="section-subtitle">Discutons de vos projets et de vos idées innovantes</p>
            </div>
            
            <div className="contact-container">
                {/* Info Section */}
                <div className="contact-info-section">
                    <div className="info-header">
                        <h3 className="info-title">Restons en contact</h3>
                        <p className="info-description">Nous sommes toujours disponibles pour répondre à vos questions et discuter de nouvelles opportunités.</p>
                    </div>

                    <div className="contact-items">
                        <div className="contact-item">
                            <div className="contact-item-icon mail">
                                <Mail size={24} />
                            </div>
                            <div className="contact-item-content">
                                <span className="contact-item-label">Email</span>
                                <a href="mailto:ambotech@gmail.com">ambotech@gmail.com</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item-icon phone">
                                <Phone size={24} />
                            </div>
                            <div className="contact-item-content">
                                <span className="contact-item-label">Téléphone</span>
                                <a href="tel:+2214731493">+221 473 14 93</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item-icon location">
                                <MapPin size={24} />
                            </div>
                            <div className="contact-item-content">
                                <span className="contact-item-label">Adresse</span>
                                <span>Sénégal, Rufisque</span>
                            </div>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="#" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="#" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://wa.me/2214731493" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </div>

                {/* Form Section */}
                <div className="contact-form-section">
                    <form id="contact-form" onSubmit={handleSubmit} noValidate>
                        <h3 className="form-title">Envoyez-nous un message</h3>

                        <div className="form-group">
                            <label htmlFor="name" className="form-label">
                                Nom <span className="required">*</span>
                            </label>
                            <input 
                                type="text" 
                                id="name"
                                placeholder="Votre nom complet" 
                                required 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-label="Nom"
                                className={`form-input ${touched.name && errors.name ? 'error' : ''}`}
                            />
                            {touched.name && errors.name && (
                                <span className="form-error">{errors.name}</span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                Email <span className="required">*</span>
                            </label>
                            <input 
                                type="email" 
                                id="email"
                                placeholder="votre@email.com" 
                                required 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-label="Email"
                                className={`form-input ${touched.email && errors.email ? 'error' : ''}`}
                            />
                            {touched.email && errors.email && (
                                <span className="form-error">{errors.email}</span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">
                                Message <span className="required">*</span>
                            </label>
                            <textarea 
                                id="message"
                                name="message" 
                                placeholder="Décrivez votre projet ou votre message..." 
                                rows="5" 
                                required 
                                value={formData.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-label="Message"
                                className={`form-input textarea ${touched.message && errors.message ? 'error' : ''}`}
                            ></textarea>
                            {touched.message && errors.message && (
                                <span className="form-error">{errors.message}</span>
                            )}
                        </div>

                        <button type="submit" className="btn-send" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <Loader2 size={18} className="animate-spin" />
                                    Envoi en cours...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    <Send size={18} />
                                    Envoyer le message
                                </span>
                            )}
                        </button>

                        {formMessage.text && (
                            <div className={`form-message animate-popup ${formMessage.type}`}>
                                <div className="message-icon">
                                    {formMessage.type === 'success' ? (
                                        <Check size={20} />
                                    ) : (
                                        <X size={20} />
                                    )}
                                </div>
                                <div className="message-content">
                                    <div className="message-title">{formMessage.type === 'success' ? 'Succès !' : 'Erreur'}</div>
                                    <div className="message-text">{formMessage.text}</div>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

