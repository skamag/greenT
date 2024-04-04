import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './layout.css'

export default function Layout() {
    const [isToggle, setIsToggle] = useState(false)

    const removeMobileNav = () => {
        isToggle && setIsToggle(false)
    }

    const handleClick = () => {
        isToggle ? setIsToggle(false) : setIsToggle(true)

        if(isToggle) {
            window.addEventListener("scroll", function checkScroll() {
                if(window.scrollY>5){
                    setIsToggle(false)
                    window.removeEventListener("scroll", checkScroll)
                }
            })
        }
    }

    return(
        <>
            <nav className={`navbarMobile ${isToggle ? 'navbarMobile-toggle' : null}`}>
                <div className='linksMobile'>
                    <Link className='linkMobile' to='/tjenester' onClick={handleClick}>Tjenester</Link>
                    <Link className='linkMobile' to='/about' onClick={handleClick}>Om oss</Link>
                    <Link className='linkMobile' to='/contact' onClick={handleClick}>Kontakt</Link>
                </div>
            </nav>
            <nav className='navbar'>
                <div className='navText'>
                    <div>
                        <Link className='logo' to='/' onClick={removeMobileNav}>green<span className='logo-t'>T</span></Link>
                    </div>
                    <div className='links'>
                        <Link className='link' to='/tjenester'>Tjenester</Link>
                        <Link className='link' to='/about'>Om oss</Link>
                        <Link className='link' to='/contact'>Kontakt</Link>
                    </div>
                </div>
                <div className={`burger ${isToggle ? 'burger-toggle' : null}`} onClick={handleClick}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            </nav>
            {/* <footer className='footer'>
                <h1>test</h1>
            </footer> */}

            <Outlet />
        </>
    )
}