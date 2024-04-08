import './start.css'

export default function Start() {
    return(
        <>
            <div className="formContainer">
                <div className='formHeader'>

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