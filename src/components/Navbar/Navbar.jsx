import React from 'react'
import './Navbar.css'
import menu_open from '../../assets/menu_open.svg'
import underline from '../../assets/nav_underline.svg'
import { useState } from 'react'
import logo from '../../assets/Fauz.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  return (
    <div id='home' className='navbar'>
        <img src={logo}/>
        <ul className="nav-menu">
            <li ><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>{setMenu("home")}}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=""/>:null}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>{setMenu("about")}}>About</p></AnchorLink>{menu==="about"?<img src={underline} alt=""/>:null}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>{setMenu("projects")}}>Projects</p></AnchorLink>{menu==="projects"?<img src={underline} alt=""/>:null}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>{setMenu("contact")}}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=""/>:null}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar