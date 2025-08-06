'use client';
import React, { useState } from 'react';
// import '../../styles/Contact.css';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    fullname:'',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert("Message sent successfully!");
    setFormData({ name: '',fullname:'', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-description">Feel free to reach out with any questions or collaboration ideas!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder=" Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="fullname"
          placeholder="Last  Name"
          value={formData.fullname}
          onChange={handleChange}
          required
        />
        


        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
