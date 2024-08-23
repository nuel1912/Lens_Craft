import React, { useRef } from 'react'
import "./Testimonials.css"

import prev from "../../assets/arrow-left-light.png";
import next from "../../assets/arrow-right-light.png";

import user1 from "../../assets/user1.jpg"
import user2 from "../../assets/user2.jpg"
import user3 from "../../assets/user3.jpg"
import user4 from "../../assets/user4.jpg"

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideBackward = () => {
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideForward = () => {
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
      <img src={prev} alt='Previous Button' className='prev-btn' onClick={slideBackward} />
      <img src={next} alt='Next Button' className='next-btn' onClick={slideForward} />
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user1} alt='Client 1' />
                <div>
                  <h3>Daniel B.</h3>
                  <span>Corporate Client</span>
                </div>
              </div>
              <p>Professional, creative, and easy to work with. LensCraft delivered outstanding images that truly represent our company’s values.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user2} alt='Client 2' />
                <div>
                  <h3>Precious L.</h3>
                  <span>Retail Brand Owner</span>
                </div>
              </div>
              <p>We hired LensCraft for our product photography, and they exceeded our expectations. The images were crisp, detailed, and exactly what we needed to elevate our brand.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user3} alt='Client 3' />
                <div>
                  <h3>Moyinoluwa O.</h3>
                  <span>Wedding Client</span>
                </div>
              </div>
              <p>LensCraft captured the joy and love of the couples special day perfectly. Every time they look at their photos, they relive those magical moments. They couldn’t be happier with the results!</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user4} alt='Client 4' />
                <div>
                  <h3>Omowunmi A.</h3>
                  <span>Retail Brand Owner</span>
                </div>
              </div>
              <p>We hired LensCraft for our product photography, and they exceeded our expectations. The images were crisp, detailed, and exactly what we needed to elevate our brand.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
