import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ProfileImg from '../../assets/1717954874136.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={ProfileImg}/>
        <h1><span>I'm Fauz Ahmed,</span> MERN stack developer based in Islamabad</h1>
        <div className='hero-action'>
            <a className='anchor-link' target='blank' href='https://github.com/fauz2003' ><div className="hero-connect">GitHub</div></a>
            <a className='anchor-link' target='blank' href='https://www.linkedin.com/in/fauz-ahmed/' ><div className="hero-resume">Linkedin</div></a>

        </div>
    </div>
  )
}

export default Hero