import Article from '../components/Article'
import leaves from '../images/leaves.jpg'
import './about.css'

export default function About() {
    return(
        <main className='aboutContainer'>
            <section className='aboutHeader'>
                <h2>Grønnere web</h2>
                <p>Internettet står for om lag 3,7 prosent av verdens årlige klimagassutslipp, dette er omtrent på nivå med det årlige utslippet fra verdens flytrafikk.</p>
                <p>Vi ønsker å hjelpe bedrifter og andre som ønsker å forminske sitt klimaavtrykk gjennom energieffektivisering av nettsider.</p>
            </section>
            <section className='cardsContainerSection'>
                <div className='cardsContainer'>
                    <Article image={leaves}>
                        <h3>Overskrift</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Article>
                    <Article image={leaves}>
                        <h3>Overskrift</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Article>
                    <Article image={leaves}>
                        <h3>Overskrift</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Article>
                    <Article image={leaves}>
                        <h3>Overskrift</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Article>
                </div>
            </section>
            <section className='aboutSection'>
                <h3>Prising</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </section>
        </main>
    )
}