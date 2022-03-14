import './Future.scss'
import React from 'react'
import { SiSwift, SiMongodb, SiRedux, SiNodedotjs } from "react-icons/si";

export const Future = () => {
  return (
    <>
        <h3 className='subTitle'>Plans for the future</h3>  
        <p >Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Nullam vitae rutrum lacus, 
                vitae facilisis sem. Cras sollicitudin semper augue ut 
                placerat. Duis euismod quam sit amet consequat porttitor. 
                Proin nec egestas eros, sit amet malesuada risus. Nunc 
                dictum maximus mauris id eleifend. Aliquam orci risus, 
                lobortis in justo sed, consectetur aliquet libero.
        </p>
        <SiSwift className='icon'/>
        <SiMongodb className='icon'/>
        <SiRedux className='icon'/>
        <SiNodedotjs className='icon'/>
    </>
  )
}
