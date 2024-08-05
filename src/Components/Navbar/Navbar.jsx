import React ,{useState}from 'react'
import { useRef } from 'react'
import './Navbar.css'

import logo from '../../assets/logo.png' 
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

const openMenu = () =>{
  menuRef.current.style.right="0";
}
const closeMenu = () =>{
  menuRef.current.style.right="-350px";
}

  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <img src={logo} alt=" "/></div>
        <img src={menu_open} onClick={openMenu} alt=" " className='nav-mob-open'/>
        <ul  ref={menuRef} className='nav-menu'>
         <img src={menu_close} onClick={closeMenu} alt=" " className='nav-mob-close'/>
        <li><AnchorLink className='anchor-link'  href="#home" ><p onclick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=" "/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#about"><p onclick={()=>setMenu("about")}>About me </p></AnchorLink>{menu==="about"?<img src={underline} alt=" "/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#services"><p onclick={()=>setMenu("work")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt=" "/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#work"><p onclick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt=" "/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#contact"><p onclick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=" "/>:<></>}</li>
        </ul>
        <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
