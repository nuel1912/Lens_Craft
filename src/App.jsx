import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Offers from './Components/Offers/Offers'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subtitle='Our Services' title='What We Offer' />
        <Offers />
        <About />
        <Title subtitle='Gallery' title='Popular Gallery Pictures' />
        <Gallery />
        <Title subtitle='Testimonials' title='What Clients Have Said' />
        <Testimonials />
        <Title subtitle='Contact' title='Get In Touch' />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
