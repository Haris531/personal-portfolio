import React from 'react'
import HeroSection from '../components/HeroSection'
import Service from '../components/Service'
import Contact from '../components/Contact'
import { About } from '../components/About'
import Footer from '../components/Footer'
import MainHero from '../components/MainHero'
import SkillSection from '../components/SkillSection'
import { AboutMe } from '../components/AboutMe'
import { Testemonials } from '../components/Testemonials'
import ProjectSection from '../components/ProjectSection'
import Achievements from '../components/Achievements'


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
      <Testemonials />
      <Contact />



    </div>
  )
}



