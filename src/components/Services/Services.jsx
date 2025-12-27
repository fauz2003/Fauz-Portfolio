import React, { useState, useEffect } from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'

const Services = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services')
      if (!servicesSection) return

      const sectionTop = servicesSection.getBoundingClientRect().top + 300
      const sectionBottom = servicesSection.getBoundingClientRect().bottom
      const windowHeight = window.innerHeight
      const sectionHeight = servicesSection.offsetHeight

      // When section is completely above viewport
      if (sectionBottom < 0) {
        setScrollProgress(100)
        return
      }

      // When section is completely below viewport
      if (sectionTop > windowHeight) {
        setScrollProgress(0)
        return
      }

      // Progress based on how much of the section has passed the top of the viewport
      // When sectionTop equals windowHeight, progress = 0
      // When sectionTop equals -sectionHeight, progress = 100

      let progress = (((windowHeight - sectionTop) / (windowHeight + sectionHeight - 1000)) * 100)
      progress = Math.max(0, Math.min(100, progress))

      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="services-wrapper">
        <div className="services-line" style={{ '--progress': `${scrollProgress}%` }}></div>
        
        <div className="services-container">
          {Services_Data.map((service, index) => (
            <div 
              key={service.s_no} 
              className={`service-item ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ '--item-index': index }}
            >
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.s_name}</h3>
                <p>{service.s_desc}</p>
                <div className="service-number">{service.s_no}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
