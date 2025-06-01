import { motion } from "framer-motion";
import "../styles/Services.css";
import { Link } from "react-router-dom";
import TopServicesSection from "../components/TopServicesSection";
import Contact from "../pages/Contact";
import MentionLegal from "../components/MentionLegal";

const categories = {
  Cheveux: [
    { name: "Coupe tondeuse", price: "15€" },
    { name: "Coupe ciseaux", price: "15€" },
    { name: "Rasage cranien", price: "10€" },
    { name: "Coupe enfant (-12 ans)", price: "10€" },
    { name: "Contours", price: "5€" },
    { name: "Motif", price: "(à partir de) 5€" },
    { name: "Raie", price: "OFFERT" },
  ],
  Soins: [
    { name: "Défrisage", price: "10€" },
    { name: "Curly", price: "(à partir de) 10€" },
    { name: "Décoloration", price: "10€" },
    { name: "Coloration", price: "(à partir de) 10€" },
    { name: "Polar white", price: "(à partir de) 50€" },
    { name: "Black masque", price: "7€" },
    { name: "Serviette chaude", price: "5€" },
  ],
  Barbe: [{ name: "Rasage complet", price: "10€" }],
  Formules: [
    { name: "Coupe + Barbe", price: "20€" },
    { name: "Coupe + motif", price: "20€" },
    { name: "Rasage cranien + Barbe", price: "15€" },
  ],
};

const categoryImages = {
  Cheveux: "/images/coupe1.jpg",
  Soins: "/images/soins.jpg",
  Barbe: "/images/barbe.jpeg",
  Formules: "/images/formule.jpg",
};

function Services() {
  return (
    <motion.div
      className="services-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
    >
      <TopServicesSection />
      <div className="services-header">
        <img src="/images/Divider.png" alt="divider" />
        <h1>Les menus</h1>
        <p>Découvrez nos services de coiffure et de soins capillaires.</p>
      </div>
      <div className="services-grid">
        {Object.entries(categories).map(([category, items]) => (
          <motion.div
            key={category}
            className="category-card"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Image en haut */}
            <div className="image-services">
              <img src={categoryImages[category]} alt={category} />
            </div>

            {/* Contenu texte */}
            <div className="category-info">
              <h2>{category}</h2>
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    {item.name} - <span className="price">{item.price}</span>
                  </li>
                ))}
              </ul>
              <Link to="/gallery">
                <button className="discover-btn">DÉCOUVRIR</button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="services-footer">
        <hr />
        <div className="services-footer-container">
          <h1>Nos Créations</h1>
          <p>
            Découvrez nôtre magnifique gallery avec toutes nos créations pour
            vous faire une idée
          </p>
          <div className="services-footer-btn">
            <Link to="/gallery">
              <motion.button
                className="discover-footer-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Gallerie du Bink's
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      <Contact />
      <MentionLegal />
    </motion.div>
  );
}

export default Services;
