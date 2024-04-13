import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div className="contact-form-content">
            <form>
                <div className="name-container">
                    <input type="text" name="fullname" placeholder="Name" />
                </div>

                <input type="email" name="email" placeholder="Email" />
                <textarea name="message" placeholder="Message" rows="11"></textarea>

                <button>send</button>
            </form>
        </div>
    );
};

export default ContactForm;