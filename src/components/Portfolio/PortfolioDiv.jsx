import React from 'react'
import "./portfolio.css"
import { BsLink } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const PortfolioDiv = ({image, title, link, gitrepo}) => {
  return (
    <>
        <div className='portfolio-div'> 
          <img src={image}></img> 

          <div className='text-div'>
            <h3>{title}</h3>
            <p>A simple react app to get the recipe for any type of food using an API.</p>
          </div>

          <div className='portfolio-links'>
            <a target="_blank" href= {link}>
              <BsLink 
              className='link-icon' 
              size={30} 
              /> 
              </a>

            <a target="_blank" href={gitrepo}>
              <AiFillGithub 
              className='link-icon' 
              size={30} 
              /> 
              </a>
          </div>
        </div>

    </>
  )
}

export default PortfolioDiv