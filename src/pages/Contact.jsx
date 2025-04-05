import { Facebook, Instagram, Mail } from "lucide-react"; // Pas d'icône Snapchat, on enlève l'import
import "../styles/Contact.css";
function Contact() {
  return (
    <div className="contact-container">
      <h1>Contactez-nous</h1>
      <div className="social-email">
        <Mail size={24} className="icon-mail" />
        <span className="email">Adresse@mail.com </span>
      </div>
      <p>Suivez-nous sur nos réseaux sociaux :</p>
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
          <img
            src="/images/Snapchat.png"
            alt="Snapchat"
            className="snap-icon"
          />
          <span className="snap-username">@lebinks.barber</span>
        </div>
        {/* Phone */}
        <div className="social-btn phone">
          <img
            src="/images/mobile.png"
            alt="Téléphone"
            className="phone-icon"
          />
          <span className="phonenumber">01.87.90.05.97</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
