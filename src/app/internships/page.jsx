// import "./style.css";
import Image from "next/image";
import Link from 'next/link';

import '../styles/Internship.css';
// import webdev from "@/images/webdev.jpg";
import webdevImg from '../images/webdev.jpg';
import andriddevImg from '../images/andriddev.jpg'
import datascienceImg from '../images/datascience.jpg';
import javaImg from '../images/java.jpg'
import cppImg from '../images/cpp.jpg';
import pythonImg from '../images/python.jpg'
import uiuxImg from '../images/uiux.jpg'
import AiImg from '../images/Ai.jpg'
import mlImg from '../images/ml.jpg'
import flutterImg from '../images/flutter.jpg'
import reactImg from '../images/react.jpg'
import jsImg from '../images/js.jpg';

const internships = [
  { title: "Web Development", image:webdevImg },
  { title: "Android Development", image:andriddevImg },
  { title: "Data Science", image: datascienceImg},
  { title: "Java Programming", image: javaImg },
  { title: "C++ Programming", image: cppImg },
  { title: "Python Programming", image:  pythonImg},
  { title: "UI/UX Design", image: uiuxImg },
  { title: "Artificial Intelligence", image: AiImg },
  { title: "Machine Learning", image: mlImg},
  { title: "Flutter Developer", image:  flutterImg},
  { title: "ReactJS Developer", image:  reactImg },
  { title: "JavaScript Developer", image:  jsImg },
   
  
];

export default function InternshipPage() {
  return (
    <section className="internship-section">
      <h2 className="internship-title">Our Internships</h2>
      <p className="internship-description">
        We are passionate about technology and believe in the power of software to transform the world.
        Our internship program is just one of the ways in which we are investing in the future of the industry.
      </p>
      <h3 className="sub-title">INTERNSHIPS WE OFFER!</h3>

      <div className="internship-grid">
        {internships.map((item, index) => (
          <div className="internship-card" key={index}>
            <Image src={item.image} alt={item.title} width={80} height={80} />
              
            <h4>{item.title}</h4>
            <Link href={`/apply?internship=${encodeURIComponent(item.title)}`}>
  <button>Apply</button>
</Link>

          </div>
        ))}
      </div>
    </section>
  );
}
