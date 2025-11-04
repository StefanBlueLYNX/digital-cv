import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Projects.css'

const projects = [
  {
    id: 1,
    name: 'AI Powered CalendarApp',
    description: 'An AI-powered calendar management system that automatically generates, previews, and schedules events based on user input. The system provides smart event suggestions in structured JSON format and allows users to instantly create and manage events through an intuitive interface..',
    tech: ['React', 'Node.js', 'Tailwind CSS', 'Stripe', 'Supabase', 'OpenAI', 'AWS Amplify'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    position: 'left'
  },
  {
  
  
    id: 4,
    name: 'AI Chat Widget (Multi-Tenant with GHL Integration)',
    description: 'A customizable AI chat widget designed to be easily embedded into any website and fully integrated with GoHighLevel (GHL). Each client gets a dedicated AI agent trained specifically for their business, enabling personalized and context-aware interactions. The system supports multiple tenants, ensuring isolated data and configurations per client.',
    tech: ['React', 'TailwindCSS', 'Next.js', 'Supabase', 'OpenAI API', 'GoHighLevel'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    position: 'right'
  }
]

function Projects() {
  const projectsRef = useRef(null)
  const [expandedProject, setExpandedProject] = useState(null)

  useEffect(() => {
    const projectNodes = document.querySelectorAll('.project-node')
    
    projectNodes.forEach((node, index) => {
      gsap.fromTo(node,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // Animate branch lines
    const branchLines = document.querySelectorAll('.project-branch-line')
    branchLines.forEach((line, index) => {
      const projectItem = line.closest('.project-item')
      const isLeft = projectItem?.classList.contains('project-left')
      gsap.fromTo(line,
        { scaleX: 0, transformOrigin: isLeft ? 'right' : 'left' },
        {
          scaleX: 1,
          duration: 1,
          delay: index * 0.15 + 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })
  }, [])

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <section ref={projectsRef} className="projects section">
      <div className="branch-line branch-line-projects"></div>
      <div className="branch-node"></div>
      <h2 className="section-title section-title-center">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-item project-${project.position}`}
          >
            <div 
              className="project-branch-line"
              style={{
                width: project.position === 'left' ? '250px' : '150px'
              }}
            ></div>
            <div
              className="project-node"
              onClick={() => toggleProject(project.id)}
            >
              <div className="project-node-glow"></div>
              <h3 className="project-name">{project.name}</h3>
              <div className="project-tech-preview">
                {project.tech.slice(0, 2).map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
                {project.tech.length > 2 && <span className="tech-tag">+{project.tech.length - 2}</span>}
              </div>
            </div>
            {expandedProject === project.id && (
              <div className="project-card">
                <p className="project-description">{project.description}</p>
                <div className="project-tech-full">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag-full">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>GitHub</span>
                    <span>→</span>
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>Live Demo</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

