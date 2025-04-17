import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/MiniGallery.css";
import { motion } from "framer-motion";
const images = [
  { src: "/images/coupe1.jpg", title: "Dégradé Classique" },
  { src: "/images/coupe2.jpg", title: "Tresses Afro" },
  { src: "/images/coupe3.jpg", title: "Coupe Moderne" },
  { src: "/images/coupe4.jpg", title: "Boucles Naturelles" },
  { src: "/images/coupe5.jpg", title: "Rasé Style" },
];

function MiniGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const miniGalleryRef = useRef(null);

  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Met à jour l'état si visible
      },
      { threshold: 0.5 } // Déclenche si 50% du composant est visible
    );

    if (miniGalleryRef.current) {
      observer.observe(miniGalleryRef.current);
    }

    return () => {
      if (miniGalleryRef.current) {
        observer.unobserve(miniGalleryRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const titleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: [1, 1.1, 1, 1.1, 1],
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const fadeVariants = {
    hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" }, // Caché à droite
    visible: {
      opacity: 1,
      clipPath: "inset(0 0 0 0)", // Révélé complètement
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  return (
    <div className="mini-gallery" ref={miniGalleryRef}>
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        Notre galerie 📸
      </motion.h2>
      <p>Découvrez nos dernières créations</p>
      <button className="nav-button left" onClick={prevSlide}>
        <ChevronLeft size={30} />
      </button>

      <div className="image-slider" ref={miniGalleryRef}>
        {images.slice(index, index + 3).map((img, i) => (
          <div key={i} className="image-cont">
            <motion.img
              src={img.src}
              alt={img.title}
              whileHover={{ scale: 1.05 }}
              variants={fadeVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <h3>{img.title}</h3>
          </div>
        ))}
      </div>

      <button className="nav-button right" onClick={nextSlide}>
        <ChevronRight size={30} />
      </button>

      <motion.button
        className="view-more"
        onClick={() => navigate("/gallery")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Voir plus
      </motion.button>
    </div>
  );
}

export default MiniGallery;
