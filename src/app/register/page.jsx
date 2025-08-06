 'use client';

import React, { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    department: '',
    internshipField: '',
    github: '',
    experience: '',
    internshipDuration: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: '60px', textAlign: 'center' ,}}>
        <h1>Thank you for registering!</h1>
        <p>We have received your details and will contact you soon.</p>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '650px',
      margin: '40px auto',
      padding: '25px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 0 15px rgba(0,0,0,0.1)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '15px' }}>Hackathon & Internship Registration</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px', color: '#555' }}>
        Please fill out this form to register for upcoming hackathons or internships. Accurate info helps us get in touch.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="college"
          placeholder="College / Organization"
          value={formData.college}
          onChange={handleChange}
          style={inputStyle}
        />

        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="" disabled>
            Select Your Department *
          </option>
          <option value="computer_science">Computer Science</option>
          <option value="information_technology">Information Technology</option>
          <option value="electronics_communication">Electronics & Communication</option>
          <option value="mechanical">Mechanical</option>
          <option value="civil">Civil</option>
          <option value="other">Other</option>
        </select>

        <select
          name="internshipField"
          value={formData.internshipField}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="" disabled>
            Field of Interest for Hackathon *
          </option>
          <option value="web_development">Web Development</option>
          <option value="mobile_app_dev">Mobile App Development</option>
          <option value="data_science">Data Science</option>
          <option value="artificial_intelligence">Artificial Intelligence / ML</option>
          <option value="cyber_security">Cyber Security</option>
          <option value="blockchain">Blockchain</option>
          <option value="cloud_computing">Cloud Computing</option>
          <option value="other">Other</option>
        </select>

        <select
          name="internshipDuration"
          value={formData.internshipDuration}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="" disabled>
            Preferred Hackathon Duration *
          </option>
          <option value="1_month">1 Month</option>
          <option value="3_months">3 Months</option>
          <option value="6_months">6 Months</option>
          <option value="other">Other</option>
        </select>

        <input
          type="url"
          name="github"
          placeholder="GitHub Profile URL"
          value={formData.github}
          onChange={handleChange}
          style={inputStyle}
        />

        <select
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="" disabled>
            Coding Experience Level *
          </option>
          <option value="beginner">Beginner (0-1 years)</option>
          <option value="intermediate">Intermediate (1-3 years)</option>
          <option value="advanced">Advanced (3+ years)</option>
        </select>

        <button type="submit" style={buttonStyle}>Submit Registration</button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: '12px 15px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  outline: 'none',
  transition: 'border-color 0.3s',
//   color: 'red'
};

const buttonStyle = {
  padding: '14px',
  fontSize: '1.1rem',
  backgroundColor: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold',
};
