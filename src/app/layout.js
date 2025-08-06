 
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
 

export const metadata = {
  title: 'Future Coding',
  description: 'Internships, Hackathons, Quizzes Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
         <main> {children}</main>
        
        <Footer/>
      </body>
    </html>
  );
}
