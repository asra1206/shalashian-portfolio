import { useEffect, useState } from 'react'
import { profile } from '../data.js'

export default function Splash() {
  const [phase, setPhase] = useState('show')
  useEffect(() => {
    const a = setTimeout(() => setPhase('hide'), 900)
    const b = setTimeout(() => setPhase('gone'), 1500)
    return () => { clearTimeout(a); clearTimeout(b) }
  }, [])
  if (phase === 'gone') return null
  return (
    <div className={`splash ${phase}`} aria-hidden="true">
      <div className="splash-mark">{profile.initials}</div>
      <span className="splash-bar" />
    </div>
  )
}
