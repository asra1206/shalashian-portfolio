import { education } from '../data.js'
import { Reveal } from '../anim.jsx'
import * as I from '../icons.js'
import SectionHead from './SectionHead.jsx'

export default function Education() {
  return (
    <section className="section alt" id="education">
      <div className="wrap">
        <SectionHead kicker="Learning" title="Education & qualifications" />
        <Reveal stagger className="edu-grid swipe">
          {education.map((e, i) => {
            const Icon = I[e.icon]
            return (
              <div className="cell" style={{ '--i': i }} key={e.name}>
                <div className="edu glass">
                  <span className="ico"><Icon size={24} /></span>
                  <div>
                    <h3>{e.name}</h3>
                    <p>{e.note}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
