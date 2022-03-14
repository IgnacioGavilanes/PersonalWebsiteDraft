import './Contact.scss';
import React, {useState} from 'react'
import { BsEnvelope, BsLinkedin, BsGithub } from "react-icons/bs";

export const Contact = () => {
    
    const[values, setValues] = useState({
        name:'',
        email:'',
        message:''
    })

    const handleInputChange = (event) => {
        setValues({
            ...values, 
            [event.target.name]: event.target.value
        })

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(values)
    }


  return (
    <>
        <div className='contact'>
            <h2 className='title'>Say Hi !</h2>
            <p className='contactParagraph'>
                Got any questions? Suggestions? Advice? 
                You can reach me out completing the form below
            </p>

            <form onSubmit={handleSubmit} id='contactForm' >
                    <div className='data'>
                        <div className='nameContainer'>
                            <label className='nameLbl' for='name'>Name</label>
                            <input 
                                id='name' 
                                onChange={handleInputChange}
                                name='name'
                                value={values.name}
                                type='text'
                                placeholder='name'
                            /> <br/>
                        </div>
                        <div className='emailContainer'>
                            <label className='emailLbl' for='email'>Email</label>
                            <input 
                                id='email' 
                                onChange={handleInputChange}
                                name='email'
                                value={values.email}
                                type='email'
                                placeholder='email'
                            /> <br/>
                        </div>
                    </div>
                    <div className='msg'>
                        <label className='messageLbl' for='message'>Message</label>
                        <textarea 
                            id='message' 
                            onChange={handleInputChange}
                            name='message'
                            value={values.message}
                            type='text'
                            placeholder='message'
                        />
                    </div>
                    <input 
                        className='submit-form'
                        type='submit'
                    />
                </form>
                <BsEnvelope className='icon contactIcon'/>
                <a href="https://www.linkedin.com/in/ignacio-gavilanes/" rel="noreferrer" target="_blank"><BsLinkedin className='icon contactIcon'/></a>
                <a href="https://www.github.com/ignaciogavilanes" rel="noreferrer" target="_blank"><BsGithub className='icon contactIcon'/></a>
        </div> 
    </>
  )
}
