import './contact.css'

export default function Contact() {
    return(
        <>
            <div className="formContainer">
                <div className='formHeader'>
                    <p>Benytt gjerne skjemaet nedenfor, så vil vi kontakte deg så snart som mulig. Vi er også tilgjengelige på epost (greent@bedrift.no) og på telefon (000 00 000) alle hverdager mellom 12:00 og 14:00.</p>
                </div>
                <form className='form'>
                    <div className="formName">
                        <label>Navn</label>
                        <input type='text' />
                    </div>
                    <div className="formEmail">
                        <label>Epost</label>
                        <input type='text' />
                    </div>
                    <div className="formMessage">
                        <label>Melding</label>
                        <textarea rows={4} type='text' />
                    </div>
                    <div className="formSubmit">
                        <button>Send inn</button>
                    </div>
                </form>
            </div>
        </>
    )
}