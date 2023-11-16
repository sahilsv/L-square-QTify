import React from 'react'
import './navbar.css'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import Search from '../Search/Search'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a href="/">
        <Logo />
      </a>
      <Search />
      <Button text = "Give Feedback" />
    </nav>
  )
}

export default Navbar