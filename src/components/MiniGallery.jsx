import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/MiniGallery.css";

const images = [
  { src: "/images/coupe1.jpg", title: "Dégradé Classique" },
  { src: "/images/coupe2.jpg", title: "Tresses Afro" },
  { src: "/images/coupe3.jpg", title: "Coupe Moderne" },
  { src: "/images/coupe4.jpg", title: "Boucles Naturelles" },
  { src: "/images/coupe5.jpg", title: "Rasé Style" },
];

function MiniGallery() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="mini-gallery">
      <button className="nav-button left" onClick={prevSlide}>
        <ChevronLeft size={30} />
      </button>

      <div className="image-slider">
        {images.slice(index, index + 3).map((img, i) => (
          <div key={i} className="image-cont">
            <img src={img.src} alt={img.title} />
            <h3>{img.title}</h3>
          </div>
        ))}
      </div>

      <button className="nav-button right" onClick={nextSlide}>
        <ChevronRight size={30} />
      </button>

      <button className="view-more" onClick={() => navigate("/gallery")}>
        Voir plus
      </button>

      
    </div>
  );
}

export default MiniGallery;
