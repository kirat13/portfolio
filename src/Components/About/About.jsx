import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import imgs from '../../assets/imgs.png'

const About = () => {
    return (
        <div>
            <div id='about' className="about">
                <div className="about-title">
                    <h1>About me</h1>
                    <img src={theme_pattern} alt=" "></img>
                </div>
                <div className="about-sections">
                    <div className="about-left">
                        <img src={imgs} alt=" " />
                    </div>
                    <div className="about-right">
                        <div className="about-para">
                            <p>Hello! I'm Gurpreet Singh, a dedicated and passionate video editor
                                with over 5 years of experience in creating stunning wedding
                                highlights and social media reels. My journey in video editing has
                                been driven by a commitment to excellence, hard work, and
                                unwavering consistency.
                                <br/><br/>
                                From capturing the joyous moments of weddings to crafting compelling
                                 social media content, I pour my heart and soul into every project. 
                                 My expertise in industry-leading software like Adobe Premiere Pro,
                                  After Effects Resolve allows me to deliver top-notch 
                                  quality that meets the highest standards.
                                  <br/><br/>My meticulous attention to detail ensures that each video not only meets but exceeds client expectations. Whether it's a romantic wedding highlight or an engaging reel for social media,
                                   I am dedicated to bringing your vision to life with creativity and precision.</p>
                        </div>

                        <div className="about-skills">
                            <div className="about-skill"><p>Premiere Pro</p><hr style={{ width: "100%" }}></hr></div>
                            <div className="about-skill"><p>Adobe After effects</p><hr style={{ width: "60%" }}></hr></div>
                            <div className="about-skill"><p>Color Grading</p><hr style={{ width: "75%" }}></hr></div>
                            <div className="about-skill"><p>Filmora</p><hr style={{ width: "70%" }}></hr></div>
                            <div className="about-skill"><p>Adobe Illustrator</p><hr style={{ width: "40%" }}></hr></div>
                        </div>
                    </div>
                </div>

                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>5+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>60+</h1>
                        <p>PROJECTS COMPLETED</p>
                    </div>
                    <hr />

                    <div className="about-achievement">
                        <h1>50+</h1>
                        <p>HAPPY CLIENTS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
