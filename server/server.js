const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 5000;
const path = require("path");

const filePath = path.join(__dirname, "data","avis.json");
const bannedWordsPath = path.join(__dirname, "data", "banword.txt");

app.use(cors());
app.use(express.json());

const loadBannedWords = () => {
  const data = fs.readFileSync(bannedWordsPath, "utf8");
  return data.split("\n").map((word) => word.trim().toLowerCase());
};

const bannedWords = loadBannedWords();

// ➕ Ajouter un avis
app.post("/api/avis", (req, res) => {
  console.log("Requête POST reçue avec :", req.body); 

  const { pseudo, message, rating } = req.body;
    console.log("Reçu :", pseudo, message, rating);
  if (!pseudo || !message || !rating) {
    console.log("❌ Champs manquants :", { pseudo, message, rating }); 
    return res.status(400).json({ error: "Champs manquants" });
  }
  if (message.length < 10) {
    console.log("❌ Message trop court :", message); 
    return res.status(400).json({ error: "Le message doit contenir au moins 10 caractères." });
  }
  if (message.length > 500) {
    console.log("❌ Message trop long :", message);
    return res.status(400).json({ error: "Le message doit contenir au maximum 500 caractères." });
  }
  const containsBannedWord = bannedWords.some((word) =>
    message.toLowerCase().includes(word) || pseudo.toLowerCase().includes(word)
  
  );

  if (containsBannedWord) {
    console.log("❌ Message contient un mot interdit :", message, pseudo);
    return res.status(400).json({ error: "Votre message ou pseudo contient des mots interdits." });
  }
  
  try {
    const avisData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    console.log("Données d'avis lues :", avisData); // 👈 Debug 3
    const newAvis = {
      id: Date.now(),
      pseudo,
      message,
      rating,
      date: new Date().toISOString(),
    };

    avisData.push(newAvis);

    fs.writeFileSync(filePath, JSON.stringify(avisData, null, 2));

    console.log("✅ Avis ajouté :", newAvis);

    return res.status(201).json({ message: "Avis ajouté", avis: newAvis }); // Ajout du return
  } catch (error) {
    console.error("Erreur lors de l'écriture du fichier :", error);
    return res.status(500).json({ error: "Erreur interne du serveur" }); // Ajout du return
  }
});


// 📥 Lire tous les avis triés du plus récent au plus ancien
app.get("/api/avis", (req, res) => {
  const avisData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const sortedAvis = avisData.sort((a, b) => new Date(b.date) - new Date(a.date));
  const recentAvis = sortedAvis.slice(0, 5); // Récupère les 10 premiers avis
  res.json(recentAvis);
});

app.get("/api/avis/recent", (req, res) => {
  const avisData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const sortedAvis = avisData.sort((a, b) => new Date(b.date) - new Date(a.date));
  const recentAvis = sortedAvis.slice(0, 3); // Récupère les 3 premiers avis les plus récents
  res.json(recentAvis);
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



// Serve les fichiers React buildés
app.use(express.static(path.join(__dirname, "..", "dist")));

// Fallback pour React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});