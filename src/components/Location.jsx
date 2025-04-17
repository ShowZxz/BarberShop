import "../styles/Location.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Location() {
  const [isVisible, setIsVisible] = useState(false);
  const locationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Met à jour l'état si visible
      },
      { threshold: 0.5 } // Déclenche si 50% du composant est visible
    );

    if (locationRef.current) {
      observer.observe(locationRef.current);
    }

    return () => {
      if (locationRef.current) {
        observer.unobserve(locationRef.current);
      }
    };
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" }, // Caché à droite
    visible: {
      opacity: 1,
      clipPath: "inset(0 0 0 0)", // Révélé complètement
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className="location-container" ref={locationRef}>
      <motion.h1
        className="location-title"
        variants={titleVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"} // Anime uniquement si visible
      >
        Où nous trouver ? 📍
      </motion.h1>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6687803305012!2d2.4190712045420284!3d48.70487992137744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e675428c2a57ad%3A0x6da03c66fcf8a0da!2sLe%20Binks%20Barbershop!5e0!3m2!1sfr!2sfr!4v1743847908347!5m2!1sfr!2sfr"
          width="1000"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="address-container" ref={locationRef}>
        <motion.h2
          className="adress-title"
          variants={titleVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          Adresse :
        </motion.h2>
        <motion.p
          className="adress-text"
          variants={titleVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            navigator.clipboard.writeText(
              "3 Pl. du 14 Juillet, 91270 Vigneux-sur-Seine"
            );
            alert("Adresse copiée dans le presse-papiers !");
          }}
          style={{ cursor: "pointer" }}
        >
          3 Pl. du 14 Juillet, 91270 Vigneux-sur-Seine 📋
        </motion.p>
        <motion.a
          href="https://maps.app.goo.gl/rC6PywG2tpXogdj49"
          target="_blank"
          rel="noopener noreferrer"
          className="map-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Voir sur Google Maps
        </motion.a>
      </div>
    </div>
  );
}

export default Location;
