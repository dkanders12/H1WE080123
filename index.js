import express from "express";
import dotenv from "dotenv";
import db from "./Config/db.config.js";
dotenv.config();

const app = express();

// Router
app.get("/", (req, res) => {
  res.send("Velkommen til min hjemmeside");
});

// Sangliste - med GET parameter eksempel
app.get("/songs", (req, res) => {
  db.query(
    `SELECT id,title 
				FROM song`,
    (error, result) => {
      res.json(result);
    }
  );
});

// Sangdetaljer - med URL parameter
app.get("/songs/:id([0-9]*)", (req, res) => {
  console.log(req.params);
  res.send("Sange - Detaljer");
});

// Opret ny sang
app.post("/songs", (req, res) => {
  res.send("Sange - Opret ny sang");
});

// 404
app.get("*", (req, res) => {
  res.send("Siden du leder efter, blev ikke fundet");
});

app.listen(process.env.PORT, () => {
  console.log(`Server kører på port http://localhost:${process.env.PORT}`);
});
