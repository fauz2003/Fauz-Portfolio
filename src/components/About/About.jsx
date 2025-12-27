import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/1718039290714.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
                <img src={theme_pattern}/>
        </div>
        <div className="about-sections">
            <div className="about-right">
                <div className="about-para">
                    <p className='text-shadow'>
                     I am a Full Stack Engineer with hands on experience in designing, developing, and deploying exterprise-level web and mobile applications. With over 2 years of experience in the tech industry, I have honed my skills in various technologies and frameworks, allowing me to create robust and scalable solutions. My passion for coding and problem-solving drives me to continuously learn and adapt to new challenges in the ever-evolving field of software development.
                    </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>MERN (Web)</p><hr className='skill-progress' style={{width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React Native</p><hr className='skill-progress' style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Databases</p><hr className='skill-progress' style={{width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Python</p><hr className='skill-progress' style={{width:"35%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Docker</p><hr className='skill-progress' style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>AWS</p><hr className='skill-progress' style={{width:"40%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Git/GitHub</p><hr className='skill-progress' style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Linux</p><hr className='skill-progress' style={{width:"50%"}} />
                    </div>
                </div>
            </div>
        </div>
     </div>
  )
}

export default About