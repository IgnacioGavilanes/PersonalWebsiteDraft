import './Courses.scss'
import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const Courses = () => {
  return (
    <div className='xpContainer'>
            <div className='course'>
                <div className='info'>
                    <h3 className='subtitle'>
                        ReactJS
                    </h3>
                    <h4 className='institute'>CoderHouse</h4>
                    <h5 className='modality'>Live online course</h5>
                    <h4 className='dates'>Oct - Dec 2021</h4>
                    <a href="https://www.github.com/ignaciogavilanes/ReactJs" rel="noreferrer" target="_blank" className='repoLink'><h3 className='repo'>Go to repo <MdOutlineArrowRightAlt/></h3></a>
                </div>
                <div className='topics'>
                    <ul className='column1'>
                        <li>git</li>
                        <li>JSX</li>
                        <li>Props</li>
                        <li>Sates</li>
                        <li>Hooks</li>
                    </ul>
                    <ul className='column2'>
                        <li>Firebase & Firestore</li>
                        <li>APIs</li>
                        <li>Routing</li>
                        <li>Context</li>
                    </ul>
                </div>
            </div>

            <div className='course'>
                <div className='info'>
                    <h3 className='subtitle'>
                        JavaScript
                    </h3>
                    <h4 className='institute'>CoderHouse</h4>
                    <h5 className='modality'>Live online course</h5>
                    <h4 className='dates'>Sept - Oct 2021</h4>
                    <a href="https://www.github.com/ignaciogavilanes/JavaScript" rel="noreferrer" target="_blank" className='repoLink'><h3 className='repo'>Go to repo <MdOutlineArrowRightAlt/></h3></a>
                </div>
                <div className='topics'>
                    <ul className='column1'>
                        <li>Basic JS synthax</li>
                        <li>jQuery</li>
                        <li>JSON</li>
                        <li>Asynchronous interactions (AJAX)</li>
                        <li>Local/Session storage</li>
                        <li>Intro to API calls</li>
                    </ul>
                </div>
            </div>
            
            <div className='course'>
                <div className='info'>
                    <h3 className='subtitle'>
                        Python
                    </h3>
                    <h4 className='institute'>Instituto BIOS</h4>
                    <h5 className='modality'>Live online course</h5>
                    <h4 className='dates'>Apr - Aug 2021</h4>
                    <a href="https://www.github.com/ignaciogavilanes/Django" rel="noreferrer" target="_blank" className='repoLink'><h3 className='repo'>Go to repo<MdOutlineArrowRightAlt/></h3></a>
                </div>
                <div className='topics'>
                    <ul className='column1'>
                        <li>Basic Python synthax</li>
                        <li>HTML/CSS</li>
                        <li>Django</li>
                        <li>Intro to MySQL</li>
                    </ul>
                </div>
            </div>
    </div>
  )
}
