'use client';

import Link from 'next/link';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Future Coding</h2>
        <p className="footer-text">Empowering the next generation of developers.</p>

        <ul className="footer-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/internships">Internships</Link></li>
          <li><Link href="/Hackthone">Hackathons</Link></li>
          {/* <li><Link href="/quizzes">Quizzes</Link></li> */}
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <p className="footer-copy">&copy; {new Date().getFullYear()} Future Coding. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
