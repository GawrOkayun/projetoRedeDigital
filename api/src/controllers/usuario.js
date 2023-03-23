import UsuarioRepository from "../models/usuarioModel.js";

function findAll(req, res) {
  UsuarioRepository.findAll().then((result) => res.json(result));
}

function findUsuario(req, res) {
  UsuarioRepository.findByPk(req.params.id).then((result) => res.json(result));
}

function addUsuario(req, res) {
  UsuarioRepository.create({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
    data_de_nascimento: req.body.data_de_nascimento,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    papel: req.body.papel
  }).then((result) => res.json(result));
}

async function updateUsuario(req, res) {
  await UsuarioRepository.update(
    {
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
      data_de_nascimento: req.body.data_de_nascimento,
      endereco: req.body.endereco,
      telefone: req.body.telefone,
      papel: req.body.papel
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  UsuarioRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteUsuario(req, res) {
  await UsuarioRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  UsuarioRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addUsuario, findUsuario, updateUsuario, deleteUsuario };