import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './StaggeredText.css'

function StaggeredText({ text, className = '', delay = 0 }) {
  const textRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!textRef.current) return

    const words = text.split(' ')
    const spans = words.map(word => {
      const span = document.createElement('span')
      span.textContent = word + ' '
      span.className = 'stagger-word'
      return span
    })

    textRef.current.innerHTML = ''
    spans.forEach(span => textRef.current.appendChild(span))

    gsap.fromTo(spans,
      {
        opacity: 0,
        y: 50,
        rotateX: -90
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
        delay: delay,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }, [text, delay])

  return (
    <span ref={textRef} className={`staggered-text ${className}`}>
      {text}
    </span>
  )
}

export default StaggeredText

