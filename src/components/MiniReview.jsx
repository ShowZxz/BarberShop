import "../styles/MiniReview.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function MiniReview() {
  const [isVisible, setIsVisible] = useState(false);
  const miniReviewRef = useRef(null);
  const [avis, setAvis] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Met à jour l'état si visible
      },
      { threshold: 0.5 } // Déclenche si 50% du composant est visible
    );

    if (miniReviewRef.current) {
      observer.observe(miniReviewRef.current);
    }

    return () => {
      if (miniReviewRef.current) {
        observer.unobserve(miniReviewRef.current);
      }
    };
  }, []);

  useEffect(() => {
    fetch("/api/avis/recent")
      .then((res) => res.json())
      .then((data) => {
        setAvis(data);
      })
      .catch((err) => console.error("Erreur de chargement des avis :", err));
  }, []);

  const titleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: [1, 1.1, 1, 1.1, 1],
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className="mini-review">
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        Les avis des clients
      </motion.h1>
      <div className="avis-container">
        {avis.map((item) => (
          <div key={item.id} className="avis-item">
            <p className="avis-pseudo">
              <strong>{item.pseudo}</strong> —{" "}
              <span className="rating">⭐ {item.rating}/5</span>
            </p>
            <p className="avis-message">{item.message}</p>
            <small className="avis-date">
              {new Date(item.date).toLocaleDateString("fr-FR")}
            </small>
          </div>
        ))}
      </div>
      <div className="avis-button-container" ref={miniReviewRef}>
        <Link to="/reviews" className="avis-link">
          <motion.button
            className="avis-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Laisser un avis
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default MiniReview;
