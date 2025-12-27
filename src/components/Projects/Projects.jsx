import React, { useState } from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0)

  const projectsData = [
    {
      id: '01',
      name: 'FitFlex',
      desc: 'AI powered workout assistant',
      tech: 'React Native, Node JS, MongoDB, Express JS, MediaPipe, Python',
      link: ''
    },
    {
      id: '02',
      name: 'GoalSetter',
      desc: 'A classic goal setting application.',
      tech: 'React JS, Node JS, MongoDB, Express JS, JWT',
      link: 'https://github.com/fauz2003/Goal-Setter'
    },
    {
      id: '03',
      name: 'HealthHub',
      desc: 'A comprehensive medical web portal with integrated AI medical assistance chatbot.',
      tech: 'HTML/CSS, JavaScript, Node.js and Gemini API',
      link: 'https://github.com/fauz2003/HealthHub'
    },
    {
      id: '04',
      name: 'Maidaan',
      desc: 'A Full stack Football Matchmaking platform.',
      tech: 'JavaFx, Scene Builder, MySQL, Oracle, Microsoft SQL Server',
      link: 'https://github.com/fauz2003/Maidaan'
    },
    {
      id: '05',
      name: 'Personal Portfolio Website',
      desc: 'Fully functional user friendly Portfolio website',
      tech: 'React.js, Git',
      link: 'https://github.com/fauz2003/Fauz-Portfolio'
    },
    {
      id: '06',
      name: 'TimeTable Scheduling',
      desc: 'Implementation of Genetic Algorithm to schedule a clash-free timetable.',
      tech: 'Python',
      link: 'https://github.com/fauz2003/TimeTable-Scheduling'
    },
    {
      id: '07',
      name: 'Neural Network',
      desc: 'Operating system depicting Nueral-Network architecture on a multicore processor.',
      tech: 'C++, Linux',
      link: 'https://github.com/fauz2003/Neural-Network'
    }
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1))
  }

  const getPrevIndex = () => (currentProject === 0 ? projectsData.length - 1 : currentProject - 1)
  const getNextIndex = () => (currentProject === projectsData.length - 1 ? 0 : currentProject + 1)

  const prevData = projectsData[getPrevIndex()]
  const currentData = projectsData[currentProject]
  const nextData = projectsData[getNextIndex()]

  const renderCard = (data, position) => (
    <a href={data.link} target='blank' rel="noreferrer" className={`card-link ${position}`}>
      <div className={`projects-format ${position}`}>
        <h3>{data.id}</h3>
        <h2>{data.name}</h2>
        <p>
          - {data.desc}<br/>
          - <b>Technologies used:</b> {data.tech}
        </p>
        <div className="projects-readmore">
          <p>Source Code</p>
          <img src={arrow_icon} alt="arrow" />
        </div>
      </div>
    </a>
  )

  return (
    <div id='projects' className='projects'>
      <div className="projects-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="projects-carousel-wrapper">
        <button className="carousel-arrow prev-arrow" onClick={prevProject} aria-label="Previous project">
          <img src={arrow_icon} alt="Previous" />
        </button>

        <div className="projects-carousel-container">
          {renderCard(prevData, 'prev')}
          {renderCard(currentData, 'current')}
          {renderCard(nextData, 'next')}
        </div>

        <button className="carousel-arrow next-arrow" onClick={nextProject} aria-label="Next project">
          <img src={arrow_icon} alt="Next" />
        </button>
      </div>

      <div className="project-counter">
        {currentProject + 1} / {projectsData.length}
      </div>

      <div className="carousel-dots">
        {projectsData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentProject ? 'active' : ''}`}
            onClick={() => setCurrentProject(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects