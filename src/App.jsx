import React from 'react'
import Snowfall from 'react-snowfall'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import BackToTop from './components/BackToTop/BackToTop'
import Err from './components/Err/Err'

const App = () => {
  return (
    <div>
      <Snowfall
        snowflakeCount={50}
        speed={[0.5, 3]}
        wind={[-0.5, 2]}
        radius={[0.5, 3]}
        color="rgba(255, 255, 255, 0.7)"
      />
      <Err/>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
      <BackToTop/>
    </div>
  )
}

export default App