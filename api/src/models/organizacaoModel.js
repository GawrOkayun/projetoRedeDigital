import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("organizacao", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  id_causa:{
    type: Sequelize.INTEGER
  },
  nome: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  telefone:{
    type: Sequelize.STRING
  },
  cnpj:{
    type: Sequelize.STRING
  },
  descricao: {
    type: Sequelize.STRING
  },
  data_de_criacao: {
    type: Sequelize.DATE
  },
  endereco: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true,
  tableName: 'organizacao',
  timestamps: false
});
