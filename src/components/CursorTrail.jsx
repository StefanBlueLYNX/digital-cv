import { useEffect, useRef } from 'react'
import './CursorTrail.css'

function CursorTrail() {
  const trailRef = useRef([])

  useEffect(() => {
    const trail = []
    const trailLength = 15

    // Create trail elements
    for (let i = 0; i < trailLength; i++) {
      const dot = document.createElement('div')
      dot.className = 'cursor-trail-dot'
      dot.style.opacity = (trailLength - i) / trailLength * 0.5
      document.body.appendChild(dot)
      trail.push(dot)
    }

    let mouseX = 0
    let mouseY = 0
    let trailX = Array(trailLength).fill(0)
    let trailY = Array(trailLength).fill(0)

    const updateTrail = () => {
      for (let i = trailLength - 1; i >= 0; i--) {
        if (i === 0) {
          trailX[i] = mouseX
          trailY[i] = mouseY
        } else {
          trailX[i] += (trailX[i - 1] - trailX[i]) * 0.3
          trailY[i] += (trailY[i - 1] - trailY[i]) * 0.3
        }

        trail[i].style.left = trailX[i] + 'px'
        trail[i].style.top = trailY[i] + 'px'
      }
      requestAnimationFrame(updateTrail)
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)
    updateTrail()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      trail.forEach(dot => dot.remove())
    }
  }, [])

  return null
}

export default CursorTrail

