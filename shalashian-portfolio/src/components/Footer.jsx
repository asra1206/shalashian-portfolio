import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
    </footer>
  )
}
