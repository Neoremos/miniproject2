import React from 'react'
// import { team } from './teams'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import t1 from '../../img/jessica.jpg'
import t2 from '../../img/riyuuu.jpg'
import t3 from '../../img/neo.jpg'

// import Title from '../home/Title'
import "./Team.css"
const TeamCard = () => {
  
 const team=[
  {
    id:1,
  cover:t1,
  name: "Jessica Gutierrez",
  work: "WEB DEVELOPER AND CEO OF THE COMPANY",
  port:'https://my-portfolio-gy4dpoy7c-jessy-g26.vercel.app/'
  },
  {
    id:2,
      cover:t3,
      name: "Neo Cimafranca Jamorabon",
      work: "WEB DEVELOPER ",
      port:'https://neoremos.github.io/e-portfolio/portfolio.html'
   },
   {
    id:3,
      cover:t2,
      name: "Reuel Mendoza",
      work: "WEB DEVELOPER",
      port:'https://mendoza-mendoza2929.vercel.app/'
   },
  

]
  return (
    <>
  {team.map((val)=>(
    
    <div id='teams' key={val.id}className="items shadow">
        <div className="img">
            <img src={val.cover} alt="" />
            <div  className="overlay">
                    <AiFillFacebook className='icon'/>
                    <AiOutlineInstagram className='icon'/>
                    <AiOutlineTwitter className='icon'/>
                    <AiOutlineGithub className='icon'/>
            </div>
         </div>
         <div className="details">
                <h2>{val.name}</h2>
                <p>{val.work}</p>
                <a href={val.port}  rel="noopener noreferrer" target='_blank'><button className='t-btn'>View Portfolio</button></a>
            </div>
    </div>
  ))}
    </>
  )
}

export default TeamCard