import { useState, useEffect } from "react";
import "../styles/Reviews.css";

function Reviews() {
  // Charger les avis depuis localStorage au démarrage
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem("reviews");
    return savedReviews
      ? JSON.parse(savedReviews)
      : [
          {
            name: "Alice",
            rating: 5,
            comment: "Super salon ! Coupe parfaite.",
          },
          { name: "Jean", rating: 4, comment: "Très pro, je recommande." },
        ];
  });

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  });
  const [showAll, setShowAll] = useState(false); // Permet d'afficher tous les avis ou non
  const [lastReviewTime, setLastReviewTime] = useState(
    localStorage.getItem("lastReviewTime") || 0
  );

  // Mettre à jour localStorage quand les avis changent
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const now = Date.now();
    const timeDiff = now - lastReviewTime; // Différence en millisecondes
    const minutesSinceLastReview = timeDiff / (1000 * 60);

    if (minutesSinceLastReview < 5) {
      alert("Vous devez attendre 5 minutes avant de laisser un nouvel avis.");
      return;
    }

    if (newReview.name && newReview.comment) {
      const updatedReviews = [...reviews, newReview];
      setReviews(updatedReviews);
      setNewReview({ name: "", rating: 5, comment: "" });
      setLastReviewTime(now);
      localStorage.setItem("lastReviewTime", now);
    }
  };

  return (
    <div className="reviews-container">
      <h1>Avis Clients</h1>

      {/* Liste des avis */}
      {(showAll ? reviews : reviews.slice(0, 5)).map((review, index) => (
        <div key={index} className="review-card">
          <h3>
            {review.name} - {"⭐".repeat(review.rating)}
          </h3>
          <p>{review.comment}</p>
        </div>
      ))}

      {/* Bouton "Voir plus" si plus de 5 avis */}
      {reviews.length > 5 && (
        <button onClick={() => setShowAll(!showAll)} className="toggle-btn">
          {showAll ? "Voir moins" : "Voir plus"}
        </button>
      )}

      {/* Formulaire pour ajouter un avis */}
      <h2>Laissez un avis</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={newReview.name}
          onChange={handleChange}
          required
        />
        <select name="rating" value={newReview.rating} onChange={handleChange}>
          {[5, 4, 3, 2, 1].map((num) => (
            <option key={num} value={num}>
              {num} ⭐
            </option>
          ))}
        </select>
        <textarea
          name="comment"
          placeholder="Votre avis"
          value={newReview.comment}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-btn">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Reviews;
