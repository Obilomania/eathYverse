import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
      <>
          <div className="header">
              <Link to={'/'}><h1>earth<span>Y</span>verse</h1></Link>
              <ul className="navLinks">
                    <li> <Link to={'/'}>Home</Link> </li>
                    <li> <Link to={'/weather'}>Weather</Link> </li>
                    <li> <Link to={'/crypto-news'}>Crypto News</Link> </li>
                    <li> <Link to={'/daily-news'}>Daily News</Link> </li>
                    <li> <Link to={'/contact'}>Contact</Link> </li>
              </ul>
          </div>
      </>
  )
}

export default Navigation