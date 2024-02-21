import React from 'react'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import Services from './pages/Services'
import Section from './pages/Section'
import Agent from './pages/Agent'
import Footer from './pages/Footer'
import Feature from './pages/Feature'
import Customer from './pages/Customer'
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Feature/>
      <Services/>
      <Customer/>
      <Section/>
      <Agent/>
      <Footer/>
    </>
  )
}

export default App