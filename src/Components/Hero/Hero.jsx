import React from 'react'
import './Hero.css'
import imgs from '../../assets/imgs.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div>
      <div  id="home" className="hero">
        <img src={imgs} alt=" "></img>
        <h3><span>I'm Gurpreet Singh</span>, Video Editor based in India .</h3>
        <p>I am a Professional Video Editor with over 5 years of 
          experience specializing in creating captivating wedding highlights and reels 
          tailored for social media content. My passion lies in crafting visually stunning and 
          emotionally engaging videos that tell a unique story, capturing the essence of each
           special moment.
           <br/><br/>Let's work together to bring your vision to life and create unforgettable video memories!</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">
        Connect With Me
       </AnchorLink> </div>
        <div className="hero-Resume"><a href="https://drive.google.com/file/d/1RhMswmaAFRSczBSK5B8OwKrJ_uFbOmXT/view?usp=sharing">My Resume</a></div>
      </div>
      
      
      </div>
    </div>
  )
}

export default Hero
