import './styles/fonctionnalites.css'
import F4 from '../assets/F4.png'
import F5 from '../assets/F5.webp'
import F7 from '../assets/F7.png'

const Fonctionnalites = () => {
    return (
        <div >
            <section className="section section--features" id="fonctionnalites">
                <div className="container" id="">
                    <h1 className="section__title">Fonctionnalités</h1>
                    <p className="section__subtitle"><center>Des solutions simples, créatives et scalables pour des produits numériques qui fonctionnent.</center></p>

                    <div className="cards">
                    <article className="card js-reveal">
                        <div className="card__media">
                        <img src={F4} alt="Développement Web — illustration" />
                        </div>
                        
                        <h3 className="card__title">Produits</h3>
                        <p className="card__text">Nous concevons des plateformes performantes intégrant des outils intelligents, une interface intuitive, une gestion sécurisée des utilisateurs et des données, ainsi que des intégrations modernes pour offrir une expérience fluide et fiable.</p>
                    </article>

                    <article className="card js-reveal">
                        <div className="card__media">
                        <img src={F5} alt="Mobile — illustration" />
                        </div>
                        <h3 className="card__title">Orientées Clients</h3>
                        <p className="card__text">Nous plaçons nos utilisateurs au cœur de notre solution : support rapide, expérience personnalisée, système de feedback, notifications et accessibilité totale pour garantir un accompagnement simple, efficace et agréable.</p>
                    </article>

                    <article className="card js-reveal">
                        <div className="card__media">
                        <img src={F7} alt="Automatisation IA — illustration" />
                        </div>
                        <h3 className="card__title">Business</h3>
                        <p className="card__text">Nous fournissons des outils puissants pour la croissance : analyses avancées, automatisation marketing, gestion interne optimisée, paiements sécurisés et infrastructure scalable pour soutenir l’évolution de votre activité.</p>
                    </article>
                    </div>
                </div>
            </section>
        </div>

    )
}


export default Fonctionnalites