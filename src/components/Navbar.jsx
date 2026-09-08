import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import GitHubIcon from './GitHubIcon'
import ThemeToggle from './ThemeToggle'

const navItems = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
]

export default function Navbar({ theme, onToggleTheme, resumeUrl, githubUrl }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems.map(([id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.05, 0.2, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className={`navbar-shell ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="site-container navbar-inner">
        <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="brand-mark">YH</span>
          <span className="brand-copy">
            <strong>YANG HUIYAO</strong>
            <small>AI / LLM ENGINEER</small>
          </span>
        </button>

        <nav className="desktop-nav" aria-label="主导航">
          {navItems.map(([id, label]) => (
            <button key={id} className={active === id ? 'active' : ''} onClick={() => jump(id)}>
              {label}
            </button>
          ))}
        </nav>

        <div className="navbar-actions">
          <a className="icon-button github-nav" href={githubUrl} target="_blank" rel="noreferrer" aria-label="打开 GitHub">
            <GitHubIcon size={17} />
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a className="resume-nav" href={resumeUrl} download>
            <Download size={15} />
            Resume
          </a>
          <button className="mobile-menu-button" onClick={() => setOpen((v) => !v)} aria-label="打开菜单">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav site-container">
          {navItems.map(([id, label]) => (
            <button key={id} onClick={() => jump(id)}>{label}</button>
          ))}
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a href={resumeUrl} download>Download Resume</a>
        </div>
      )}
    </header>
  )
}
