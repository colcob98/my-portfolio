import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: "",
    })

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    const formChange = (event) => {
        if (event.target.name === "email") {
            const isValid = validateEmail(event.target.value);
            if (!isValid) {
                setErrorMessage('Please enter a valid email address.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage('Email field is required')
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [event.target.name]: event.target.value});
            console.log('success');
        }
    }

    const formSubmit = (event) => {
        try {           
            event.preventDefault();
            console.log("Email Sent!");
        } catch (err) {
            console.log(err);
        }
    };  

    return (
      <div className="contact-page">
        <h1 className="page-header" >Contact</h1>
        <p>Please send me a message and I will get back to you as soon as possible!</p>
        <form onSubmit={formSubmit}>
            <div>
            <input
                value={name}
                name="name"
                onChange={formChange}
                type="text"
                placeholder="Name"
            />
            </div>
            <div>
            <input
                value={email}
                name="email"
                onChange={formChange}
                type="email"
                placeholder="Email"
            />
            </div>
            <div>
            <textarea
                value={message}
                name="message"
                onChange={formChange}
                placeholder="Message"
            />
            </div>
            <button className="btn" type="submit">Send</button>
        </form>
      </div>
    );
}

export default Contact;