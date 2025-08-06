 'use client';
import React from 'react';
import '../styles/About.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Future Coding</h1>
      <p className="about-description">
      CodSoft are IT services and IT consultancy  that specializes in creating innovative solutions for businesses. We are passionate about technology and believe in the power of software to transform the world. Our internship program is just one of the ways in which we are investing in the future of the industry.

At CodSoft, we believe practical knowledge is the key to success in the tech industry. Our aim is to help students lacking basic skills by offering hands-on learning through live projects and real-world examples. Our team consists of industry experts who are dedicated to equipping interns with the knowledge and skills needed to succeed in their careers. We foster an inclusive and supportive environment that encourages learning, growth, and creativity.


      </p>

      <div className="mission-vision">
        <div className="section">
          <h2>Our Mission</h2>
          <p>
            Software development is an iterative process, and the mission includes continually improving software solutions. This entails gathering feedback, identifying areas for enhancement, and implementing updates to make the software more efficient, user-friendly, and reliable. Continuous improvement also involves staying up to date with the latest technologies, tools, and industry trends.
          </p>
        </div>

        <div className="section">
          <h2>Our Vision</h2>
          <p>
            The vision of software development is to create innovative solutions that push the boundaries of technology. This involves leveraging emerging technologies, exploring new ideas, and developing software that brings novel approaches to solving problems and improving the lives of users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
