import React, {useState} from 'react'
import {CgMenu, CgClose} from "react-icons/cg";
import './Navbar.scss';

export const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    // const closeMobile = () => setClick(false)

  return (
    <nav id='navbar'>
        <div id='logo'>
            <p>Ignacio J.<br/>Gavilanes</p>
        </div>
        <div onClick={handleClick}>
            {click ? <CgClose id='burger'/> : <CgMenu id='burger'/>}
        </div>
        <div className={click ? 'menu mobileActive': 'menu'}> 
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Education</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}