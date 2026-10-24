import { focus } from '../data.js'
import { Reveal, Tilt } from '../anim.jsx'
import * as I from '../icons.js'
import SectionHead from './SectionHead.jsx'

export default function Focus() {
  return (
    <section className="section alt" id="focus">
      <div className="wrap">
        <SectionHead kicker="What I do" title="Areas of focus" />
        <Reveal stagger className="focus-grid swipe">
          {focus.map((f, i) => {
            const Icon = I[f.icon]
            return (
              <div className="cell" style={{ '--i': i }} key={f.title}>
                <Tilt className="card glass">
                  <span className="num">0{i + 1}</span>
                  <span className="ico"><Icon size={26} /></span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </Tilt>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
