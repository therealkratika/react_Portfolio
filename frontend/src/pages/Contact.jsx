import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* HEADER */}
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>
            Have a project in mind or want to collaborate? I’d love to hear from you.
          </p>
        </div>

        {/* CONTACT INFO */}
        <div className="contact-cards">

          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <a href="mailto:kratika@example.com">
              kratika@example.com
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Phone</h3>
            <a href="tel:+1234567890">
              +1 (234) 567-890
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Location</h3>
            <p>Available for remote work</p>
          </div>

        </div>

        {/* EXTRA NOTE */}
        <div className="contact-note">
          <h4>Let’s Connect</h4>
          <p>
            I’m always open to discussing new opportunities, collaborations,
            or creative ideas. Feel free to reach out anytime.
          </p>
        </div>

      </div>
    </section>
  );
}
