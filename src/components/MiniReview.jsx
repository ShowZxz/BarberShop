import "../styles/MiniReview.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MiniReview() {
  const [avis, setAvis] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/avis/recent")
      .then((res) => res.json())
      .then((data) => {
        setAvis(data);
      })
      .catch((err) => console.error("Erreur de chargement des avis :", err));
  }, []);

  return (
    <div className="mini-review">
      <h1>Les avis des clients</h1>
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
      <div className="avis-button-container">
        <Link to="/reviews" className="avis-link">
          <button className="avis-button">Laisser un avis</button>
        </Link>
      </div>
    </div>
  );
}

export default MiniReview;
