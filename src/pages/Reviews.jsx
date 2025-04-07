import { useEffect, useState } from "react";
import "../styles/Reviews.css";

function Reviews() {
  const [avis, setAvis] = useState([]);

  // 🔁 Charger les avis au chargement
  useEffect(() => {
    fetch("http://localhost:5000/api/avis")
      .then((res) => res.json())
      .then((data) => {
        setAvis(data);
      })
      .catch((err) => console.error("Erreur de chargement des avis :", err));
  }, []);

  //Ajouter un avis
  const [formData, setFormData] = useState({
    pseudo: "",
    message: "",
    rating: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Données envoyées au serveur :", formData); // 🔍 Debug avant envoi

    fetch("http://localhost:5000/api/avis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.error);
          });
        }
        return res.json();
      })
      .then((data) => {
        setAvis((prev) => [data.avis, ...prev]);
        setFormData({ pseudo: "", message: "", rating: 5 });
        setError(""); // Réinitialiser l'erreur
      })
      .catch((err) => {
        setError(err.message); // Afficher l'erreur
      });
  };

  return (
    <div className="reviews-container">
      <h1>Les avis des clients</h1>
      <ul className="avis-list">
        {avis.map((item) => (
          <li key={item.id} className="avis-item">
            <h3>
              {item.pseudo} — <span className="rating">⭐ {item.rating}/5</span>
            </h3>
            <p>{item.message}</p>
            <small>{new Date(item.date).toLocaleDateString("fr-FR")}</small>
          </li>
        ))}
      </ul>
      {/* Formulaire d'ajout d'avis */}
      <h2>Laisser un avis</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="avis-form">
        <input
          type="text"
          name="pseudo"
          placeholder="Votre pseudo"
          value={formData.pseudo}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <select name="rating" value={formData.rating} onChange={handleChange}>
          <option value={5}>5 - Excellent ⭐⭐⭐⭐⭐</option>
          <option value={4}>4 - Très bien ⭐⭐⭐⭐</option>
          <option value={3}>3 - Moyen ⭐⭐⭐</option>
          <option value={2}>2 - Bof ⭐⭐</option>
          <option value={1}>1 - Nul ⭐</option>
        </select>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Reviews;
