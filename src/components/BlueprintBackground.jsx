import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function BlueprintBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawGrid()
    }

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.1)'
      ctx.lineWidth = 1

      const gridSize = 50
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw circuit-like connections
      ctx.strokeStyle = 'rgba(179, 0, 255, 0.15)'
      ctx.lineWidth = 2
      
      for (let i = 0; i < 20; i++) {
        const x1 = Math.random() * canvas.width
        const y1 = Math.random() * canvas.height
        const x2 = x1 + (Math.random() - 0.5) * 200
        const y2 = y1 + (Math.random() - 0.5) * 200

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }
    }

    const animate = () => {
      drawGrid()
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Animate grid periodically
    const interval = setInterval(() => {
      drawGrid()
    }, 3000)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      clearInterval(interval)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="blueprint-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  )
}

export default BlueprintBackground

