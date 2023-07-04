import express, { NextFunction, Request, Response } from "express";
import serveIndex from "serve-index";

const app = express();
const port = 3000;
const publicDir = ".";
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log("req = " + req.method + req.url);
  next();
};

app.use(logger);
app.use((req, res, next) => {
  // console.log("req = " + req.method + req.url);
  next();
});

// controle si c'est un fichier
app.use(express.static(publicDir));

app.use(serveIndex(publicDir, { icons: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`test Example app listening on port ${port}`);
});
