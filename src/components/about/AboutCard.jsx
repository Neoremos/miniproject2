import React from 'react'
import Title from '../home/Title'
import aboutbg from '../../img/288665407_560608222236955_5857487041979555298_n.png'
// import { homeAbout } from './aboutDum'

import "./about.css"
const AboutCard = () => {
    const homeAbout  = [
        {
            id:1,
            cover: 'https://img.icons8.com/dotty/80/000000/storytelling.png',
           
            desc:"Avoid the risk of coding faulty user flows and excessive features by validating ideas and potential solutions with little investment of time and money in UX services"
        },
        {
            id:2,
            cover: 'https://img.icons8.com/dotty/80/000000/storytelling.png',
            
            desc:"Meet customer needs with all-encompassing and human-centered UI design services, user experience services, and design research"
        },
        {
            id:3,
            cover: 'https://img.icons8.com/dotty/80/000000/storytelling.png',
           
            desc:"Reach your target audience with an efficient customer satisfaction, loyalty, and retention strategy based on our customer-focused UX design research"
        },
           
    ]
  
  return (

   
    <>
    
    <section id='about'className='abouthome'>
        <div className="container flex">
            <div className="left row">
               <img src={aboutbg} alt="" />
            </div>
            <div className="right row">
                <Title subtitle={'LEARN ANYTHING'} title={'Benefits of UI/UX design you will get '}/>
              
            <div className="items" >
                {homeAbout.map((val)=>(
                    <div key={val.id} className="item flex">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                            <p>{val.desc}</p>
                        </div>
                    </div>
                ))}
                
            </div>
            </div>
        </div>
    </section>'
    
    </>
  )
}

export default AboutCard