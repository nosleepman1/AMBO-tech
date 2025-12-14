import '../styles/fonctionnalites.css'
import FonctionnaliteCards from '../fonctionnaliteCard'

const Fonctionnalites = () => {
    return (
        <section className="fonctionnalites-section text-reveal" id="fonctionnalites">
            <div className="container-fonctionnalites">
                <div className="fonctionnalites-header">
                    <h2 className="fonctionnalites-title">Fonctionnalités</h2>
                    <p className="fonctionnalites-sub">Des solutions simples, créatives et scalables pour des produits numériques innovants</p>
                </div>

                <div className="fonctionnalites-body">
                    <FonctionnaliteCards />
                </div>
            </div>
        </section>
    )
}

export default Fonctionnalites