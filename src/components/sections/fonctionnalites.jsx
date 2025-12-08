import '../styles/fonctionnalites.css'
import FonctionnaliteCards from '../fonctionnaliteCard'

const Fonctionnalites = () => {

    

    return (
        <div >
            <section className="section section--features" id="fonctionnalites">
                <div className="container" id="fonctionnalite">

                    <h1 className="section__title" >Fonctionnalités</h1>
                    <p className="section__subtitle"><center>Des solutions simples, créatives et scalables pour des produits numériques qui fonctionnent.</center></p>

                    <div style={{display:'flex'}} className="cards">
                        
                        <FonctionnaliteCards/>

                    </div>
                </div>
            </section>
        </div>

    )
}


export default Fonctionnalites