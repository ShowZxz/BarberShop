import "../styles/Horaire.css";

function Horaire() {
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
      heuresOpen: "09:00",
      heuresClose: "19:00",
      close: "Fermeture",
    },
    {
      jour: "Mercredi",
      open: "Ouverture",
      heuresOpen: "09:00",
      heuresClose: "19:00",
      close: "Fermeture",
    },
    {
      jour: "Jeudi",
      open: "Ouverture",
      heuresOpen: "09:00",
      heuresClose: "19:00",
      close: "Fermeture",
    },
    {
      jour: "Vendredi",
      open: "Ouverture",
      heuresOpen: "09:00",
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
      heuresOpen: "Fermé",
      heuresClose: "Fermé",
      close: "Fermeture",
    },
  ];

  const jourActuel = "Lundi"; // tu peux aussi utiliser new Date().getDay() si tu veux le jour réel

  const aujourdhui = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const aujourdHuiIndex = new Date().getDay();
  const indexJour = aujourdHuiIndex === 0 ? 6 : aujourdHuiIndex - 1;

  return (
    <div className="horaire-container">
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
              index === indexJour ? "aujourdhui" : ""
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
