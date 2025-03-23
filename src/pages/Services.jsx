import { motion } from "framer-motion";
import "../styles/Services.css";
import { Link } from "react-router-dom";
import TopServicesSection from "../components/TopServicesSection";

const categories = {
  Cheveux: [
    { name: "Coupe tondeuse", price: "15€" },
    { name: "Coupe ciseaux", price: "15€" },
    { name: "Rasage cranien", price: "10€" },
    { name: "Coupe enfant (-12 ans)", price: "10€" },
    { name: "Contours", price: "5€" },
    { name: "Motif", price: "(à partir de) 5€" },
    { name: "Raie", price: "OFFERT" }
  ],
  Soins: [
    { name: "Défrisage", price: "10€" },
    { name: "Curly", price: "(à partir de) 10€" },
    { name: "Décoloration", price: "10€" },
    { name: "Coloration", price: "(à partir de) 10€" },
    { name: "Polar white", price: "(à partir de) 50€" },
    { name: "Black masque", price: "7€" },
    { name: "Serviette chaude", price: "5€" }
  ],
  Barbe: [
    { name: "Rasage complet", price: "10€" }
  ],
  Formules: [
    { name: "Coupe + Barbe", price: "20€" },
    { name: "Coupe + motif", price: "20€" },
    { name: "Rasage cranien + Barbe", price: "15€" }
  ]
};

const categoryImages = {
  Cheveux: "/images/coupe1.jpg",
  Soins: "/images/coupe1.jpg",
  Barbe: "/images/coupe1.jpg",
  Formules: "/images/coupe1.jpg"
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

      <div className="services-grid">
        {Object.entries(categories).map(([category, items]) => (
          <div key={category} className="category-card">
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
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Services;
