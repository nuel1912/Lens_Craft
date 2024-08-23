import React from 'react'
import "./About.css"

import lenscraft from "../../assets/lenscraft.jpg"

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={lenscraft} alt='LensCraft Image' className='about-img' />
      </div>
      <div className='about-right'>
        <h3>About LensCraft</h3>
        <h2>Capturing The Beauty of Life's Moments Through The Lens</h2>
        {/* <p>
          At LensCraft, we believe that every moment is worth capturing. Our mission is to tell your story through our lens, preserving memories with the artistry and precision they deserve.
        </p>
        <p>
          To be a leading photography brand known for creating timeless images that speak to the heart and soul.
        </p> */}
        <p>
          LensCraft was born out of a passion for capturing life’s most precious moments with a unique blend of creativity and precision. What began as a humble project by a dedicated photographer quickly grew into a full-fledged brand known for its exceptional ability to turn fleeting moments into lasting memories. Over the years, LensCraft has honed its craft, expanding its expertise from simple portraits to a diverse range of photography services that cater to individuals, families, and businesses alike.
        </p>
        <p>
          Our journey has been one of constant evolution, driven by a commitment to excellence and an unwavering belief in the power of photography to tell stories. We've built a reputation for our meticulous attention to detail, innovative techniques, and the personal touch we bring to every project. Whether it’s a wedding, a corporate event, or a simple family portrait, LensCraft approaches each assignment with the same level of dedication and care.
        </p>
        <p>
          As we look to the future, our vision remains clear: to continue pushing the boundaries of photography, exploring new creative avenues, and delivering unparalleled quality to our clients. We aim to inspire, to capture, and to create memories that last a lifetime—one click at a time.
        </p>
      </div>
    </div>
  )
}

export default About
