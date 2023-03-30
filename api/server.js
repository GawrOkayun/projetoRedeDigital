import express from "express";
import routes from "./routes.js";
import db from "./src/db.js";
import { body, validationResult } from 'express-validator'
import cors from 'cors'

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.post('causas', [
  body('nome').isLength({min: 3})
], (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
  }
})

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(3300, () => console.log("Servidor iniciado na porta 3300"));