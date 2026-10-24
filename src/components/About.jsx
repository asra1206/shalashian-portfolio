import { profile } from '../data.js'
import { Reveal } from '../anim.jsx'
import * as I from '../icons.js'
import SectionHead from './SectionHead.jsx'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHead kicker="About" title="A little about me" />
        <div className="about">
          <Reveal>
            {profile.about.map((p) => <p className="body" key={p}>{p}</p>)}
            <blockquote className="quote">
              <span lang="ta">{profile.quote}</span>
              <cite>{profile.quoteEn}</cite>
            </blockquote>
          </Reveal>
          <Reveal delay={150}>
            <dl className="facts glass">
              {profile.facts.map(([k, v, icon]) => {
                const Icon = I[icon]
                return (
                  <div key={k}>
                    <span className="fi"><Icon size={20} /></span>
                    <span><dt>{k}</dt><dd>{v}</dd></span>
                  </div>
                )
              })}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
