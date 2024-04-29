// import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar({ isToggle, removeMobileNav, handleClick }) {
    useEffect(() => {
        const handleResize = () => {
            window.innerWidth >= 800 ? removeMobileNav() : console.log('error')
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return(
        <>
            <nav className={`navbar ${isToggle ? 'navbar-toggle' : null}`}>
                <div className='navText'>
                    <div>
                        <Link className='logo' to='/' onClick={removeMobileNav}>green<span className='logo-t'>T</span></Link>
                    </div>
                    <div className='links'>
                        <Link className='link' to='/tjenester'>Tjenester</Link>
                        <Link className='link' to='/om'>Om oss</Link>
                        <Link className='link' to='/kontakt'>Kontakt</Link>
                    </div>
                </div>
                <div className='startButtonContainer'>
                    <Link className='startButton' to='start'>Kom i gang</Link>
                </div>
                <div className={`burger ${isToggle ? 'burger-toggle' : null}`} onClick={handleClick}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            </nav>
            <nav className={`navbarMobile ${isToggle ? 'navbarMobile-toggle' : null}`}>
                <div className='linksMobile'>
                    <Link className='linkMobile' to='/tjenester' onClick={handleClick}>Tjenester</Link>
                    <Link className='linkMobile' to='/om' onClick={handleClick}>Om oss</Link>
                    <Link className='linkMobile' to='/kontakt' onClick={handleClick}>Kontakt</Link>
                    <button className='startButton' to='/start' onClick={handleClick}>Kom i gang</button>
                </div>
            </nav>
            <div className={`darkScreen ${isToggle ? 'darkScreen-toggle' : null}`}></div>
        </>
    )
}