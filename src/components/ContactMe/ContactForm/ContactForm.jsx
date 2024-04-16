import React, { useRef, useState } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
    const [message, setMessage] = useState('');
    const [isMessageVisible, setIsMessageVisible] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('Ionos-nick-mbk', 'template_3wiujca', form.current, {
            publicKey: 'xE-13LFUd1vvAzvIT',
          })
          .then(
            () => {
              setMessage('Message sent successfully! Thank you for contacting me, I will get back to you as soon as possible.');
              setIsMessageVisible(true);
              setTimeout(() => setIsMessageVisible(false), 5000);  // Message disappears after 5 seconds
            },
            (error) => {
              setMessage('Failed to send message. Please try again later.');
              setIsMessageVisible(true);
              setTimeout(() => setIsMessageVisible(false), 8000);  // Message disappears after 8 seconds
            },
          );
          e.target.reset();
      };

    return (
        <div className="contact-form-content">
            <form ref={form} onSubmit={sendEmail}>
                <div className="name-container">
                    <input type="text" name="user_name" placeholder="Name" />
                </div>

                <input type="email" name="user_email" placeholder="Email" />
                <textarea name="message" placeholder="Message" rows="11"></textarea>

                <button type="submit">Send</button>
            </form>
            {isMessageVisible && <div className="form-message">{message}</div>}
        </div>
    );
};

export default ContactForm;