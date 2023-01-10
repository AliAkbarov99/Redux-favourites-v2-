import React from 'react'
import './Index.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id='navbar'>
            <div className='navbar__logo'>
                LOGO
            </div>
            <div className='navbar__links'>
                <Link to="/">Home</Link>
                <Link to="/favourite">Favourites</Link>
            </div>
        </div>
    )
}



export default Navbar