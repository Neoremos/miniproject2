import React from 'react'
import "./header.css"
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'


const Header = () => {
  return (
    <div>
        <section className="head">
            <div className="container flex">
                <div className="logo">
                    <h1>dotDesign</h1>
                    <span>UI/UX</span>
                </div>
                <div className="social">
                    <AiFillFacebook className='icon'/>
                    <AiOutlineInstagram className='icon'/>
                    <AiOutlineTwitter className='icon'/>
                    <AiOutlineGithub className='icon'/>
                </div>
            </div>
            
        </section>
    </div>
  )
}

export default Header