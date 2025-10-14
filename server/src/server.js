import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 👇 Add this line
app.get("/", (req, res) => {
  res.send("Hello from translate-app backend!");
});

app.post("/api/translate", (req, res) => {
  const { text, targetLang } = req.body;
  res.json({ translated: `${text} (mock translated to ${targetLang})` });
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
