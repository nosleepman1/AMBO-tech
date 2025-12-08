import './styles/card.css'
import FONCTIONNALITES from '../data/fonctionnalites.json'
import { motion } from "framer-motion";


export default function FonctionnaliteCards() {
  
    return (
    <div className="w-full px-4 py-10 flex flex-col md:flex-row gap-6 md:gap-4 items-center justify-center">
        {FONCTIONNALITES.map((card, i) => (
            <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="card-wrapper w-full md:w-1/3 max-w-sm"
            >
            <div className="card-hover-bg" />


            <div className="card-content p-4">
            <img src={card.image} alt={card.title} className="w-full h-44 object-cover rounded-xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 card-text">{card.title}</h3>
            <p className="text-sm opacity-80 card-text">{card.text}</p>
            </div>
            </motion.div>
            ))}
            
        </div>
  )
}

