import express, { json } from "express";
import crypto from "node:crypto";
import { Article, NewArticle } from "./interfaces/Article";

const app = express.Router();

const articles: Article[] = [
  { id: "1", name: "tournevis", price: 2.75, qty: 120 },
  { id: "2", name: "marteau", price: 5.78, qty: 48 },
  { id: "3", name: "vis", price: 0.06, qty: 540 },
  { id: "4", name: "clou", price: 0.03, qty: 541 },
];

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.use(json());

app.post("/articles", (req, res) => {
  const newArticle: NewArticle = req.body;

  const article = { ...newArticle, id: crypto.randomUUID() };
  articles.push(article);
  res.status(201).end();
});

// app.delete("/articles", (req, res) => {
//   //const delArticle =
//   this.articles = articles.filter((a) => !ids.includes(a.id));
// });

export const api = app;
