// import Navbar from "./components/Navbar";
import './styles/Home.css';
import Image from 'next/image';
// import  images from '../images/services.jpg';
import servicesImage from './images/services.jpg';
// import successImage from './images/success.png';  
import successImage from './images/success.jpg';
import BusinessImage from './images/Business.jpg';
import Link from 'next/link';







export default function Home() {
  return (
    <main>

      <section className="hero-section">
        <h2 className="hero-title">
          Welcome to <span className="highlight">Future Coding</span>
        </h2>
        <p className="hero-subtitle">
          Participate in internships, hackathons, quizzes & earn certificates!
          <br />
          <br />
          Join Our Exciting Internship Journey
        </p>
        <button className="hero-button">Explore Opportunities</button>

        <hr className="section-divider" />

        <div className="about-section">
          <h3>Who We Are</h3>
          <p>
            Future Coding is an IT services and consultancy platform that specializes in creating
            innovative solutions for businesses. We are passionate about technology and believe in
            the power of software to transform the world. Our internship program is just one of the
            ways we are investing in the future of the industry.
          </p>
          <p>
            At Future Coding, we believe practical knowledge is the key to success in the tech
            industry. Our aim is to help students lacking basic skills by offering hands-on learning
            through live projects and real-world examples.
          </p>
        </div>

        <div className="services-section">
          <div className="services-content">
            <Image
              src={servicesImage}
              alt="services"
              className="services-image"
              width={500}
              height={400}
            />


            <div className="services-text-content">
              <h2 className="services-heading">
                We build websites and web applications.
              </h2>
              <p className="services-text">
                Today, every business should have a website.
              </p>
              <p className="services-text">
                No matter how small or large your business, having a website is must have at this time.
              </p>
              <p className="services-text">
                Having a website help you to maintain your online presence.
              </p>
              <Link href="/contact">
                <button className="services-button">Contact Us</button>
              </Link>

            </div>
          </div>
        </div>
        <div className="ecommerce-section">
          <div className="ecommerce-content">
            <Image
              src={successImage}
              alt="success development"
              className="ecommerce-image"
              width={500}
              height={400}
            />
            <div className="ecommerce-text">
              <h2><strong>E-Commerce Development.</strong></h2>
              <p>Our talented web development team has years of experience building websites from small to large.</p>
              <p>We deliver projects with 100% user satisfaction.</p>
              <p>Whatever functionality you need for the web, we will implement it.</p>
            </div>
          </div>
        </div>
        <div className="business-section">
          <div className="business-content">
            <div className="business-text">
              <h2 className="business-heading">
                Need website for your business?
              </h2>
              <p className="business-subtitle">Want to sell your products online?</p>
              <p className="business-para">
                We often develop Ecommerce for businesses who want to sell their
                products or services online.
              </p>
              <p className="business-para">
                Let's move your products towards online…
              </p>
              <Link href="/contact">
                <button className="business-button">Contact Us</button>
              </Link>

            </div>
            <div className="business-image">
              <Image
                src={BusinessImage}
                alt="Ecommerce Promo"
                width={500}
                height={400}
                className="business-img"
              />
            </div>
          </div>
        </div>
        <div className="choose-us-section">
          <h2 className="choose-title">
            <span className="highlight">Why Choose Us?</span>
          </h2>
          <p className="choose-subtitle">
            We bring you the best programs designed to help you succeed in your career.
          </p>

          <div className="choose-cards">
            <div className="choose-card">
              <div className="choose-icon">🌟</div>
              <h3 className="choose-heading">Expert Mentors</h3>
              <p className="choose-text">
                Learn from industry professionals with years of experience in their fields.
              </p>
            </div>

            <div className="choose-card">
              <div className="choose-icon">🚀</div>
              <h3 className="choose-heading">Career Growth</h3>
              <p className="choose-text">
                Accelerate your career with programs tailored for high-impact roles.
              </p>
            </div>

            <div className="choose-card">
              <div className="choose-icon">📚</div>
              <h3 className="choose-heading">Practical Learning</h3>
              <p className="choose-text">
                Hands-on projects to ensure you gain real-world skills and knowledge.
              </p>
            </div>
          </div>
        </div>


      </section>
    </main>
  );
}
