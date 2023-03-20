import express from 'express';
import useRotas from '../rotas.js'
import cors from "cors";

const app = express();
const port = 3300;

app.use(express.json());
app.use(cors());
app.use('/', useRotas)
app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

app.listen(port);