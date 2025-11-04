import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './About.css'

function About() {
  const aboutRef = useRef(null)
  const branchLineRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const branchLineLeft = branchLineRef.current
    const branchLineRight = document.querySelector('.branch-line-right')
    const content = contentRef.current
    const contentRight = document.querySelector('.about-content-right')

    // Animate left branch line
    gsap.fromTo(branchLineLeft,
      { scaleX: 0, transformOrigin: "right" },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animate right branch line
    if (branchLineRight) {
      gsap.fromTo(branchLineRight,
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 0.3,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Animate left content
    gsap.fromTo(content,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animate right content
    if (contentRight) {
      gsap.fromTo(contentRight,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }, [])

  return (
    <section ref={aboutRef} className="about section">
      <div className="branch-line branch-line-left" ref={branchLineRef}></div>
      <div className="branch-line branch-line-right"></div>
      <div className="about-container">
        <div ref={contentRef} className="about-content about-content-left">
          <h2 className="section-title">About Me</h2>
          <div className="about-text-container">
            <p className="about-text">
              Passionate software developer with expertise in full-stack development, 
              creating innovative solutions and elegant code. Specialized in modern web 
              technologies and building scalable applications that make a difference.
              I’m looking for projects and collaborations where I can bring real value through fast development, innovation, and full technical ownership
            </p>
            <div className="profile-placeholder">
              <div className="avatar-glow"></div>
            </div>
          </div>
        </div>
        <div className="about-content about-content-right">
          <h2 className="section-title">Despre Mine</h2>
          <div className="about-text-container">
            <p className="about-text">
            Sunt un dezvoltator full-stack pasionat de inteligență artificială și automatizare, cu o abordare practică și orientată spre rezultate. Am început dintr-un rol non-tehnic și, prin autoeducație și experiență directă, am evoluat rapid către dezvoltarea completă de aplicații web integrate cu AI.
Îmi place să transform ideile în produse reale, stabile și ușor de folosit. Sunt motivat de învățare continuă, de optimizare și de impactul concret pe care tehnologia îl poate avea în activitatea unei echipe sau a unei companii.
Caut în continuare proiecte și colaborări unde pot aduce valoare reală prin dezvoltare rapidă, inovație și responsabilitate tehnică completă.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

