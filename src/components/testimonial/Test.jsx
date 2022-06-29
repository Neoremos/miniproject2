import React from 'react'
import Title from '../home/Title'
// import {testimonal} from './TestimonalData'
import {BiMessageCheck} from 'react-icons/bi'
import client1 from "../../img/client1.jpg";
import client2 from "../../img/client2.jpg";
import client3 from "../../img/client3.jpg";
import "./test.css"

const Test = () => {
    const testimonal = [
        {
          id: 1,
          name: "Joshmar Constantino",
          post: "Owner of Furbulls Corner",
          desc: "DotDesign has successfully met and deliver the project. The businessfunctions have been applied and the system proposal functionality are all working. The Signatory declare that the Web app project has reached the user acceptance testing.",
          cover: client1,
        },
      
        {
          id: 2,
          name: "Deozzell Dela Cruz",
          post: "Owner of DeeSocials",
          desc: "DotDesign team took a deep dive into understanding our challenges and limitations to create a product that better suits our goals. The workflow was super smooth, organized and neat.",
          cover: client2,
        },
      
        {
          id: 3,
          name: "Jericho Joe",
          post: "Owner of JoeStudio",
          desc: "The project had a tight timeline, but I think it went very smooth. The team had a very good approach and took our knowledge transfer to heart and created a very nice design. I'm very satisfied with the quality of work.",
          cover: client3,
        },
      ];
      
  return (
   <section className='testimonal padding'>
    <div className="container">
    <Title subtitle={'WHAT OUR CLIENTS'} title={'TELL ABOUT US '}/>

    <div className="content grid2">
        {testimonal.map((val)=>(
            <div key={val.id} className="items shadow">
                <div className="box flex">
                    <div className="img">
                        <img src={val.cover} alt="" />
                           <i><BiMessageCheck className='icon'/></i>
                    </div>
                        <div className="name">
                            <h2>{val.name}</h2>
                            <span>{val.post}</span>
                    </div>
                </div>
                <p>{val.desc}</p>
            </div>
        ))}
    </div>
    </div>
   </section>
  )
}

export default Test