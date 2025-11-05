import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './NavigationDots.css'

const sections = ['header-section', 'about-section', 'skills-section', 'projects-section', 'contact-section']

function NavigationDots() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: `.${section}`,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => setActiveSection(index),
        onEnterBack: () => setActiveSection(index)
      })
    })
  }, [])

  const scrollToSection = (index) => {
    const section = document.querySelector(`.${sections[index]}`)
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="navigation-dots">
      {sections.map((section, index) => (
        <button
          key={section}
          className={`nav-dot ${activeSection === index ? 'active' : ''}`}
          onClick={() => scrollToSection(index)}
          aria-label={`Scroll to ${section}`}
        >
          <span className="nav-dot-inner"></span>
        </button>
      ))}
    </div>
  )
}

export default NavigationDots

