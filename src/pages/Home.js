import Article from '../components/Article'
import leaves from '../images/leaves.jpg'
import birds from '../images/birds.jpg'
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
            <section className='cardsContainerSection'>
                {/* <h3 className='cardsContainerHeader'>Hva kan vi hjelpe til med?</h3> */}
                <div className='cardsContainer'>
                    <Article image={leaves}>
                        <h3>Nettsider</h3>
                        <p>Vi produserer miljøvennlige nettsteder for både kommersielt og privat bruk. Vi streber etter å skape brukervennlige og søkemotoroptimaliserte webløsninger uten å ofte design og estetikk.</p>
                    </Article>
                    <Article image={birds}>
                        <h3>Energieffektivisering</h3>
                        <p>Vi kan hjelpe deg med å gjøre ditt nettsted mer miljøvennlig gjennom redesign og oppdateringer.</p>
                        <p>Vi kan hjelpe deg med å gjøre ditt nettsted mer miljøvennlig gjennom redesign og oppdateringer.</p>
                    </Article>
                    <Article image={leaves}>
                        <h3>Overskrift</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Article>
                    <Article image={leaves}>
                        <h3>Overskrift</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Article>
                </div>
            </section>
        </main>
    )
}