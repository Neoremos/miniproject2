import React from 'react';
import './contact.css';



const Contact = () => {
  return (
    <div className="container">
            <div className="form-container" data-aos="fade-up">
                <h2 className="form-title">Send us a message</h2>
                <form id="contact-form">
                    <input type="text" name="user_name" placeholder="Full name*" required /> 
                    <input type="email" name="user_email" placeholder="Email address*" required />
                    <label className="message-label" for="message">Type you message here:</label>
                    <textarea name="message"></textarea>
                    <input className="send-button" type="submit" value="Send" />
                </form>
            </div>

            <div className="text-container" data-aos="fade-left">
                    <div class="text">
                    <h2>Want to hire us?</h2>
                    <p>Please tell us more about the project.</p>
                </div>
            </div>
    </div>
  )
}

export default Contact