import CausaRepository from "../models/causaModel.js";

function findAll(req, res) {
  CausaRepository.findAll().then((result) => res.json(result));
}

function findCausa(req, res) {
  CausaRepository.findByPk(req.params.id).then((result) => res.json(result));
}

function addCausa(req, res) {
  CausaRepository.create({
    nome: req.body.nome,
    descricao: req.body.descricao,
  }).then((result) => res.json(result));
}

async function updateCausa(req, res) {
  await CausaRepository.update(
    {
      nome: req.body.nome,
      descricao: req.body.descricao,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  CausaRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteCausa(req, res) {
  await CausaRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  CausaRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addCausa, findCausa, updateCausa, deleteCausa };