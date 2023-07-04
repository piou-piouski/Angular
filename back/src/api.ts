import express from "express";
import { Article } from "./interfaces/article";

const app = express.Router();

const articles: Article[] = [
  { id: "a1", name: "tournevis", price: 2.75, qty: 120 },
  { id: "a2", name: "marteau", price: 5.78, qty: 48 },
];

app.get("/articles", (req, res) => {
  res.json(articles);
});

export const api = app;
