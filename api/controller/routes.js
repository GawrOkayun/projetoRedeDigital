import express from 'express';
import { execSQLQuery } from '../model/bd.js'

const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

app.listen(port);

app.get('/clientes', (req, res) => {
  execSQLQuery('SELECT * FROM teste1', res);
})

app.post('/clientes', (req, res) => {
    const nome = req.body.nome.substring(0,150);
    const cpf = req.body.cpf.substring(0,11);
    execSQLQuery(`INSERT INTO teste1(Nome, CPF) VALUES('${nome}','${cpf}')`, res);
});

app.patch('/clientes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const nome = req.body.nome.substring(0,150);
    const cpf = req.body.cpf.substring(0,11);
    execSQLQuery(`UPDATE teste1 SET Nome='${nome}', CPF='${cpf}' WHERE ID=${id}`, res);
})

app.delete('/clientes/:id', (req, res) =>{
    execSQLQuery('DELETE FROM teste1 WHERE ID=' + parseInt(req.params.id), res);
})