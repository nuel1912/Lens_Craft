import React, { useRef } from 'react';
import "./GallerySlider.css"

import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import pic4 from "../../assets/pic4.jpg";
import pic5 from "../../assets/pic5.jpg";
import pic6 from "../../assets/pic6.jpg";
import pic7 from "../../assets/pic7.jpg";
import pic8 from "../../assets/pic8.jpg";

const GallerySlider = ({displayState1, setDisplayState1, displayState2, setDisplayState2, displayState3, setDisplayState3, displayState4, setDisplayState4, displayState5, setDisplayState5, displayState6, setDisplayState6, displayState7, setDisplayState7, displayState8, setDisplayState8}) => {
  const display = useRef(null);
  const display2 = useRef(null);
  const display3 = useRef(null);
  const display4 = useRef(null);
  const display5 = useRef(null);
  const display6 = useRef(null);
  const display7 = useRef(null);
  const display8 = useRef(null);

  const closeDisplay = (e) => {
    if(e.target === display.current){
      setDisplayState1(false);
      // setDisplayState2(false);
    }
  }

  const closeDisplay2 = (e) => {
    if(e.target === display2.current){
      // setDisplayState1(false);
      setDisplayState2(false);
    }
  }

  const closeDisplay3 = (e) => {
    if(e.target === display3.current){
      // setDisplayState1(false);
      setDisplayState3(false);
    }
  }

  const closeDisplay4 = (e) => {
    if(e.target === display4.current){
      // setDisplayState1(false);
      setDisplayState4(false);
    }
  }

  const closeDisplay5 = (e) => {
    if(e.target === display5.current){
      // setDisplayState1(false);
      setDisplayState5(false);
    }
  }

  const closeDisplay6 = (e) => {
    if(e.target === display6.current){
      // setDisplayState1(false);
      setDisplayState6(false);
    }
  }

  const closeDisplay7 = (e) => {
    if(e.target === display7.current){
      // setDisplayState1(false);
      setDisplayState7(false);
    }
  }

  const closeDisplay8 = (e) => {
    if(e.target === display8.current){
      // setDisplayState1(false);
      setDisplayState8(false);
    }
  }

  return (
    <div>
      <div className={`gallery-slider ${displayState1 ? '' : 'hide'}`} ref={display} onClick={closeDisplay}>
        <img src={pic1} alt='' />
        <h3>A Wedding Highlight</h3>
      </div>
      <div className={`gallery-slider ${displayState2 ? '' : 'hide'}`} ref={display2} onClick={closeDisplay2}>
        <img src={pic2} alt='' />
        <h3>Breathtaking Landscapes</h3>
      </div>
      <div className={`gallery-slider ${displayState3 ? '' : 'hide'}`} ref={display3} onClick={closeDisplay3}>
        <img src={pic3} alt='' />
        <h3>Creative Artistry Shot</h3>
      </div>
      <div className={`gallery-slider ${displayState4 ? '' : 'hide'}`} ref={display4} onClick={closeDisplay4}>
        <img src={pic4} alt='' />
        <h3>Monochromic Shot of a Woman</h3>
      </div>
      <div className={`gallery-slider ${displayState5 ? '' : 'hide'}`} ref={display5} onClick={closeDisplay5}>
        <img src={pic5} alt='' />
        <h3>Product Shot</h3>
      </div>
      <div className={`gallery-slider ${displayState6 ? '' : 'hide'}`} ref={display6} onClick={closeDisplay6}>
        <img src={pic6} alt='' />
        <h3>Artistic Black and WHite</h3>
      </div>
      <div className={`gallery-slider ${displayState7 ? '' : 'hide'}`} ref={display7} onClick={closeDisplay7}>
        <img src={pic7} alt='' />
        <h3>Scenic Landscape</h3>
      </div>
      <div className={`gallery-slider ${displayState8 ? '' : 'hide'}`} ref={display8} onClick={closeDisplay8}>
        <img src={pic8} alt='' />
        <h3>Work Space Shot</h3>
      </div>
    </div>
  )
}

export default GallerySlider
