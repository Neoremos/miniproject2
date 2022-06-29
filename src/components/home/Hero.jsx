import React from 'react'
import './home.css'
import {BsArrowRightSquare} from 'react-icons/bs'
import Title from './Title'
import { useState } from 'react'




const Hero = () => {
  const [activeNav,setActiveNav]= useState('projects')
  return (
    <>
    
    <section id='#'className="hero">
      <div className="container">
        <div className= " row">
        <Title title={'Welcome to dotDesign'}/>
          <p>Do you want to work on your product with a team that follows a well-defined design process, meets deadlines, and delivers flawless results?. Our design team is a small design studio within a large software company that can help you create an engaging product quickly and easily.</p>
      
        <div className="button">

        <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><button >
            EXPLORE NOW! <i><BsArrowRightSquare/></i>
          </button>
          </a>
          
     
        </div>
        </div>
      </div>
    </section>

    <div className="margin">

    </div>
    
    </>
  )
}

export default Hero