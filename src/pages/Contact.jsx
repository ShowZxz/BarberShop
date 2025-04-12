import { Facebook, Instagram, Mail } from "lucide-react"; // Pas d'icône Snapchat, on enlève l'import
import "../styles/Contact.css";
import { FaSnapchatGhost, FaPhoneAlt } from "react-icons/fa";
function Contact() {
  return (
    <div className="contact-container">
      <img className="contact-logo" src="/vite.svg" />
      <h1 className="contact-title">Contactez-nous</h1>
      <div className="social-email">
        <Mail size={24} className="icon-mail" />
        <a href="mailto:Adresse@mail.com" className="email">
          Adresse@mail.com
        </a>
      </div>
      <p className="follow">Suivez-nous sur nos réseaux sociaux :</p>
      <div className="social-buttons">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/Le-Binks-Barbershop-100054430001781"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn facebook"
        >
          <Facebook size={24} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/lebinks.barber"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn instagram"
        >
          <Instagram size={24} />
        </a>

        {/* Snapchat (Image SVG à la place) */}
        <div className="social-btn snapchat">
          <a
            href="https://snapchat.com"
            target="_blank"
            rel="noopener noreferrer"
            className="snapchat-link"
          >
            <FaSnapchatGhost className="snap-icon" />

            <span className="snap-username">@lebinks.barber</span>
          </a>
        </div>
        {/* Phone */}
        <div className="social-btn phone">
          <a href="tel:+33123456789" className="phone-link">
            <FaPhoneAlt className="phone-icon" />

            <span className="phonenumber">01.87.90.05.97</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
