import './styles/fonctionnalites.css'
const Fonctionnalites = () => {

    
    return (

        <div>
            <section class="section section--features" id="fonctionnalites">
                <div class="container">
                    <h1 class="section__title">Fonctionnalités</h1>
                    <p class="section__subtitle"><center>Des solutions simples, créatives et scalables pour des produits numériques qui fonctionnent.</center></p>

                    <div class="cards">
                    <article class="card js-reveal">
                        <div class="card__media">
                        <img src="/../assets/F4.png" alt="Développement Web — illustration" />
                        </div>
                        
                        <h3 class="card__title">Produits</h3>
                        <p class="card__text">Nous concevons des plateformes performantes intégrant des outils intelligents, une interface intuitive, une gestion sécurisée des utilisateurs et des données, ainsi que des intégrations modernes pour offrir une expérience fluide et fiable.</p>
                    </article>

                    <article class="card js-reveal">
                        <div class="card__media">
                        <img src="F5.webp" alt="Mobile — illustration" />
                        </div>
                        <h3 class="card__title">Orientées Clients</h3>
                        <p class="card__text">Nous plaçons nos utilisateurs au cœur de notre solution : support rapide, expérience personnalisée, système de feedback, notifications et accessibilité totale pour garantir un accompagnement simple, efficace et agréable.</p>
                    </article>

                    <article class="card js-reveal">
                        <div class="card__media">
                        <img src="F7.png" alt="Automatisation IA — illustration" />
                        </div>
                        <h3 class="card__title">Business</h3>
                        <p class="card__text">Nous fournissons des outils puissants pour la croissance : analyses avancées, automatisation marketing, gestion interne optimisée, paiements sécurisés et infrastructure scalable pour soutenir l’évolution de votre activité.</p>
                    </article>
                    </div>
                </div>
            </section>
        </div>

    )
}


export default Fonctionnalites