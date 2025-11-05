import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './TypingEffect.css'

function TypingEffect({ texts, speed = 100, deleteSpeed = 50, delay = 2000 }) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const textRef = useRef(null)

  useEffect(() => {
    const currentText = texts[currentIndex]
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, delay)
      return () => clearTimeout(pauseTimer)
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1))
        } else {
          // Finished typing, pause then delete
          setIsPaused(true)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timer)
  }, [displayText, currentIndex, isDeleting, isPaused, texts, speed, deleteSpeed, delay])

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(textRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      )
    }
  }, [displayText])

  return (
    <span className="typing-effect">
      <span ref={textRef} className="typing-text">{displayText}</span>
      <span className="typing-cursor">|</span>
    </span>
  )
}

export default TypingEffect

