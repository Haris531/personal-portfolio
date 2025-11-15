import React from 'react'
import HeroSection from '../components/HeroSection'
import Service from '../components/Service'
import Contact from '../components/Contact'
import { About } from '../components/About'
import Footer from '../components/Footer'
import MainHero from '../components/MainHero'
import SkillSection from '../components/SkillSection'
import { AboutMe } from '../components/AboutMe'
import ProjectSection from '../components/ProjectSection'
import Achievements from '../components/Achievements'
import { Testimonials } from '../components/Testimonials'


export default function HomePage() {
  return (
    <div>
      {/* <HeroSection />
       <About />
       <Service /> */}
      <MainHero />
      <AboutMe />
      <SkillSection />
      <ProjectSection />
      <Achievements />
      <Testimonials />
      <Contact />

    </div>
  )
}



