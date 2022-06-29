import React from 'react'
import "./home.css"
const Title = ({subtitle,title,Mtitle}) => {
  return (
    <div id = 'heading'>
        <h3>{subtitle}</h3>
        <h1>{title}</h1>
        <h2>{Mtitle}</h2>
        
    </div>
  )
}

export default Title