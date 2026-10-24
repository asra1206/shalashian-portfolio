import { useEffect, useRef, useState } from 'react'
import { Mail, Home, User, Briefcase, GraduationCap } from '../icons.js'
import { profile } from '../data.js'

const links = [['home', 'Home'], ['about', 'About'], ['focus', 'Focus'], ['experience', 'Experience'], ['education', 'Education'], ['contact', 'Contact']]
const tabs = [['home', 'Home', Home], ['about', 'About', User], ['experience', 'Work', Briefcase], ['education', 'Study', GraduationCap], ['contact', 'Contact', Mail]]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const bar = useRef(null)
  const head = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    let raf
    const on = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const h = document.documentElement
        const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)
        if (bar.current) bar.current.style.transform = `scaleX(${Math.min(1, p)})`
        if (head.current) head.current.classList.toggle('scrolled', h.scrollTop > 12)
      })
    }
    window.addEventListener('scroll', on, { passive: true })
    on()
    return () => { window.removeEventListener('scroll', on); cancelAnimationFrame(raf) }
  }, [])

  const cur = active === 'focus' ? 'about' : active
  const idx = Math.max(0, tabs.findIndex(([id]) => id === cur))

  return (
    <>
      <div className="progress" ref={bar} aria-hidden="true" />
      <header className="topnav" ref={head}>
        <div className="wrap topnav-in">
          <a href="#home" className="brand" aria-label={profile.name}>
            <span className="mono">{profile.initials}</span>
            <span className="brand-t"><strong>{profile.first}</strong><small>Tax · Teaching · Leadership</small></span>
          </a>
          <nav className="links" aria-label="Main">
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={active === id ? 'on' : ''}>{label}</a>
            ))}
          </nav>
          <a href="#contact" className="btn btn-grad btn-sm" aria-label="Let’s talk"><Mail size={17} /><span>Let’s talk</span></a>
        </div>
      </header>

      <nav className="dock" aria-label="App navigation">
        <div className="dock-in" style={{ '--i': idx }}>
          <span className="dock-pill" />
          {tabs.map(([id, label, Icon]) => (
            <a key={id} href={`#${id}`} className={cur === id ? 'on' : ''}>
              <Icon />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}
