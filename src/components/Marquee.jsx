import { marquee } from '../data.js'

export default function Marquee() {
  const items = [...marquee, ...marquee, ...marquee, ...marquee]
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee">
        <div className="marquee-track">
          {items.map((t, i) => <span key={i}>{t}<i /></span>)}
        </div>
      </div>
    </div>
  )
}
