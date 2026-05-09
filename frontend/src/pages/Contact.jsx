import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>
            Have a project in mind or want to collaborate? I’d love to hear from you.
          </p>
        </div>

        <div className="contact-cards">

          <div className="contact-card">
            <div className="contact-icon">
              <MdEmail />
            </div>

            <h3>Email</h3>

            <a href="mailto:therealkratika@gmail.com">
              therealkratika@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <h3>Phone</h3>

            <a href="tel:+919769966000">
              +91 9769966000
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <IoLocationSharp />
            </div>

            <h3>Location</h3>
            <p>Available for remote work</p>
          </div>

        </div>

        <div className="contact-note">
          <h4>Let’s Connect</h4>

          <p>
            I’m always open to discussing new opportunities,
            collaborations, or creative ideas. Feel free to reach out anytime.
          </p>
        </div>

      </div>
    </section>
  );
}