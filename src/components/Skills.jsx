import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import StaggeredText from './StaggeredText'
import './Skills.css'

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 95 },
  { name: 'Node.js', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Python', level: 88 },
  { name: 'CSS/SCSS', level: 92 },
  { name: 'Git', level: 90 },
  { name: 'Docker', level: 75 },
  { name: 'AWS', level: 70 },
  { name: 'Supabase', level: 100 },
  { name: 'OpenAI API', level: 95 },
]

function Skills() {
  const skillsRef = useRef(null)
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const skillLevelRefs = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const skillCards = document.querySelectorAll('.skill-card-3d')
    
    skillCards.forEach((card, index) => {
      // Initial entrance animation
      gsap.fromTo(card,
        { opacity: 0, y: 30, rotateX: -90, z: -100 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          z: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Floating animation
      gsap.to(card, {
        y: "+=8",
        duration: 3 + (index % 3) * 0.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.15
      })

      // Mouse interaction for 3D tilt
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
        
        gsap.to(card, {
          rotateY: x * 10,
          rotateX: -y * 5,
          duration: 0.3,
          ease: "power2.out"
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.5,
          ease: "power2.out"
        })
      }

      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)
    })

    // Animate connection lines
    const connectionLines = document.querySelectorAll('.skill-connection-line')
    connectionLines.forEach((line, index) => {
      const skillItem = line.closest('.skill-item')
      const isLeft = skillItem?.classList.contains('skill-left')
      
      gsap.fromTo(line,
        { scaleX: 0, transformOrigin: isLeft ? 'right' : 'left' },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.out",
          delay: index * 0.1 + 0.3,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // Animate connection nodes
    const connectionNodes = document.querySelectorAll('.skill-connection-node')
    connectionNodes.forEach((node, index) => {
      gsap.fromTo(node,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: index * 0.1 + 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // Animate skill level counters
    skillLevelRefs.current.forEach((ref, index) => {
      if (!ref) return
      const skill = skills[index]
      const levelText = ref.querySelector('.skill-level-text')
      const levelFill = ref.querySelector('.skill-level-fill')

      gsap.fromTo({ value: 0 },
        { value: skill.level },
        {
          value: skill.level,
          duration: 2,
          ease: "power2.out",
          delay: index * 0.1 + 0.5,
          scrollTrigger: {
            trigger: ref,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          onUpdate: function() {
            const currentValue = Math.round(this.targets()[0].value)
            if (levelText) {
              levelText.textContent = `${currentValue}%`
            }
            if (levelFill) {
              levelFill.style.width = `${currentValue}%`
            }
          }
        }
      )
    })

  }, [])

  return (
    <section ref={skillsRef} className="skills section skills-section">
      <div className="branch-line branch-line-left"></div>
      <div className="branch-node"></div>
      <h2 className="section-title section-title-center">
        <StaggeredText text="Skills" />
      </h2>
      <div className="skills-grid">
        {skills.map((skill, index) => {
          const isLeft = index % 2 === 0
          return (
            <div 
              key={skill.name} 
              className={`skill-item skill-${isLeft ? 'left' : 'right'}`}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              ref={el => skillLevelRefs.current[index] = el}
            >
              <div className="skill-connection-line"></div>
              <div className="skill-connection-node"></div>
              <div className="skill-card-3d-wrapper">
                <div className="skill-card skill-card-3d">
                <div className="skill-info">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-level-bar">
                    <div 
                      className="skill-level-fill"
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                  <div className="skill-level-text">0%</div>
                </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills

