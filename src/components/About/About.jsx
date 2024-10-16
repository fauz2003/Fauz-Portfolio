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
                    I am a Computer Science student  with a strong passion for leveraging programming to solve real-world problems.
                    My interest lies in full-stack development, with a specific focus on MERN stack, where I specialize in constructing responsive and user-friendly web applications.
                    </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>MERN (Web)</p><hr style={{width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React Native</p><hr style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Databases</p><hr style={{width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Python</p><hr style={{width:"35%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Docker</p><hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>AWS</p><hr style={{width:"40%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Git/GitHub</p><hr style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Linux</p><hr style={{width:"50%"}} />
                    </div>
                </div>
            </div>
        </div>
     </div>
  )
}

export default About