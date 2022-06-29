import React from 'react'
import PriceCard from './PriceCard'
import "./price.css"
import Title from '../home/Title'

const Price = () => {
  return (
    <div>
        <section className="price padding">
        <Title Mtitle={'Choose Plan'}/>
            <div className="container grid2">
                <PriceCard/>
            </div>
        </section>
    </div>
  )
}

export default Price