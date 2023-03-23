import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("causa", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING
  },
  descricao: {
    type: Sequelize.STRING
  },
}, {
  freezeTableName: true,
  tableName: 'causas',
  timestamps: false
});
