import { useState } from "react";
import "../styles/Gallery.css";
import Contact from "../pages/Contact";
import VideoSection from "../components/VideoSection";
import { motion } from "framer-motion";
import MentionLegal from "../components/MentionLegal";
import DownGallerySection from "../components/DownGallerySection";
function Gallery() {
  const images = [
    { src: "/images/coupe1.jpg", name: "Dégradé Américain" },
    { src: "/images/coupe2.jpg", name: "Taper Fade" },
    { src: "/images/coupe3.jpg", name: "Coupe Texturée" },
    { src: "/images/coupe4.jpg", name: "Undercut" },
    { src: "/images/coupe5.jpg", name: "Buzz Cut" },
    { src: "/images/coupe6.jpg", name: "Pompadour" },
  ];

  // État pour stocker l'image sélectionnée
  const [selectedImage, setSelectedImage] = useState(null);

  const fadeVariants = {
    hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" }, // Caché à droite
    visible: {
      opacity: 1,
      clipPath: "inset(0 0 0 0)", // Révélé complètement
      transition: { duration: 2, ease: "easeInOut", delay: 1 },
    },
  };

  const divVariants = {
    hidden: { opacity: 0, y: "120vw", filter: "blur(20px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: "easeInOut",
        type: "tween",
        stiffness: 30,
      },
    },
    exit: {
      opacity: 0,
      y: "-100vw",
      filter: "blur(10px)",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      className="base-container"
      variants={divVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="vid-section">
        {/* Section vidéo en arrière-plan avec texte */}
        <VideoSection />
      </div>

      <div className="gallery-container">
        <motion.div
          className="gallery-grid"
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedImage(image)} // Click pour ouvrir la modale
            >
              <img src={image.src} alt={image.name} className="gallery-image" />
              <span className="gallery-title-image">{image.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
      {/* Modale qui s'affiche si une image est sélectionnée */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={selectedImage.src} alt={selectedImage.name} />
            <span>{selectedImage.name}</span>
          </div>
        </div>
      )}
      <DownGallerySection />
      <Contact />
      <MentionLegal />
    </motion.div>
  );
}

export default Gallery;
