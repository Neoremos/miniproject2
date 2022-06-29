import React from 'react'
// import { price } from './PriceData'
import "./price.css"
const PriceCard = () => {
     const price =[
        {
            id:1,
            name:'BASIC PLAN',
            Prices: "1,000",
            desc:'1 Screen Website/Mobile UI UX. 2 Days Delivery, 1 pages/screens, 1 Custom assets, Responsive design with Source File.'
        },
        {
            id:2,
            name:'STANDARD PLAN',
            Prices: "3,000",
            desc:'4 Screen Website/Mobile UI UX.  7 Days Delivery, 7 pages/screens, 2 Custom assets, Responsive design with Source File.'
        },
        {
            id:3,
            name:'PREMIUM PLAN',
            Prices: "5,000",
            desc:'7 Screen Website/Mobile UI UX. 10 Days Delivery, 7 pages/screens, 3 Custom assets, Responsive design with Source File.'
        }
    ]
  return (
   <>
    
    {price.map((val)=>(
        <div key={val.id} className="items shadow">
            <h4>{val.name}</h4>
            <h1><span>₱</span>
                {val.Prices}
            </h1>
            <ul>{val.desc}</ul>
            <button className='outline-btn'>GET STARTED NOW</button>
        </div>
    ))}
    
   </>
  )
}

export default PriceCard