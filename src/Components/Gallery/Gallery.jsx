import React from 'react'
import "./Gallery.css"

import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import pic4 from "../../assets/pic4.jpg";
import pic5 from "../../assets/pic5.jpg";
import pic6 from "../../assets/pic6.jpg";
import pic7 from "../../assets/pic7.jpg";
import pic8 from "../../assets/pic8.jpg";

import arrow_right from "../../assets/arrow-right.png"

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className='pics'>
        <img src={pic1} />
        <img src={pic2} />
        <img src={pic3} />
        <img src={pic4} />
        <img src={pic5} />
        <img src={pic6} />
        <img src={pic7} />
        <img src={pic8} />
      </div>
      <button className='btn dark-btn'>
        Look through more here
        <img src={arrow_right} alt='Pointer arrow' className='arrow-right' />
      </button>
    </div>
  )
}

export default Gallery
