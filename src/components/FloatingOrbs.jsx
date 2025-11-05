import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './FloatingOrbs.css'

function FloatingOrbs() {
  const containerRef = useRef(null)

  useEffect(() => {
    const orbs = document.querySelectorAll('.floating-orb')
    
    orbs.forEach((orb, index) => {
      // Random starting position
      const startX = Math.random() * 100
      const startY = Math.random() * 100
      
      gsap.set(orb, {
        x: `${startX}%`,
        y: `${startY}%`
      })

      // Continuous floating animation
      gsap.to(orb, {
        x: `+=${(Math.random() - 0.5) * 30}%`,
        y: `+=${(Math.random() - 0.5) * 30}%`,
        duration: 10 + Math.random() * 10,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.5
      })

      // Pulsing glow effect
      gsap.to(orb, {
        scale: 1.2,
        opacity: 0.8,
        duration: 3 + Math.random() * 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.3
      })
    })
  }, [])

  return (
    <div ref={containerRef} className="floating-orbs-container">
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
      <div className="floating-orb orb-4"></div>
      <div className="floating-orb orb-5"></div>
      <div className="floating-orb orb-6"></div>
    </div>
  )
}

export default FloatingOrbs

