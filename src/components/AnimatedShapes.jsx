import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './AnimatedShapes.css'

function AnimatedShapes() {
  const containerRef = useRef(null)

  useEffect(() => {
    const shapes = document.querySelectorAll('.animated-shape')
    
    shapes.forEach((shape, index) => {
      // Initial rotation
      const rotation = Math.random() * 360
      gsap.set(shape, { rotation: rotation })

      // Continuous rotation
      gsap.to(shape, {
        rotation: `+=${360 + (Math.random() - 0.5) * 180}`,
        duration: 20 + Math.random() * 20,
        ease: "none",
        repeat: -1
      })

      // Floating movement
      gsap.to(shape, {
        x: `+=${(Math.random() - 0.5) * 200}px`,
        y: `+=${(Math.random() - 0.5) * 200}px`,
        duration: 8 + Math.random() * 8,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.5
      })

      // Opacity pulse
      gsap.to(shape, {
        opacity: 0.3,
        duration: 4 + Math.random() * 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.3
      })
    })
  }, [])

  return (
    <div ref={containerRef} className="animated-shapes-container">
      <div className="animated-shape shape-1"></div>
      <div className="animated-shape shape-2"></div>
      <div className="animated-shape shape-3"></div>
      <div className="animated-shape shape-4"></div>
      <div className="animated-shape shape-5"></div>
      <div className="animated-shape shape-6"></div>
      <div className="animated-shape shape-7"></div>
      <div className="animated-shape shape-8"></div>
    </div>
  )
}

export default AnimatedShapes

