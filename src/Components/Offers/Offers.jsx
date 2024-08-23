import React from 'react'
import "./Offers.css"

import photography from "../../assets/Photography.jpg";
import editing from "../../assets/Editing.jpg";
import packages from "../../assets/Packages.jpg";
import trainings from "../../assets/Trainings.jpg";

import camera from "../../assets/camera.png";
import sparkles from "../../assets/sparkles.png";
import gift from "../../assets/gift.png";
import book from "../../assets/book.png";

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offer'>
        <img src={photography} />
        <div className='caption'>
          <img src={camera} alt='' />
          <p>Professional Photography Services</p>
        </div>
      </div>
      <div className='offer'>
        <img src={editing} />
        <div className='caption'>
          <img src={sparkles} alt='' />
          <p>Photo Editing & Retouching</p>
        </div>
      </div>
      <div className='offer'>
        <img src={packages} />
        <div className='caption'>
          <img src={gift} alt='' />
          <p>Custom Photography Packages</p>
        </div>
      </div>
      <div className='offer'>
        <img src={trainings} />
        <div className='caption'>
          <img src={book} alt='' />
          <p>Workshops & Tutorials</p>
        </div>
      </div>
    </div>
  )
}

export default Offers
