import { useEffect, useRef, useState } from "react";
import "../styles/Horaire.css";

function Horaire() {
  const [isVisible, setIsVisible] = useState(false);
  const horaireRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Met à jour l'état si visible
      },
      { threshold: 0.5 } // Déclenche si 50% du composant est visible
    );

    if (horaireRef.current) {
      observer.observe(horaireRef.current);
    }

    return () => {
      if (horaireRef.current) {
        observer.unobserve(horaireRef.current);
      }
    };
  }, []);

  const horaires = [
    {
      jour: "Lundi",
      open: "Ouverture",
      heuresOpen: "Fermé",
      heuresClose: "Fermé",
      close: "Fermeture",
    },
    {
      jour: "Mardi",
      open: "Ouverture",
      heuresOpen: "10:00",
      heuresClose: "19:00",
      close: "Fermeture",
    },
    {
      jour: "Mercredi",
      open: "Ouverture",
      heuresOpen: "10:00",
      heuresClose: "19:00",
      close: "Fermeture",
    },
    {
      jour: "Jeudi",
      open: "Ouverture",
      heuresOpen: "10:00",
      heuresClose: "19:00",
      close: "Fermeture",
    },
    {
      jour: "Vendredi",
      open: "Ouverture",
      heuresOpen: "10:00",
      heuresClose: "19:00",
      close: "Fermeture",
    },
    {
      jour: "Samedi",
      open: "Ouverture",
      heuresOpen: "10:00",
      heuresClose: "18:00",
      close: "Fermeture",
    },
    {
      jour: "Dimanche",
      open: "Ouverture",
      heuresOpen: "12:00",
      heuresClose: "18:00",
      close: "Fermeture",
    },
  ];

  const aujourdhui = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const aujourdHuiIndex = new Date().getDay();
  const indexJour = aujourdHuiIndex === 0 ? 6 : aujourdHuiIndex - 1;

  return (
    <div className="horaire-container" ref={horaireRef}>
      <div className="horaire-top">
        <img
          src="/images/lhorloge.png"
          alt="LogoHoraire"
          className="logo-horaire"
        />
        <h2 className="horaire-title">Horaires d'ouverture</h2>
        <p className="date-jour">Nous sommes {aujourdhui}</p>
      </div>

      <div className="horaire-description">
        {horaires.map((horaire, index) => (
          <div
            key={index}
            className={`horaire-item ${
              index === indexJour
                ? isVisible
                  ? "aujourdhui clignote"
                  : "aujourdhui"
                : ""
            }`}
          >
            <h3>{horaire.jour}</h3>
            <h4>
              {horaire.open}
              <p>{horaire.heuresOpen}</p>
            </h4>
            <h4>
              {horaire.close}
              <p>{horaire.heuresClose}</p>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Horaire;
