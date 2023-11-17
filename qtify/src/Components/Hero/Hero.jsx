import React from 'react'
import './hero.css';
import hero from '../../Assets/hero.png'

function Hero() {
  return (
    <div className='hero'>
        <img src={hero} alt="Hero img not available" />
    </div>
  )
}

export default Hero