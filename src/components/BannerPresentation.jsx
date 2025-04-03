import "../styles/BannerPresentation.css";
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaPhoneAlt } from "react-icons/fa"; // Import des icônes


function BannerPresentation() {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <img src="/images/logo.jpg" alt="Logo" className="logo-presentation" />
        <h1 className="banner-title">Le Bink's Barbershop</h1>
        <p className="banner-slogan">Découvrez une nouvelle façon de se couper les cheveux. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget erat placerat, interdum velit a, elementum orci. In tempor turpis.</p>
         {/* Icônes Réseaux Sociaux */}
         <div className="social-icons">
          <a href="https://www.facebook.com/Le-Binks-Barbershop-100054430001781" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="icon" />
          </a>
          <a href="https://www.instagram.com/lebinks.barber" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">
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
  );
}

export default BannerPresentation;
