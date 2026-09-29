// src/index.ts
import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello TypeScript + Express!");
});

app.get("/conflict", (req, res) => {
  res.send("Je veux du confit !!!");
});

app.get("/conflict-second", (req, res) => {
  res.send("Je veux du confit !!!");
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

export default app;
