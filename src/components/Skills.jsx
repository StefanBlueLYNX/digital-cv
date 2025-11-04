import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Skills.css'

const skills = [
  { name: 'React', level: 90, icon: '⚛️' },
  { name: 'JavaScript', level: 95, icon: '📜' },
  { name: 'Node.js', level: 85, icon: '🟢' },
  { name: 'TypeScript', level: 80, icon: '📘' },
  { name: 'Python', level: 88, icon: '🐍' },
  { name: 'CSS/SCSS', level: 92, icon: '🎨' },
  { name: 'Git', level: 90, icon: '🔀' },
  { name: 'Docker', level: 75, icon: '🐳' },
  { name: 'AWS', level: 70, icon: '☁️' },
  { name: 'Supabase', level: 100, icon: '🍃' },
]

function Skills() {
  const skillsRef = useRef(null)
  const [hoveredSkill, setHoveredSkill] = useState(null)

  useEffect(() => {
    const skillCards = document.querySelectorAll('.skill-card')
    
    skillCards.forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

  }, [])

  return (
    <section ref={skillsRef} className="skills section">
      <div className="branch-line branch-line-left"></div>
      <div className="branch-node"></div>
      <h2 className="section-title section-title-center">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div 
            key={skill.name} 
            className="skill-item"
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <div className="skill-icon">{skill.icon}</div>
              </div>
              <div className="skill-info">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-level-bar">
                  <div 
                    className="skill-level-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="skill-level-text">{skill.level}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

