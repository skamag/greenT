import './footer.css'

export default function Footer() {
    return(
        <footer className='footerContainer'>
            <section className='footerLeft'>
                <p>greenT AS</p>
                <p>Fantasiveien 42</p>
                <p>0000 OSLO</p>
            </section>
            <section className='footerCenter'>
                <h5 className='footerHeader'>KONTAKT OSS</h5>
                <p>Epost: greent@bedrift.no</p>
                <p>Telefon: 00000000</p>
            </section>
            <section className='footerRight'>
                <h5 className='footerHeader'>HJELP</h5>
                <p>Ofte stilte spørsmål</p>
                <p>Retur</p>
                <p>Søk</p>
            </section>
        </footer>
    )
}