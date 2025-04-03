import { useState } from "react";
import "../styles/Gallery.css";
import Contact from "../pages/Contact";
import BannerPresentation from "../components/BannerPresentation"; 

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

  return (
    <div className="base-container">
      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedImage(image)} // Click pour ouvrir la modale
            >
              <img src={image.src} alt={image.name} className="gallery-image" />
              <span className="gallery-title">{image.name}</span>
            </div>
          ))}
        </div>
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

      <Contact />
      <BannerPresentation /> {/* Ajout de la bannière de présentation */}
    </div>
  );
}

export default Gallery;
