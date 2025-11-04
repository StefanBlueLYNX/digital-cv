import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import BlueprintBackground from './components/BlueprintBackground'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const mainLineRef = useRef(null)

  useEffect(() => {
    // Animate main vertical line on load
    if (mainLineRef.current) {
      gsap.fromTo(mainLineRef.current, 
        { scaleY: 0, transformOrigin: "top" },
        { 
          scaleY: 1, 
          duration: 2, 
          ease: "power2.out",
          delay: 0.5
        }
      )
    }

    // Animate sections on scroll
    const sections = document.querySelectorAll('.section')
    sections.forEach((section, index) => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })
  }, [])

  return (
    <div className="app">
      <BlueprintBackground />
      <div className="main-container">
        <div className="main-line" ref={mainLineRef}></div>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
