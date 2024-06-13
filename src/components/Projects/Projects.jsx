import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'


const Projects = () => {
  return (
    <div id='projects' className='projects'>
        <div className="projects-title">
            <h1>My Projects</h1>
            <img src={theme_pattern}/>
        </div>
        <div className="projects-container">
            <a href='https://github.com/fauz2003/HealthHub' target='blank'>
            <div className="projects-format">
                <h3>01</h3>
                <h2>HealthHub</h2>
                <p>
                    - A complete medical web portal with integrated AI medical assistance chatbot.<br/>
                    - Technologies used: HTML/CSS, JavaScript, Node.js and Gemini API
                </p>
                <div className="projects-readmore">
                     <p>Source Code</p>
                    <img src={arrow_icon} />
                </div>
            </div>
            </a>
            <a href='https://github.com/fauz2003/Maidaan' target='blank'>
            <div className="projects-format">
                <h3>02</h3>
                    <h2>Maidaan</h2>
                    <p>
                        - A complete Full stack Football Matchmaking platform.<br/>
                        - Technologies used: JavaFx, Scene Builder, MySQL, Oracle, Microsoft SQL Server
                    </p>
                    <div className="projects-readmore">
                         <p>Source Code</p>
                        <img src={arrow_icon} />
                    </div>
            </div>
            </a>
            <a href='https://github.com/fauz2003/Fauz-Portfolio' target='blank'>
            <div className="projects-format">
                <h3>03</h3>
                    <h2>Personal Portfolio Website</h2>
                    <p>
                    - Developed a fully functional user friendly Portfolio website<br/>
                    - Technologies used: React.js, Git
                    </p>
                    <div className="projects-readmore">
                         <p>Source Code</p>
                        <img src={arrow_icon} />
                    </div>
            </div>
            </a>
            <a href='https://github.com/fauz2003/TimeTable-Scheduling' target='blank'>
            <div className="projects-format">
                <h3>04</h3>
                    <h2>TimeTable Scheduling</h2>
                    <p>
                    - Implemented Genetic Algorithm to schedule a clash-free timetable.
                    <br/>
                    - Technologies used: Python
                    </p>
                    <div className="projects-readmore">
                         <p>Source Code</p>
                        <img src={arrow_icon} />
                    </div>
            </div>
            </a>
            <a href='https://github.com/fauz2003/Neural-Network' target='blank'>
                <div className="projects-format">
                    <h3>05</h3>
                    <h2>Neural Network</h2>
                    <p>
                        - Operating system depicting Nueral-Network architecture on a multicore processor.<br/>
                        - Technologies used: C++, Linux
                    </p>
                    <div className="projects-readmore">
                         <p>Source Code</p>
                        <img src={arrow_icon} />
                    </div>
                </div>
            </a>
            <a href='https://github.com/fauz2003/Kth-Shortest-Path-Problem' target='blank'>
                <div className="projects-format">
                    <h3>06</h3>
                    <h2>Kth Shortest Path Problem</h2>
                    <p>
                        - Used MPI and OpenMP to parallelize the Kth Shortest Path Problem.<br/>
                        - Technologies used: C++, OpenMP, MPI
                    </p>
                    <div className="projects-readmore">
                         <p>Source Code</p>
                        <img src={arrow_icon} />
                    </div>
                </div>
            </a>
           
        </div>
    </div>
  )
}

export default Projects