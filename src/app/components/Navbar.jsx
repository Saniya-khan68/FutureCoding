 'use client';

import Link from 'next/link';
import { useState } from 'react';
import '../styles/Navbar.css';
 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <h1 className="logo logo-animated">Future Coding</h1>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/internships">Internships</Link></li>
          <li><Link href="/Hackthone">Hackathons</Link></li>
          {/* <li><Link href="/quizes">Quizzes</Link></li> */}
          <li><Link href="/about-us">About Us</Link></li>

          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
