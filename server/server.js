const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 5000;

const filePath = "./data/avis.json";

app.use(cors());
app.use(express.json());

// ➕ Ajouter un avis
app.post("/api/avis", (req, res) => {
  const { pseudo, message } = req.body;
  if (!pseudo || !message) {
    return res.status(400).json({ error: "Champs manquants" });
  }

  const avisData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const newAvis = {
    id: Date.now(),
    pseudo,
    message,
    rating,
    date: new Date().toISOString(),
  };

  avisData.push(newAvis);
  fs.writeFileSync(filePath, JSON.stringify(avisData, null, 2));

  res.status(201).json({ message: "Avis ajouté", avis: newAvis });
});

// 📥 Lire tous les avis triés du plus récent au plus ancien
app.get("/api/avis", (req, res) => {
  const avisData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const sortedAvis = avisData.sort((a, b) => new Date(b.date) - new Date(a.date));
  res.json(sortedAvis);
});

// 🗑️ Supprimer un avis (optionnel, si tu veux l'utiliser plus tard)
app.delete("/api/avis/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let avisData = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const initialLength = avisData.length;
  avisData = avisData.filter((a) => a.id !== id);

  if (avisData.length === initialLength) {
    return res.status(404).json({ error: "Avis non trouvé" });
  }

  fs.writeFileSync(filePath, JSON.stringify(avisData, null, 2));
  res.json({ message: "Avis supprimé" });
});

app.listen(PORT, () => {
  console.log(`Serveur en ligne sur http://localhost:${PORT}`);
});
