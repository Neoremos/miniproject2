import React from 'react'
import AboutCard from '../about/AboutCard'
import ProjectCard from '../projects/ProjectCard'
import ServiceCard from '../services/ServiceCard'
import Hero from './Hero'


const Home = () => {
  return (
    <div>
     <Hero/>
     <AboutCard/>
     <ServiceCard/>
     <ProjectCard/>
    </div>
  )
}

export default Home