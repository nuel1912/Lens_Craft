import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Offers from './Components/Offers/Offers'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import GallerySlider from './Components/GallerySlider/GallerySlider'

const App = () => {
  const [displayState1, setDisplayState1] = useState(false);
  const [displayState2, setDisplayState2] = useState(false);
  const [displayState3, setDisplayState3] = useState(false);
  const [displayState4, setDisplayState4] = useState(false);
  const [displayState5, setDisplayState5] = useState(false);
  const [displayState6, setDisplayState6] = useState(false);
  const [displayState7, setDisplayState7] = useState(false);
  const [displayState8, setDisplayState8] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subtitle='Our Services' title='What We Offer' />
        <Offers />
        <About />
        <Title subtitle='Gallery' title='Popular Gallery Pictures' />
        <Gallery
          setDisplayState1={setDisplayState1}
          setDisplayState2={setDisplayState2}
          setDisplayState3={setDisplayState3}
          setDisplayState4={setDisplayState4}
          setDisplayState5={setDisplayState5}
          setDisplayState6={setDisplayState6}
          setDisplayState7={setDisplayState7}
          setDisplayState8={setDisplayState8}
        />
        <Title subtitle='Testimonials' title='What Clients Have Said' />
        <Testimonials />
        <Title subtitle='Contact' title='Get In Touch' />
        <Contact />
        <Footer />
      </div>
      <GallerySlider
        displayState1={displayState1} setDisplayState1={setDisplayState1}
        displayState2={displayState2} setDisplayState2={setDisplayState2}
        displayState3={displayState3} setDisplayState3={setDisplayState3}
        displayState4={displayState4} setDisplayState4={setDisplayState4}
        displayState5={displayState5} setDisplayState5={setDisplayState5}
        displayState6={displayState6} setDisplayState6={setDisplayState6}
        displayState7={displayState7} setDisplayState7={setDisplayState7}
        displayState8={displayState8} setDisplayState8={setDisplayState8}
      />
    </div>
  )
}

export default App
