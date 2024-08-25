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

const Gallery = ({setDisplayState1, setDisplayState2, setDisplayState3, setDisplayState4, setDisplayState5, setDisplayState6, setDisplayState7, setDisplayState8}) => {
  return (
    <div className='gallery'>
      <div className='pics'>
        <img src={pic1} onClick={() => {
            setDisplayState1(true);
          }}
        />
        <img src={pic2} onClick={() => {
            setDisplayState2(true);
          }}        
        />
        <img src={pic3} onClick={() => {
            setDisplayState3(true);
          }}
        />
        <img src={pic4} onClick={() => {
            setDisplayState4(true);
          }}
        />
        <img src={pic5} onClick={() => {
            setDisplayState5(true);
          }}
        />
        <img src={pic6} onClick={() => {
            setDisplayState6(true);
          }}
        />
        <img src={pic7} onClick={() => {
            setDisplayState7(true);
          }}
        />
        <img src={pic8} onClick={() => {
            setDisplayState8(true);
          }}
        />
      </div>
      <button className='btn dark-btn'>
        Look through more here
        <img src={arrow_right} alt='Pointer arrow' className='arrow-right' />
      </button>
    </div>
  )
}

export default Gallery
