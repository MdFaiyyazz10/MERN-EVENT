import React from 'react'
import heroImg from '../../public/restaurant.jpg'
import { Link } from 'react-scroll'

const HeroSection = () => {
  return (
    <section className='hero'>

      <img src={heroImg} alt="himg" />

      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Your Personal Dream Maker</h1>
          <p>We believe that it is all about Your Big DREAMS and the Memories</p>
          <Link to='contact' spy={true} smooth={true} duration={500} >
          Book Now
          </Link>
        </div>
      </div>
      
    </section>
  )
}

export default HeroSection
