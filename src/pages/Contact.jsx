import { Facebook, Instagram, Mail } from "lucide-react"; // Pas d'icône Snapchat, on enlève l'import
import "../styles/Contact.css";
import { FaSnapchatGhost, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const logoVariants = {
    animate: {
      rotate: [0, 360], // Tourne de 0° à 360°
      transition: {
        duration: 2, // Durée d'un tour complet
        ease: "easeInOut",
        repeat: Infinity, // Répète l'animation à l'infini
        repeatDelay: 1, // Pause de 1 seconde entre chaque répétition
      },
    },
  };

  return (
    <div className="contact-container">
      <motion.img
        className="contact-logo"
        src="./images/LOGO_BINKS_BARBERSHOP.png"
        variants={logoVariants}
        animate="animate"
      />
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
            href="https://snapchat.com/add/lebinks.barber"
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
