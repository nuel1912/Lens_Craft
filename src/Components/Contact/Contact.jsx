import React from 'react'
import "./Contact.css";

import gmail from "../../assets/gmail.png";

import email from "../../assets/email.png"
import phone from "../../assets/phone.png"
import location from "../../assets/location.png"

import arrow_right from "../../assets/arrow-right.png"

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "de78e30a-7a28-451e-a61e-86c80c43c1ba");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
        <form onSubmit={onSubmit}>
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
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
