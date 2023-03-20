import { db } from '../model/bd.js'

export const causaGet =  (_, res) => {
  db.query('SELECT * FROM causa', (err, data) => {
    if(err) return res.json(err);

    return res.status(200).json(data);
  });
}

export const causaPost =  (req, res) => {
  const nome = req.body.nome.substring(0,150);
  const descricao = req.body.descricao.substring(0,150);
  db.query(`INSERT INTO causa(nome, descricao) VALUES('${nome}','${descricao}')`, (err, data) => {
    if(err) return res.json(err);

    return res.status(200).json(data);
  });
}

export const causaPut =  (req, res) => {
  const id = req.params.id;
  const nome = req.body.nome;
  const descricao = req.body.descricao;
  db.query(`UPDATE causa SET nome='${nome}', descricao='${descricao}' WHERE ID=${id}`, (err, data) => {
    if(err) return res.json(err);

    return res.status(200).json(data);
  });
}

export const causaDelete =  (req, res) => {
  const id = parseInt(req.params.id);
  db.query(`DELETE FROM causa WHERE ID=${id}`), (err, data) => {
    if(err) return res.json(err);

    return res.json({ error:false, message: 'Excluido com sucesso!' });
  };
}

export const organizacaoGet =  (_, res) => {
  db.query('SELECT * FROM organizacao', (err, data) => {
    if(err) return res.json(err);

    return res.status(200).json(data);
  });
}

export const organizacaoPost =  (req, res) => {
  const nome = req.body.nome.substring(0,150);
  const email = req.body.email.substring(0,150);
  db.query(`INSERT INTO organizacao(nome, email) VALUES('${nome}','${email}')`, (err, data) => {
    if(err) return res.json(err);

    return res.status(200).json(data);
  });
}

export const organizacaoPut =  (req, res) => {
  const id = req.params.id;
  const nome = req.body.nome;
  const email = req.body.email;
  db.query(`UPDATE organizacao SET nome='${nome}', email='${email}' WHERE ID=${id}`, (err, data) => {
    if(err) return res.json(err);

    return res.status(200).json(data);
  });
}

export const organizacaoDelete =  (req, res) => {
  const id = parseInt(req.params.id);
  db.query(`DELETE FROM organizacao WHERE ID=${id}`), (err, data) => {
    if(err) return res.json(err);

    return res.json({ error:false, message: 'Excluido com sucesso!' });
  };
}

export const usuarioGet =  (_, res) => {
  db.query('SELECT * FROM usuario', (err, data) => {
    if(err) return res.json(err);

    return res.status(200).json(data);
  });
}

export const usuarioPost =  (req, res) => {
  const nome = req.body.nome.substring(0,150);
  const email = req.body.email.substring(0,150);
  const senha = req.body.senha.substring(0,150);
  db.query(`INSERT INTO usuario(nome, email, senha) VALUES('${nome}','${email}', '${senha}')`, (err, data) => {
    if(err) return res.json(err);
    return res.status(200).json(data);
  });
}

export const usuarioPut =  (req, res) => {
  const id = req.params.id;
  const nome = req.body.nome;
  const email = req.body.email;
  const senha = req.body.senha;
  db.query(`UPDATE usuario SET nome='${nome}', email='${email}', senha='${senha}' WHERE ID=${id}`, (err, data) => {
    if(err) return res.json(err);

    return res.status(200).json(data);
  });
}

export const usuarioDelete =  (req, res) => {
  const id = parseInt(req.params.id);
  db.query(`DELETE FROM usuario WHERE ID=${id}`), (err, data) => {
    if(err) return res.json(err);

    return res.json({ error:false, message: 'Excluido com sucesso!' });
  };
}