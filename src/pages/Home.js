import CardsContainer from '../components/CardsContainer'
import './home.css'

export default function Home() {
    return(
        <main className='homeContainer'>
            <section className='homeHeaderContainer'>
                {/* <p>Energieffektivisering av ditt nettsted</p> */}
                <div className='chevronContainer'>
                    <i className='fa fa-chevron-down'></i>
                </div>
            </section>
            <CardsContainer />
        </main>
    )
}