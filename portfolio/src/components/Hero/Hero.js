import './Hero.scss';
import React from 'react'

export const Hero = () => {
  return (
    <div id='hero'>
        <h2 className='title'>Who?</h2>
        <p>I’m Ignacio Gavilanes, <br/> 
            a self-taught, 
            <span className='highlighted'> --hopefully soon-to-be🤞🏼--</span>,
            web developer. <br/>
            You can either keep 
            scrolling to learn more about me or you 
            can go straight to my</p>
        <button id='cta'>Education</button>
    </div>
  )
}
