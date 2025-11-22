import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SkillsExperience from './components/SkillsExperience'
import AboutMe from './components/AboutMe'
import Faqs from './components/Faqs'
import ContactUs from './components/ContactUs'

export default function App() {
  return (
    <div className="w-full overflow-x-hidden bg-black text-white">
      <Navbar />

      {/* Full-width main content */}
      <main className="w-full p-0 m-0">
        <Hero />
        <Projects />
        <SkillsExperience />
        <AboutMe />
        <About />
        <Faqs />
        <ContactUs />
      </main>

      <Footer />
    </div>
  )
}
