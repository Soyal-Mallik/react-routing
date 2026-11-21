import React from 'react'
import { NavLink } from 'react-router'

import './navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav className='nav-bar'>
        <NavLink to="/" className='nav-link'>Home</NavLink>
        <NavLink to="/about " className='nav-link'>About</NavLink>
        <NavLink to="/contact" className='nav-link'>Contact</NavLink>
        <NavLink to="/course" className='nav-link'>Course</NavLink>
        <NavLink to="/service" className='nav-link'>Service</NavLink>
      </nav>
    </div>
  )
}
