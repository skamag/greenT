import CardsContainer from '../components/CardsContainer'
import './home.css'

export default function Home() {
    return(
        <div className='homeContainer'>
            <div className='homeHeaderContainer'>
                {/* <p>Energieffektivisering av ditt nettsted</p> */}
                <div className='chevronContainer'>
                    <i className='fa fa-chevron-down'></i>
                </div>
            </div>
            <CardsContainer />
        </div>
    )
}