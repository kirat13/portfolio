import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'

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
                        <img src={profile_img} alt=" " />
                    </div>
                    <div className="about-right">
                        <div className="about-para">
                            <p>Hello! I'm [Your Name], a passionate and dedicated tech enthusiast with a Bachelor's degree in Computer Applications. With a strong foundation in web development and data analytics, I thrive on creating innovative solutions and enhancing user experiences through technology. </p>
                        </div>

                        <div className="about-skills">
                            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }}></hr></div>
                            <div className="about-skill"><p>React Js</p><hr style={{ width: "70%" }}></hr></div>
                            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }}></hr></div>
                            <div className="about-skill"><p>Java</p><hr style={{ width: "50%" }}></hr></div>
                            <div className="about-skill"><p>Python</p><hr style={{ width: "70%" }}></hr></div>
                        </div>
                    </div>
                </div>

                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>10+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <hr/>
                    <div className="about-achievement">
                        <h1>90+</h1>
                        <p>PROJECTS COMPLETED</p>
                    </div>
                    <hr/>

                    <div className="about-achievement">
                        <h1>15+</h1>
                        <p>HAPPY CLIENTS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
