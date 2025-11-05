import './SkillIcon.css'

function SkillIcon({ name }) {
  const iconMap = {
    'React': (
      <svg viewBox="0 0 24 24" className="skill-svg">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(-60 12 12)" />
      </svg>
    ),
    'JavaScript': (
      <svg viewBox="0 0 24 24" className="skill-svg">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 8 8 L 14 8 L 14 10 L 10 10 L 10 12 L 14 12 L 14 14 L 10 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 16 8 L 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    'Node.js': (
      <svg viewBox="0 0 24 24" className="skill-svg">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 7 8 L 12 8 L 12 10 L 9 10 L 9 14 L 12 14 L 12 16 L 7 16 Z" fill="currentColor" />
        <path d="M 13 8 L 17 8 L 17 10 L 15 10 L 15 14 L 17 14 L 17 16 L 13 16 Z" fill="currentColor" />
      </svg>
    ),
    'TypeScript': (
      <svg viewBox="0 0 24 24" className="skill-svg">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 8 8 L 14 8 L 14 10 L 10 10 L 10 14 L 14 14 L 14 16 L 8 16 Z" fill="currentColor" />
        <circle cx="18" cy="18" r="2.5" fill="currentColor" />
      </svg>
    ),
    'Python': (
      <svg viewBox="0 0 24 24" className="skill-svg">
        <path d="M 12 3 C 8 3 6 4 6 7 L 6 10 L 10 10 L 10 11 L 6 11 L 6 17 C 6 20 8 21 12 21 C 16 21 18 20 18 17 L 18 14 L 14 14 L 14 13 L 18 13 L 18 7 C 18 4 16 3 12 3 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="1.2" fill="currentColor" />
        <circle cx="15" cy="17" r="1.2" fill="currentColor" />
      </svg>
    ),
    'CSS/SCSS': (
      <svg viewBox="0 0 24 24" className="skill-svg">
        <path d="M 5 4 L 4 18 L 12 22 L 20 18 L 19 4 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M 7 8 L 17 8 L 16.5 11 L 12 12.5 L 7.5 11 L 7 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 7 13 L 12 14 L 17 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    'Git': (
      <svg viewBox="0 0 24 24" className="skill-svg">
        <path d="M 12 3 C 8 3 6 5 6 9 C 6 11 7 13 9 14 L 9 17 C 9 18 10 19 11 19 C 12 19 13 18 13 17 L 13 14 C 15 13 16 11 16 9 C 16 5 14 3 12 3 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="8" cy="9" r="1.3" fill="currentColor" />
        <circle cx="16" cy="9" r="1.3" fill="currentColor" />
        <circle cx="12" cy="17" r="1.3" fill="currentColor" />
      </svg>
    ),
    'Docker': (
      <svg viewBox="0 0 24 24" className="skill-svg">
        <path d="M 5 9 L 5 15 L 7 15 L 7 13 L 9 13 L 9 11 L 7 11 L 7 9 Z" fill="currentColor" />
        <path d="M 7 9 L 7 11 L 9 11 L 9 9 Z" fill="currentColor" />
        <path d="M 9 11 L 9 13 L 11 13 L 11 11 Z" fill="currentColor" />
        <path d="M 11 9 L 11 11 L 13 11 L 13 9 Z" fill="currentColor" />
        <path d="M 9 9 L 9 7 L 11 7 L 11 9 Z" fill="currentColor" />
        <path d="M 11 11 L 11 13 L 13 13 L 13 11 Z" fill="currentColor" />
        <path d="M 13 9 L 13 11 L 15 11 L 15 9 Z" fill="currentColor" />
        <path d="M 13 11 L 13 13 L 15 13 L 15 11 Z" fill="currentColor" />
        <path d="M 15 9 L 15 11 L 17 11 L 17 9 Z" fill="currentColor" />
        <path d="M 15 11 L 15 13 L 17 13 L 17 11 Z" fill="currentColor" />
        <circle cx="6" cy="6" r="0.8" fill="currentColor" />
      </svg>
    ),
    'AWS': (
      <svg viewBox="0 0 24 24" className="skill-svg">
        <path d="M 5 7 L 8 4 L 19 4 L 19 20 L 5 20 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M 8 4 L 8 20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 11 8 L 15 8 L 15 10 L 11 10 Z" fill="currentColor" />
        <path d="M 11 12 L 17 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 11 14.5 L 17 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    'Supabase': (
      <svg viewBox="0 0 24 24" className="skill-svg">
        <path d="M 12 3 L 3 8 L 3 12 L 12 17 L 21 12 L 21 8 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M 3 12 L 12 17 L 21 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M 12 17 L 12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    'OpenAI API': (
      <svg viewBox="0 0 24 24" className="skill-svg">
        <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 12 5 L 12 8 M 12 16 L 12 19 M 5 12 L 8 12 M 16 12 L 19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 7.07 7.07 L 9.24 9.24 M 14.76 14.76 L 16.93 16.93 M 7.07 16.93 L 9.24 14.76 M 14.76 9.24 L 16.93 7.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  }

  return (
    <div className="skill-icon-container">
      {iconMap[name] || (
        <div className="skill-icon-fallback">{name.charAt(0)}</div>
      )}
    </div>
  )
}

export default SkillIcon

