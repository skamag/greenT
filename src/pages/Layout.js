import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './layout.css'

export default function Layout() {
    const [isToggle, setIsToggle] = useState(false)

    const removeMobileNav = () => {
        isToggle && setIsToggle(false)
    }

    const handleClick = () => {
        isToggle ? setIsToggle(false) : setIsToggle(true)

        if(!isToggle) {
            window.addEventListener("scroll", function checkScroll() {
                if(window.scrollY>5){
                    setIsToggle(false)
                    window.removeEventListener("scroll", checkScroll)
                }
            })
        }
    }

    return(
        <div className='appContainer'>
            <Navbar
                isToggle={isToggle}
                removeMobileNav={removeMobileNav}
                handleClick={handleClick}
            />
            <Outlet />
            <Footer />
        </div>
    )
}