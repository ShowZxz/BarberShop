import "../styles/BannerPresentation.css";
import { delay, motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaPhoneAlt,
} from "react-icons/fa"; // Import des icônes

function BannerPresentation() {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 30, duration: 1, delay: 1 },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.5 },
    },
  };

  const shakeVariants = {
    hidden: { x: 0, y: 0 },
    visible: { x: 0, y: 0 },
    shake: {
      x: [0, -2, 2, -2, 2, 0],
      y: [-2, 0, -2, 2, 0, 2],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: 1,
      },
    },
  };

  const text =
    "Découvrez une nouvelle façon de se couper les cheveux. Le Bink’s Barbershop, c’est plus qu’un salon : c’est une ambiance, une équipe passionnée, une expertise au service de votre style. Ici, on ne vous coiffe pas seulement — on vous conseille, on vous écoute, on vous transforme. ";
  const letters = text.split(""); // Divise le texte en lettres

  const letterVariants = {
    hidden: { opacity: 0, y: 50 }, // Chaque lettre commence invisible et en bas
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05, // Ajoute un délai pour chaque lettre
        duration: 0.5,
      },
    }),
  };
  return (
    <div className="banner-container">
      <motion.img
        className="banner-main-title"
        src="/images/logo_banner.png"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      ></motion.img>
      <div className="banner-zones">
        <div className="banner-content">
          <motion.img
            src="./images/LOGO_BINKS_BARBERSHOP.png"
            alt="Logo"
            className="logo-presentation"
            variants={shakeVariants}
            initial="hidden"
            animate="visible"
            whileHover="shake"
          />
          <h1 className="banner-title">Le Bink's Barbershop</h1>
          <div className="animated-text">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                custom={index} // Passe l'index comme paramètre
                variants={letterVariants}
                initial="hidden"
                animate="visible"
              >
                {letter === " " ? "\u00A0" : letter} {/* Gère les espaces */}
              </motion.span>
            ))}
          </div>
          {/* Icônes Réseaux Sociaux */}
          <div className="social-icons">
            <a
              href="https://www.facebook.com/Le-Binks-Barbershop-100054430001781"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="icon" />
            </a>
            <a
              href="https://www.instagram.com/lebinks.barber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://snapchat.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSnapchatGhost className="icon" />
            </a>
            <a href="tel:+33123456789">
              <FaPhoneAlt className="icon" />
            </a>
          </div>
        </div>

        <div className="banner-overlay">
          <video autoPlay loop muted playsInline className="side-video">
            <source src="/video/barber.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </div>
    </div>
  );
}

export default BannerPresentation;
