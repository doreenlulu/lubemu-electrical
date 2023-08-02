/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/home/doreen/lubemu-electrical/src/assets/logo.jpg'

function Nav() {
  return (
    <>
    <nav className='navbar' >
      <div className='navbar-container'>
      <Link to='/' className='navbar-logo'>
        <img src={logo} />
         LSS <i className='fab fa-codepen' />
      </Link>
      </div>
    </nav>
    </>
  )
}

export default Nav