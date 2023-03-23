import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("usuario", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  senha: {
    type: Sequelize.STRING
  },
  data_de_nascimento: {
    type: Sequelize.DATE
  },
  endereco: {
    type: Sequelize.STRING
  },
  telefone: {
    type: Sequelize.STRING
  },
  papel: {
    type: Sequelize.STRING
  }

}, {
  freezeTableName: true,
  tableName: 'usuario',
  timestamps: false
});
