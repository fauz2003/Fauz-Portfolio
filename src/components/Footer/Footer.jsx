import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <hr/>
        <div className="footer-bottom">
            <div className="footer-bottom-left">
                <p>© 2024 Fauz Ahmed</p>
            </div>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer