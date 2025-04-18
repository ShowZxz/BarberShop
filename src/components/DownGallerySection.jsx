import "../styles/DownGallerySection.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function DownGallerySection() {
  return (
    <div className="services-footer">
      <hr />
      <div className="services-footer-container">
        <h1>Nos Services</h1>
        <p>
          Découvrez de magnifique services avec toutes nos formule pour vous
          faire une idée
        </p>
        <div className="services-footer-btn">
          <Link to="/services">
            <motion.button
              className="discover-footer-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Nos Services
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DownGallerySection;
