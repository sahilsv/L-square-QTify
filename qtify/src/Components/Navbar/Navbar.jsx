import React from 'react'
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import Search from '../Search/Search'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search />
      <Button text = "Give Feedback" />
    </nav>
  )
}

export default Navbar