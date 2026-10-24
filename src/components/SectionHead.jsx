import { Reveal } from '../anim.jsx'

export default function SectionHead({ kicker, title }) {
  return (
    <Reveal className="head">
      <span className="kicker">{kicker}</span>
      <h2 className="title">{title}</h2>
    </Reveal>
  )
}
