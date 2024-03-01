import React from 'react'
import './Header.css'

function Header() {
    const handleSignup = () => {
        window.location = '/signup'
    }
    const handlesignin = () => {
        window.location = '/signin'
    }

    return (
        <header className='header-container'>
            <h1 className='heading-name'>TechIt</h1>
            <div className='nav-container'>
                <ul className='navbar-nav'>
                    <li>Home</li>
                    <li>
                        <a href='/contact'>
                        Contact Us
                        </a>
                    </li>
                    <li>
                        <a href='/about'>
                        About
                        </a>
                    </li>
                </ul>
                <button className='signup-btn' onClick={handleSignup}>Sign up</button>
                <button className='signin-btn' onClick={handlesignin}>Sign in</button>
            </div>


        </header>
    )
}

export default Header