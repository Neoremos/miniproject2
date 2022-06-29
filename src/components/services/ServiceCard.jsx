import React from 'react'
// import { serviceCard } from './serviceDum'
import service1 from '../../img/s1.webp'
import service2 from '../../img/jessica.jpg'
import './service.css'
import Title from '../home/Title'


const ServiceCard = () => {
   const  serviceCard =[
        {
            id:1,
            serviceName:"Mobile design Services ",
            serviceTeam:[
                {
                    name:"By Jessica Gutierrez",
                    servicePosition:"Web Developer",
                 
                },
            ],
           
        },
    
        {
            id:2,
            serviceName:"UI and UX consulting",
            serviceTeam:[
                {
                    name:"By Jessica Gutierrez",
                    servicePosition:"Web Developer",
                   
                },
            ],
            
        },
        {
            id:3,
            serviceName:"AR experience design ",
            serviceTeam:[
                {
                    name:"By Jessica Gutierrez",
                    servicePosition:"Web Developer",
                    
                },
            ],
    
            
          
        },
        {
            id:4,
            serviceName:"platform design ",
            serviceTeam:[
                {
                    name:"By Jessica Gutierrez",
                    servicePosition:"Web Developer",
                    
                },
            ],
    
            
          
        },
        
        {
            id:5,
            serviceName:"Design workshop",
            serviceTeam:[
                {
                    name:"By Jessica Gutierrez",
                    servicePosition:"Web Developer",
                    
                },
            ],
    
            
          
        },
        {
            id:6,
            serviceName:"Web design",
            serviceTeam:[
                {
                    name:"By Jessica Gutierrez",
                    servicePosition:"Web Developer",
                    
                },
            ],
    
            
          
        }
    ]
  return (
   <>
   <section id='services'className='serviceCard'>
   <Title subtitle={'Our Services'}/>
    <div className="container grid2">
        {serviceCard.map((val)=>{
            return (
            <div key={val.id} className="items" >
                <div className="content grid">
                    <div  className="left">
                       <div className="img">
                        <img src={service1} alt="" />
                       </div>
                    </div>
                    <div  className="text">
                        <h1>{val.serviceName}</h1>
                         <div className="details">
                            {/* {val.serviceTeam.map((details)=>(
                               <>
                               <div className="box">
                                <div className="sImg">
                                    <img src={service2} alt="" />
                                </div>
                                <div className="para">
                                    <h4>{details.name}</h4>
                                    <h6>{details.servicePosition}</h6>
                                </div>
                                </div>
                                
                           </>
                            ))} */}
                        </div>
                    </div>
                </div>
             
                <button className='outline-btn'>Let's Talk </button>
            </div>
            
              )
        })}
      
    </div>
    
   </section>
   

   </>
  )
}

export default ServiceCard