import { stats } from '../data.js'
import { CountUp, Reveal } from '../anim.jsx'

export default function Stats() {
  return (
    <section className="stats">
      <Reveal stagger className="wrap stat-grid">
        {stats.map((s, i) => (
          <div className="cell" style={{ '--i': i }} key={s.label}>
            <div className="stat glass">
              <strong><CountUp to={s.value} suffix={s.suffix} /></strong>
              <span>{s.label}</span>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
