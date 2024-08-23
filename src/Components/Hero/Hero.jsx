import React from 'react'
import "./Hero.css"

import arrow_right from "../../assets/arrow-right.png"

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Capturing Your Moments, One Click at a Time</h1>
        <p>LensCraft captures your story, one click at a time, blending artistry with precision to turn moments into timeless masterpieces</p>
        <button className='btn'>
          Explore Our Gallery 
          <img 
            src={arrow_right} 
            alt='Pointer arrow'
            className='arrow-right'
          />
        </button>
      </div>
    </div>
  )
}

export default Hero
