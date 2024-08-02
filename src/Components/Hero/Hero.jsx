import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div>
      <div  id="home" className="hero">
        <img src={profile_img} alt=" "></img>
        <h3><span>I'm Gurkirat Kaur </span>, Web Developer based in India .</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus nobis iure corrupti facere modi assumenda! Pariatur, rerum aliquam quas saepe exercitationem hic repudiandae accusamus consectetur et eveniet ad dicta.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">
        Connect With Me
       </AnchorLink> </div>
        <div className="hero-Resume">My Resume</div>
      </div>
      
      
      </div>
    </div>
  )
}

export default Hero
