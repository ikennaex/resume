import React from 'react'
import "./about.css"
import {about} from "./imports"

const About = () => {
  return (
    <div className='about-section' id='about'>
        <h3>About Me</h3>
        <div className='about-area'>
            <img src={about} ></img>

            <p>I am a full stack web developer with a passion 
              for creating beautiful and functional websites 
              and decentralized applications. I have a strong 
              passion for learning new technologies and I am 
              always looking to improve my skills.</p>
        </div>

        <div className='download-btn-div'>
        <button type='button' className='download-button'>Download Resume</button>
        </div>
    </div>
  )
}

export default About