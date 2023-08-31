/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/home/doreen/lubemu-electrical/src/assets/logo.jpg'
import './Nav.css'

function Nav() {
  return (
    <>
    <nav className='navbar' >
      <div className='navbar-container'>
      <Link to='/'><img src={logo} className='navbar-logo'/>Lubemu Electrical Company </Link>
      <Link to ='/' className='nav-links' >Home</Link>
      <Link to ='/about' className='nav-links' >About</Link>
      <Link to ='/services' className='nav-links' >Services</Link>
      <Link to ='/faq' className='nav-links' >FAQ</Link>
      <Link to ='/blog' className='nav-links' >Blog</Link>
      <Link to ='/contact' className='nav-links' >Contact</Link>
      </div>
    </nav>
    </>
  )
}

export default Nav