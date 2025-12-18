import '../../App.css'
import Devs from '../../data/members.json'
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { useEffect } from 'react'
import TechCarousel from '../Carousselle'

const Moha = () => {

    // Fonction helper pour identifier le type de réseau social
        const getSocialIcon = (url) => {
            if (url.includes('github.com')) return <FaGithub />;
            if (url.includes('linkedin.com')) return <FaLinkedin />;
            if (url.includes('instagram.com')) return <FaInstagram />;
            return null;
        };

        const getSocialName = (url) => {
            if (url.includes('github.com')) return 'GitHub';
            if (url.includes('linkedin.com')) return 'LinkedIn';
            if (url.includes('instagram.com')) return 'Instagram';
            return 'Social';
        };

        // Animation au scroll
        useEffect(() => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active-reveal');
                    }
                });
            }, observerOptions);

            // Observer tous les éléments avec la classe reveal après un court délai pour s'assurer qu'ils sont rendus
            const observeElements = () => {
                const revealElements = document.querySelectorAll('.reveal, .reveal-top, .text-reveal');
                revealElements.forEach((el) => {
                    observer.observe(el);
                });
            };

            // Observer immédiatement et après un court délai
            observeElements();
            const timeoutId = setTimeout(observeElements, 100);

            return () => {
                clearTimeout(timeoutId);
                const revealElements = document.querySelectorAll('.reveal, .reveal-top, .text-reveal');
                revealElements.forEach((el) => {
                    observer.unobserve(el);
                });
            };
        }, []);

    return (
        <div>

        <section className="team text-reveal px-4 sm:px-6 lg:px-8 rounded-xl" id="team">
        <div className="team-header">
            <h2 className="team-title">Notre Équipe</h2>
            <p className="team-subtitle">découvrez les talents derrière ambo tech</p>
        </div>
        <div className="team-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">

            {
               Devs.map((dev, index) => (
                <div className=" team-member w-full reveal flex flex-col justify-center items-center" key={index} style={{transitionDelay: `${index * 0.1}s`}}>
                    <div className="team-member-image">
                        {/*image du developpeur */}
                        <img 
                            src={dev.image} 
                            alt={dev.name}
                            className="w-full h-auto"
                        />

                        <div className="social-overlay">
                            <div className="social-links flex gap-3 sm:gap-4">
                                {dev.reseaux.map((reseau, idx) => (
                                    <a 
                                        href={reseau.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="social-icon text-xl sm:text-2xl"
                                        key={idx}
                                        aria-label={`${getSocialName(reseau.url)} de ${dev.name}`}
                                    >
                                        {getSocialIcon(reseau.url)}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="team-member-content px-2 sm:px-4">
                        <h3 className="text-lg sm:text-xl lg:text-2xl">{dev.name}</h3>
                        <div className="team-info">
                            <div className="team-info-item flex items-center gap-2">
                                <i className="fa-solid fa-code" aria-hidden="true"></i>
                                <span className="text-sm sm:text-base">{dev.stack}</span>
                            </div>
                            <span className="text-sm sm:text-base">{dev.role}</span>
                        </div>
                    </div>
                </div>
            ))
            }   
        </div>
    </section>

    < TechCarousel />

    <section className="services text-reveal px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20" id="services">
        <h1 className="text-glow text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">Découvrez l'ensemble de nos Créations</h1>
        <hr className="my-6 sm:my-8"/>
        <div className="services-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            <div className="service-card p-4 sm:p-6 reveal" style={{transitionDelay: '0.1s'}}>
                <img src="/web.svg" alt="Développement Web" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto" />
                <h3 className="text-lg sm:text-xl lg:text-2xl mt-4">Développement Web</h3>
                <p className="text-sm sm:text-base mt-2 sm:mt-3">Création de sites web modernes, responsives et performants adaptés à vos besoins professionnels.</p>
            </div>

            <div className="service-card p-4 sm:p-6 reveal" style={{transitionDelay: '0.2s'}}>
                <img src="/dm.svg" alt="Développement d'Applications" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto" />
                <h3 className="text-lg sm:text-xl lg:text-2xl mt-4">Applications Mobiles</h3>
                <p className="text-sm sm:text-base mt-2 sm:mt-3">Développement d'applications iOS et Android sur mesure pour votre entreprise.</p>
            </div>

            <div className="service-card p-4 sm:p-6 reveal" style={{transitionDelay: '0.3s'}}>
                <img src="/app.svg" alt="Marketing Digital" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto" />
                <h3 className="text-lg sm:text-xl lg:text-2xl mt-4">Developppement Desktop</h3>
                <p className="text-sm sm:text-base mt-2 sm:mt-3">Developpement de logiciels desktop pour votre entreprise.</p>
            </div>

            
        </div>
    </section>


        </div>
    )
}

export default Moha;