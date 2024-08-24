import React from 'react'
import "./Contact.css";

import gmail from "../../assets/gmail.png";

import email from "../../assets/email.png"
import phone from "../../assets/phone.png"
import location from "../../assets/location.png"

import arrow_right from "../../assets/arrow-right.png"

const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
  //       publicKey: 'YOUR_PUBLIC_KEY',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>
          Send Us A Message
          <img src={gmail} alt='Envelope' />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional services to our clients.
        </p>
        <ul>
          <li>
            <img src={email} alt='Email icon' />
            akinbolaemmanuel2003@gmail.com
          </li>
          <li>
            <img src={phone} alt='Phone icon' />
            +234 913 913 7560
          </li>
          <li>
            <img src={location} alt='Location icon' />
            No. 7 Sheikh Rabiu Adebayo Street, Fate Tanke,<br/>Ilorin, Kwara State, Nigeria.
          </li>
        </ul>
      </div>
      <div className='contact-col'>
        <form>
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Please enter your name...' required />
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Please enter your mobile number...' required />
          <label>Type in your message here</label>
          <textarea name='message' rows='6' placeholder='Please type in your message...' required></textarea>
          <button className='btn dark-btn'>
            Send Message
            <img src={arrow_right} alt='Pointer arrow' className='arrow-right' />
          </button>
        </form>
        <span></span>
      </div>
    </div>
  )
}

export default Contact
