import './Education.scss'
import { Courses } from './Courses/Courses'
import { Website } from './Website/Website'
import { Future } from './Future/Future'
import React from 'react'

export const Education = () => {
  return (
    <div className='education'>
        <h2 className='title'>Education.</h2>
        <p className='educationParagraph'>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Nullam vitae rutrum lacus, 
                vitae facilisis sem. Cras sollicitudin semper augue ut 
                placerat. Duis euismod quam sit amet consequat porttitor. 
                Proin nec egestas eros, sit amet malesuada risus. Nunc 
                dictum maximus mauris id eleifend. Aliquam orci risus, 
                lobortis in justo sed, consectetur aliquet libero.
        </p>
        <Courses/>
        <Website/>
        <Future/>
    </div>
  )
}
