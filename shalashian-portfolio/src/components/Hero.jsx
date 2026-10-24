import { useState } from 'react'
import { ArrowRight, Mail, Phone, MessageCircle, Linkedin, Facebook, Briefcase, GraduationCap } from '../icons.js'
import { profile, contact, years } from '../data.js'
import { Letters, Typewriter } from '../anim.jsx'

const s = (n) => ({ '--s': n })

function Avatar() {
  const [ok, setOk] = useState(true)
  return (
    <div className="orb">
      <div className="orb-core">
        <span className="mono-xl">{profile.initials}</span>
        {ok && <img src={profile.photo} alt={profile.name} onError={() => setOk(false)} />}
      </div>
      <span className="chip c1"><Briefcase size={16} /> SCBC · Tax Consultant</span>
      <span className="chip c2"><GraduationCap size={16} /> Cathay Academy · Lecturer</span>
      <span className="chip c3"><i className="dot" /> {years}+ years experience</span>
    </div>
  )
}

export default function Hero() {
  const quick = [
    contact.email && [`mailto:${contact.email}`, Mail, 'Email'],
    contact.phone && [`tel:${contact.phone}`, Phone, 'Call'],
    contact.whatsapp && [`https://wa.me/${contact.whatsapp}`, MessageCircle, 'WhatsApp'],
    contact.linkedin && [contact.linkedin, Linkedin, 'LinkedIn'],
    contact.facebook && [contact.facebook, Facebook, 'Facebook'],
  ].filter(Boolean)

  return (
    <section className="hero" id="home">
      <div className="wrap hero-in">
        <div className="hero-copy">
          <p className="eyebrow stg" style={s(0)}>{profile.eyebrow}</p>
          <h1 className="stg" style={s(1)}>Hello, I’m<br /><Letters text={`${profile.first}.`} /></h1>
          <p className="tamil stg" style={s(2)} lang="ta">{profile.nameTamil}</p>
          <h2 className="role stg" style={s(3)}>I’m a <Typewriter words={profile.roles} /></h2>
          <p className="sub stg" style={s(4)}>{profile.summary}</p>
          <div className="actions stg" style={s(5)}>
            <a className="btn btn-grad" href="#experience">My journey <ArrowRight size={18} /></a>
            <a className="btn btn-ghost" href="#contact">Get in touch</a>
          </div>
          <div className="quick stg" style={s(6)}>
            {quick.map(([href, Icon, label]) => (
              <a key={label} href={href} aria-label={label} title={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"><Icon size={20} /></a>
            ))}
          </div>
        </div>
        <div className="hero-art stg" style={s(2)}><Avatar /></div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll down"><span /></a>
    </section>
  )
}
