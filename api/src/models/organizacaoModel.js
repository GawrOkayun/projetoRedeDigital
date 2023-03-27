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
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: {
        msg: "O campo nome não pode ser vazio"
      },
      len:{
        args: [3,50],
        msg: "O campo nome deve ter mais de dois caracteres"
      } 
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: {
        msg: "O campo Email não pode ser vazio"
      },
      isEmail: {
        msg: "Você deve passar um email válido!"
      }
    }
  },
  telefone:{
    type: Sequelize.STRING,
    validate: {
      is: {
        args: /^(?:\+55)?\s*(?:\d{2})?\s*(?:\d{4,5})[-\s]?\d{4}$/,
        msg: "Por favor, forneça um número de telefone válido."
      }
    }
  },
  cnpj:{
    type: Sequelize.STRING
  },
  descricao: {
    type: Sequelize.STRING,
    validate: {
      max: {
        args: 150,
        msg: "A descrição só pode ter 150 caractéres."
      }
    }
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