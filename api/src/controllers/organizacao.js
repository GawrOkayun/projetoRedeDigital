import OrganizacaoRepository from "../models/organizacaoModel.js";

function findAll(req, res) {
  OrganizacaoRepository.findAll().then((result) => res.json(result));
}

function findOrganizacao(req, res) {
  OrganizacaoRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addOrganizacao(req, res) {
  try {
    const organizacao = await OrganizacaoRepository.create({
      id_causa: req.body.id_causa,
      nome: req.body.nome,
      email: req.body.email,
      telefone: req.body.telefone,
      cnpj: req.body.cnpj,
      descricao: req.body.descricao,
      data_de_criacao: req.body.data_de_criacao,
      endereco: req.body.endereco
    });

    res.json(organizacao);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateOrganizacao(req, res) {
  try {
    await OrganizacaoRepository.update(
      {
        id_causa: req.body.id_causa,
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        cnpj: req.body.cnpj,
        descricao: req.body.descricao,
        data_de_criacao: req.body.data_de_criacao,
        endereco: req.body.endereco
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    const organizacaoAtualizada = await OrganizacaoRepository.findByPk(req.params.id);
    res.json(organizacaoAtualizada);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao atualizar a organização');
  }
}

async function deleteOrganizacao(req, res) {
  await OrganizacaoRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  OrganizacaoRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addOrganizacao, findOrganizacao, updateOrganizacao, deleteOrganizacao };