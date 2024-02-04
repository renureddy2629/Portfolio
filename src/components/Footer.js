import React, { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = () => {
    const subject = encodeURIComponent(`New Contact Form Submission from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    const mailtoLink = `mailto:renukareddy442@gmail.com?subject=${subject}&body=${body}`;

    // Try opening the mailto link
    window.location.href = mailtoLink;

    // Provide a fallback message if the mailto link doesn't work
    setTimeout(() => {
      alert("Your email client didn't open. Please send an email to renukareddy442@gmail.com with the provided details.");
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
    onSubmit({ name, email, message }); // Pass form data to parent component
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-fields">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-button">Send Message</button>
    </form>
  );
};

export default ContactForm;
