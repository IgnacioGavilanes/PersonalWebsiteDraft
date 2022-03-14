import './Website.scss'
import React from 'react'
import { SiNetlify, SiReact, SiFigma } from "react-icons/si";
import { FaSass, FaGitAlt } from "react-icons/fa";


export const Website = () => {
  return (
    <>
        <h3 className='subTitle'>And what about this website?</h3>
        <p>
          This website was designed and created as a means to showcase my skills. 
          It is hosted on netlify, where I utilized their backend. These are some 
          of the technologies utilized:
        </p> 
        <SiReact className='icon'/>
        <FaSass className='icon'/>
        <FaGitAlt className='icon'/>
        <SiFigma className='icon'/> 
        <SiNetlify className='icon'/>
    </>

    
  )
}
