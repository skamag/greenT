// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './layout.css'

export default function Layout() {
    return(
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}