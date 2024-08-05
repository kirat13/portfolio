import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "85a33005-0395-4f7e-b850-27fa6578a983");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            alert("Email Sent Successfully");
            event.target.reset();
          } else {
            alert("Error", data);
            setResult(data.message);
          }
        };

    return (
        <div>
            <div id ='contact' className="contact">
                <div className="contact-title">
                    <h1>Get In touch</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="contact-section">
                    <div className="contact-left">
                        <h1>Let's talk</h1>
                        <p> I'm Currently avaliable to take  on new projects , so feel free to
                            send me a message about anything that you want me to work on.
                        </p>
                    
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt=" " /><p>preetcreator12@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p> 9779964298</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Sarabha, Ludhiana(Punjab)</p>
                        </div>
                        </div>
                    
                </div>
                <form  onSubmit={onSubmit} className="contact-right">
                <label htmlFor=''>Your Name</label> 
                <input type="text" placeholder='Enter Your Name' name='name'/>
                <label htmlFor=''>Your Email</label>
                <input type="email" placeholder='Enter Your email' name='email'/>
                <label htmlFor=''>Write Your Message Here</label>
                <textarea name='message' rows="8" placeholder='Enter your message'/>
                <button type='submit' className='contact-submit'>Submit Now</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Contact
