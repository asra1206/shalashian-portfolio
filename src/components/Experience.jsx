import { experience } from '../data.js'
import { Reveal } from '../anim.jsx'
import SectionHead from './SectionHead.jsx'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <SectionHead kicker="Career" title="My journey so far" />
        <ol className="tl">
          {experience.map((e, i) => (
            <Reveal as="li" className="tl-item" delay={i * 110} key={e.org}>
              <span className="dotmark" />
              <div className="tl-card glass">
                <div className="tl-top">
                  <span className="when">{e.when}</span>
                  {e.current && <span className="live">Present</span>}
                </div>
                <h3>{e.role}</h3>
                <p className="org">{e.org}</p>
                <p>{e.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
