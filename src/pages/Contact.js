import React from 'react'

function Contact() {
    return (
        <div className="contact">
            <div className="form-container">
                <h2 className="form-title">Get in touch!</h2>
                <form>
                    <input className="form-input" placeholder="Name" />
                    <input className="form-input" placeholder="Email" />
                    <input className="form-input" placeholder="Subject" />
                    <textarea id="message" className="form-input" placeholder="Message" />
                    <br />
                    <button className="form-button" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
