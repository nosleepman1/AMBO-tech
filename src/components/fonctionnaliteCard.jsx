import './styles/card.css'
import FONCTIONNALITES from '../data/fonctionnalites.json'
import { motion } from "framer-motion";

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
    return (
        <motion.div className="fonctionnalites-grid" initial="hidden" animate="visible" variants={listVariants}>
            {FONCTIONNALITES.map((card, i) => (
                <motion.div key={card.id || i} className="card-wrapper" variants={cardVariants} whileHover={{ translateY: -6 }} role="article" aria-label={card.title}>
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
                </motion.div>
            ))}
        </motion.div>
    )
}

