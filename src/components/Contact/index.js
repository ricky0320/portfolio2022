import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function ContactForm({currentCategory}) {
    const { description} = currentCategory;
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Your ${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) { console.log('Submit Form', formState); }
    };

    return (
        <section id="contact">
            <h2 className="my-5">Contact Me
                <a className="mx-2" href="https://github.com/kcheykim"><BsGithub /></a>
                <a className="mx-2" href="mailto:kosalcheykim@gmail.com"><MdEmail /></a>
            </h2>
            <p>{description}</p>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="my-2 flex-row">
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name}  name="name" onBlur={handleChange} />
                </div>
                <div className="my-2 flex-row">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div className="my-2 flex-row">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    {errorMessage && (<div><p className="error-text">{errorMessage}</p></div>)}
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;