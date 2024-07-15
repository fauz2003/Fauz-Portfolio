import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import location_icon from '../../assets/location_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import API_KEY from '../../../config';


const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", API_KEY);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
    };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern}/>
        </div>
        <div className="contact-sections">
            <div className="contact-left">
                <h1>Let's talk!</h1>
                <p>I'm currently available for internship opportunities and also to take on new projects, so feel free to send me a message about anything you want to collaborate on. </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon}/>
                        <p>fauzahmed2@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon}/>
                        <p>+92-3333339871</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon}/>
                        <p>Islamabad, Pakistan</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" name = 'name'/>
                <label>Your Email</label>
                <input type="email" placeholder="Enter your email" name = 'email'/>
                <label>Write your message here</label>
                <textarea name = 'message' rows='8' placeholder='Enter your message'/>
                <button className='contact-submit' type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact