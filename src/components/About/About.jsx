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
            <div className="about-left">
                <img src={profile_img}/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>
                    I am a Computer Science student pursuing my Bachelor's degree from FAST University, Islamabad, with a strong passion for leveraging programming to solve real-world problems.
                    My interest lies in full-stack development, with a specific focus on MERN stack development, where I specialize in constructing responsive and user-friendly web applications.
                    </p>
                </div>
                <div className="aboutskills">
                    <div className="about-skill">
                        <p>MERN</p><hr style={{width:"48%"}} />
                    </div>
                    <div className="about-skill">
                        <p>.NET</p><hr style={{width:"38%"}} />
                    </div>
                    <div className="about-skill">
                        <p>C/C++</p><hr style={{width:"55%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Java</p><hr style={{width:"35%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Databases</p><hr style={{width:"40%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Git/GitHub</p><hr style={{width:"45%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Linux</p><hr style={{width:"40%"}} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About