function Services() {
  const categories = {
    "Cheveux": [
      {name: "Coupe tondeuse", price: "15€" },
      {name: "Coupe ciseaux", price: "15€" },
      {name: "Rasage cranien", price: "10€" },
      {name:"Coupe enfant (-12 ans)", price:"10€"},
      {name:"Contours", price:"5€"},
      {name:"Motif", price:"(à partir de) 5€"},
      {name:"Raie", price:"OFFERT"}
    ],
    "Soins cheveux": [
      { name: "Défrisage", price: "10€" },
      { name: "Curly", price: "(à partir de) 10€"},
      { name: "Décoloration", price: "10€" },
      { name: "Coloration", price: "(à partir de) 10€" },
      { name: "Polar white", price: "(à partir de) 50€" }
    ],
    "Soins visage": [
      { name: "Black masque", price: "7€" },
      { name: "Serviette chaude", price: "5€" }
    ],
    "Barbe": [
      { name: "Rasage complet", price: "10€" }
      
    ],
    "Formules": [
      { name: "Coupe + Barbe", price: "20€" },
      { name: "Coupe + motif", price: "20€" },
      { name: "Rasage cranien + Barbe", price: "15€" }
      
    ]
  };

  return (
    <div>
      <h1>Nos Services</h1>
      <div style={{ textAlign: "center" }}>
        {Object.keys(categories).map((category, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h2 style={{ color: "#8B0000" }}>{category}</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {categories[category].map((service, i) => (
                <li key={i} style={{ fontSize: "18px", margin: "5px 0" }}>
                  {service.name} - <strong>{service.price}</strong>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
