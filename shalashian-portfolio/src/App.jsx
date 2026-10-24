import { CursorGlow } from './anim.jsx'
import Splash from './components/Splash.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Focus from './components/Focus.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Splash />
      <div className="bg" aria-hidden="true"><i /><i /><i /></div>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Focus />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
