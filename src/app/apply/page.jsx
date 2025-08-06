 "use client";
import { useSearchParams } from 'next/navigation';
import '../styles/Apply.css';

export default function ApplyPage() {
  const searchParams = useSearchParams();
  const internship = searchParams.get('internship');

  return (
    <div className="apply-container">
      <h1 className="apply-title">Apply for: {internship}</h1>
      <form className="apply-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" required />
        </div>

        <div className="form-group">
          <label>College/University</label>
          <input type="text" placeholder="Your college name" />
        </div>

        <div className="form-group">
          <label>Current Qualification</label>
          <input type="text" placeholder="e.g., BCA 2nd Year" />
        </div>

        <div className="form-group">
          <label>Why do you want this internship?</label>
          <textarea placeholder="Write a few lines about your motivation..." rows="4" />
        </div>

        <div className="form-group">
          <label>Portfolio / GitHub / LinkedIn (optional)</label>
          <input type="url" placeholder="Paste any link you want to share" />
        </div>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}
