import React, { useState } from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navigation = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)


    return (
        <>
            <div className="header">
                <Link to={'/'}><h1>earth<span>Y</span>verse</h1></Link>
                <ul className={click ? "navLinks active" : "navLinks"}>
                    <li> <Link to={'/'}>Home</Link> </li>
                    <li> <Link to={'/weather'}>Weather</Link> </li>
                    <li> <Link to={'/crypto-news'}>Crypto News</Link> </li>
                    <li> <Link to={'/daily-news'}>Daily News</Link> </li>
                    <li> <Link to={'/contact'}>Contact</Link> </li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={25} style={{ color: 'white' }} />) : (<FaBars size={25} style={{ color: 'white' }} />)}

                </div>
            </div>
        </>
    )
}

export default Navigation