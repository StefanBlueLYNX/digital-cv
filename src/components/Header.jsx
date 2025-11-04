import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Header.css'

function Header() {
  const nameRef = useRef(null)
  const taglineRef = useRef(null)
  const headerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    gsap.fromTo(nameRef.current,
      { opacity: 0, y: -30, rotateX: -90 },
      { opacity: 1, y: 0, rotateX: 0, duration: 1.5, delay: 0.3, ease: "power3.out" }
    )

    gsap.fromTo(taglineRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" }
    )

    // Subtle 3D floating animation for name
    gsap.to(nameRef.current, {
      y: "+=5",
      duration: 4,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    })
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
        setMousePosition({ x, y })

        if (nameRef.current) {
          gsap.to(nameRef.current, {
            rotateY: x * 8,
            rotateX: -y * 3,
            duration: 0.6,
            ease: "power2.out"
          })
        }
      }
    }

    const header = headerRef.current
    if (header) {
      header.addEventListener('mousemove', handleMouseMove)
      return () => header.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <header ref={headerRef} className="header section">
      <div className="header-content">
        <div className="name-3d-wrapper">
          <h1 ref={nameRef} className="main-name main-name-3d">
            Stefan guwAPI
          </h1>
        </div>
        <p ref={taglineRef} className="tagline">
          Fullstack Developer / Software Engineer
        </p>
      </div>
      <div className="header-line-node"></div>
    </header>
  )
}

export default Header

