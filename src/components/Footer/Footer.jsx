import React from 'react'
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div> <GrLinkedinOption className='icons' size={30} /> 
        </div>
        <div> <AiFillGithub className='icons' size={30} /> 
        </div>
        <div> <AiFillInstagram className='icons' size={30} /> 
        </div>
    </div>
  )
}

export default Footer


{/* <div className='footer'>
<div> <GrLinkedinOption size={30} 
      onMouseOver={({target})=>target.style.color="#5e5d5b"}
      onMouseOut={({target})=>target.style.color="black"} /> 
</div>
<div> <AiFillGithub size={30} 
      onMouseOver={({target})=>target.style.color="#5e5d5b"}
      onMouseOut={({target})=>target.style.color="black"} /> 
</div>
<div> <AiFillInstagram size={30} 
      onMouseOver={({target})=>target.style.color="#5e5d5b"}
      onMouseOut={({target})=>target.style.color="black"} /> 
</div>
</div> */}