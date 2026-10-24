import { useState } from 'react'
import { Mail, Phone, MessageCircle, Linkedin, Facebook, MapPin } from '../icons.js'
import { profile, contact } from '../data.js'
import { Reveal } from '../anim.jsx'
import SectionHead from './SectionHead.jsx'

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', msg: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const send = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${f.name} (portfolio website)`)
    const body = encodeURIComponent(`${f.msg}\n\n${f.name}\n${f.email}`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  const rows = [
    contact.email && [`mailto:${contact.email}`, Mail, contact.email],
    contact.phone && [`tel:${contact.phone}`, Phone, contact.phone],
    contact.whatsapp && [`https://wa.me/${contact.whatsapp}`, MessageCircle, 'Chat on WhatsApp'],
    contact.linkedin && [contact.linkedin, Linkedin, 'LinkedIn'],
    contact.facebook && [contact.facebook, Facebook, 'Facebook'],
  ].filter(Boolean)

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <SectionHead kicker="Contact" title="Let’s work together" />
        <div className="contact-in">
          <Reveal>
            <p className="body">Have a question about tax, accounting or training? Send a message and I will get back to you as soon as I can.</p>
            {rows.map(([href, Icon, label]) => (
              <a className="direct" key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                <Icon size={20} /> {label}
              </a>
            ))}
            <p className="direct"><MapPin size={20} /> {profile.location}</p>
          </Reveal>
          <Reveal delay={150}>
            <form className="form glass" onSubmit={send}>
              <label>Your name<input required value={f.name} onChange={set('name')} autoComplete="name" /></label>
              <label>Your email<input required type="email" value={f.email} onChange={set('email')} autoComplete="email" /></label>
              <label>Message<textarea required rows="4" value={f.msg} onChange={set('msg')} /></label>
              <button className="btn btn-grad" type="submit"><Mail size={18} /> Send message</button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
