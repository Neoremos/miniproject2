import React from 'react'
import Title from '../home/Title'
import './project.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation,Autoplay} from 'swiper'
import proj1 from '../../img/proj1.jpg'
import proj2 from '../../img/proj2.png'
import proj3 from '../../img/proj3.png'
import proj4 from '../../img/proj4.png'
import proj5 from '../../img/one.png'
import proj6 from '../../img/two.png'
import proj7 from '../../img/three.png'
import proj8 from '../../img/four.png'
import proj9 from '../../img/animemizu.png'
// import { online } from './project'
import 'swiper/css';

SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);


const ProjectCard = () => {

  

 const online =[
    {
        id:1,
        cover:proj1,
        demo: 'https://dribbble.com/shots/18502880-Furballs-Corner'
      },
      {
        id:2,
        cover: proj2,
        demo: 'https://dribbble.com/shots/18503201-Animerch-ecommerce'
      },
      {
        id:3,
        cover:proj3,
        demo: 'https://dribbble.com/shots/18503280-Onepiece-Tour'
      },
      {
        id:4,
        cover: proj4,
        demo: 'https://dribbble.com/shots/18503300-KLC-HOMES'
      },

      {
        id:5,
        cover:proj5,
        demo: 'https://dribbble.com/shots/18563195-Fitness-E-Magazine'
      },
      {
        id:6,
        cover:proj6,
        demo: 'https://dribbble.com/shots/18563220-E-calculator'
      },
      {
        id:7,
        cover:proj7,
        demo:'https://dribbble.com/shots/18563249-Patient-Registration-Portal'
      },
      {
        id:8,
        cover:proj8,
        demo:'https://dribbble.com/shots/18563266-My-Coding-Journal'
      },
      {
        id:9,
        cover:proj9,
        demo:'https://dribbble.com/shots/18570756-AnimeMizu'
      },
     
      
]
    
  return (
    <div>
      
       <section id='projects'>
      <div className="container">
      <Title subtitle={'Projects'} title={'Some of our recents works '}/>
      <div className="projects_allitems">
      <Swiper
        autoplay={{ delay: 1000 }} 
        spaceBetween={30}
        slidesPerView={2}
        navigation
        breakpoints={
          {

            480:{
              slidesPerView:1,
            },
            600:{
                slidesPerView:1,
            },
            1024:{
              slidesPerView:2,

            },

           
          }
        }
      
      >
        {/* {online.map((val,index)=>{
          if(index >= 10) return;
          return(
            <SwiperSlide key={val.id}>
            <Link to="/projects" className='projectItem_img'>
            <img src={val.cover} alt="" />
            </Link>
            </SwiperSlide>
          )
        })} */}

        {online.map((val,index,demo)=>{   
          if(index >= 10) return;
          return(
            <SwiperSlide key={val.id}>
             <div className="projectItem_img">
              <img src={val.cover}alt="" />
             </div>
             <a href={val.demo} rel="noopener noreferrer" target='_blank'><button className='proj-btn'>View Demo</button></a>
            </SwiperSlide>  
          )
        })}



      
      </Swiper>
      </div>
      </div>
     
    </section> 
    </div>
    
  )
}

export default ProjectCard