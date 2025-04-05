import "../styles/Location.css";

function Location() {
  return (
    <div className="location-container">
      <h1>Où nous trouver ?</h1>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6687803305012!2d2.4190712045420284!3d48.70487992137744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e675428c2a57ad%3A0x6da03c66fcf8a0da!2sLe%20Binks%20Barbershop!5e0!3m2!1sfr!2sfr!4v1743847908347!5m2!1sfr!2sfr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="address-container">
        <h2>Adresse :</h2>
        <p>3 Pl. du 14 Juillet, 91270 Vigneux-sur-Seine</p>
        <a
          href="https://maps.app.goo.gl/rC6PywG2tpXogdj49"
          target="_blank"
          rel="noopener noreferrer"
          className="map-button"
        >
          Voir sur Google Maps
        </a>
      </div>
    </div>
  );
}

export default Location;
