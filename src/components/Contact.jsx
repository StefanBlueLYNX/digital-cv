import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { createClient } from '@supabase/supabase-js'
import './Contact.css'

// Initialize Supabase client
// Replace these with your actual Supabase credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'your-supabase-url'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-supabase-key'
const supabase = supabaseUrl.includes('your-supabase') ? null : createClient(supabaseUrl, supabaseKey)

function Contact() {
  const contactRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const branchLine = document.querySelector('.contact-branch-line')
    const content = document.querySelector('.contact-content')

    gsap.fromTo(branchLine,
      { scaleX: 0, transformOrigin: "left" },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    gsap.fromTo(content,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('')

    if (!supabase) {
      setStatus('⚠️ Supabase not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.')
      setIsSubmitting(false)
      return
    }

    try {
      const { error } = await supabase
        .from('messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ])

      if (error) throw error

      setStatus('✅ Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error submitting message:', error)
      setStatus('❌ Error sending message. Please try again.')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setStatus(''), 5000)
    }
  }

  return (
    <section ref={contactRef} className="contact section">
      <div className="contact-branch-line"></div>
      <div className="branch-node"></div>
      <div className="contact-content">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <a href="mailto:your.email@example.com" className="contact-link">
                stefan@bluelynxmarketing.com
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🔗</div>
              <a 
                href="https://github.com/StefanBlueLYNX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                GitHub
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-input form-textarea"
              />
            </div>
            {status && <div className="form-status">{status}</div>}
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      <div className="footer-line"></div>
    </section>
  )
}

export default Contact

