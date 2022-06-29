import React from 'react'
import TeamCard from './TeamCard'
import './Team.css'
import Title from '../home/Title'
const Team = () => {
  return (
    <div className='dTeams'>
        <section id='teams'className="team padding">
        <Title subtitle={'Team dotDesign.'} Mtitle={'Meet Our Team '}/>
            <div className="container grid4">
                <TeamCard/>
            </div>
        </section>
    </div>
  )
}

export default Team