import { useEffect, useRef, useState } from 'react'

const hasIO = () => typeof window !== 'undefined' && 'IntersectionObserver' in window
const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches

/* Fade/slide in when scrolled into view. Use `stagger` for a grid whose
   children (with style --i) should appear one after another. */
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div', stagger = false, ...rest }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !hasIO()) { setOn(true); return }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const base = stagger ? 'stagger' : 'reveal'
  return (
    <Tag ref={ref} className={`${base}${on ? ' in' : ''} ${className}`} style={{ '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

/* Number that counts up when visible */
export function CountUp({ to, suffix = '' }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    let raf
    const el = ref.current
    const run = () => {
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / 1400)
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    if (!el || !hasIO()) { setN(to); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { run(); io.disconnect() } }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [to])
  return <span ref={ref}>{n}{suffix}</span>
}

/* Name that flies in letter by letter */
export function Letters({ text }) {
  let offset = 0
  return (
    <span className="letters" aria-label={text} style={{ '--len': text.length }}>
      {text.split(' ').map((word, w) => {
        const start = offset
        offset += word.length + 1
        return (
          <span key={w}>
            {w > 0 && ' '}
            <span className="word" aria-hidden="true">
              {[...word].map((ch, i) => <span key={i} style={{ '--n': start + i }}>{ch}</span>)}
            </span>
          </span>
        )
      })}
    </span>
  )
}

/* Rotating typed roles */
export function Typewriter({ words }) {
  const [i, setI] = useState(0)
  const [txt, setTxt] = useState('')
  const [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[i % words.length]
    let t
    if (!del && txt === w) t = setTimeout(() => setDel(true), 1700)
    else if (del && txt === '') { setDel(false); setI((v) => v + 1) }
    else t = setTimeout(() => setTxt(del ? w.slice(0, txt.length - 1) : w.slice(0, txt.length + 1)), del ? 35 : 85)
    return () => clearTimeout(t)
  }, [txt, del, i, words])
  return <span className="typed">{txt}<i className="caret" /></span>
}

/* 3D tilt + spotlight on desktop. Does nothing on touch screens. */
export function Tilt({ children, className = '', max = 7, ...rest }) {
  const ref = useRef(null)
  const move = (e) => {
    if (!finePointer()) return
    const el = ref.current
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty('--ry', `${(x - 0.5) * max * 2}deg`)
    el.style.setProperty('--rx', `${-(y - 0.5) * max * 2}deg`)
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
  }
  const leave = () => {
    const el = ref.current
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }
  return (
    <div ref={ref} className={`tilt ${className}`} onMouseMove={move} onMouseLeave={leave} {...rest}>
      {children}
    </div>
  )
}

/* Soft light that follows the mouse (desktop only) */
export function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    if (!finePointer()) return
    let raf
    const on = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (ref.current) ref.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`
      })
    }
    window.addEventListener('pointermove', on, { passive: true })
    return () => { window.removeEventListener('pointermove', on); cancelAnimationFrame(raf) }
  }, [])
  return <div ref={ref} className="glow" aria-hidden="true" />
}
