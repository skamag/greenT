import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
// import Logo from '../components/Logo'
import './layout.css'

export default function Layout() {
    const [isToggle, setIsToggle] = useState(false)

    // let navbarMobile = document.querySelector('.navbarMobile')
    // let burger = document.querySelector('.burger')

    const removeMobileNav = () => {
        isToggle && setIsToggle(false)
        
        // navbarMobile.classList.remove('navbarMobile-toggle')
        // burger.classList.remove('burger-toggle')
        
    }

    const handleClick = () => {
        isToggle ? setIsToggle(false) : setIsToggle(true)

        // const toggle = () => {
        //     navbarMobile.classList.toggle('navbarMobile-toggle')
        //     burger.classList.toggle('burger-toggle')
        // }
        
        // toggle()
    }

    return(
        <>
            <nav className={`navbarMobile ${isToggle ? 'navbarMobile-toggle' : null}`}>
                <div className='linksMobile'>
                    <Link className='linkMobile' to='/' onClick={handleClick}>Home</Link>
                    <Link className='linkMobile' to='/about' onClick={handleClick}>About</Link>
                    <Link className='linkMobile' to='/contact' onClick={handleClick}>Contact</Link>
                </div>
            </nav>
            <nav className='navbar'>
                {/* <Logo /> */}
                <div className='navText'>
                    <div>
                        <Link className='logo' to='/' onClick={removeMobileNav}>green<span className='logo-t'>T</span></Link>
                    </div>
                    <div className='links'>
                        <Link className='link' to='/'>Home</Link>
                        <Link className='link' to='/about'>About</Link>
                        <Link className='link' to='/contact'>Contact</Link>
                    </div>
                </div>
                <div className={`burger ${isToggle ? 'burger-toggle' : null}`} onClick={handleClick}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}