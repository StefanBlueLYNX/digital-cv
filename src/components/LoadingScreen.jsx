import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import './LoadingScreen.css'

function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false)
        onComplete()
      }
    })

    // Animate loading text
    tl.to('.loading-text', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    })
    .to('.loading-bar-fill', {
      width: '100%',
      duration: 1.5,
      ease: 'power2.inOut'
    }, '-=0.5')
    .to('.loading-text', {
      opacity: 0,
      y: -20,
      duration: 0.5
    })
    .to('.loading-screen', {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.in'
    })
    .set('.loading-screen', { display: 'none' })
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="logo-circle"></div>
          <div className="logo-pulse"></div>
        </div>
        <h1 className="loading-text">Stefan guwAPI</h1>
        <div className="loading-bar">
          <div className="loading-bar-fill"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen

