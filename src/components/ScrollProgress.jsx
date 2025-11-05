import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ScrollProgress.css'

function ScrollProgress() {
  const progressRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(progressRef.current, {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    })
  }, [])

  return (
    <div className="scroll-progress-container">
      <div 
        ref={progressRef}
        className="scroll-progress-bar"
      ></div>
      <div className="scroll-progress-glow"></div>
    </div>
  )
}

export default ScrollProgress

