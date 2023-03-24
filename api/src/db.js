import { Sequelize } from "sequelize"; // importar o sequelize
import dotenv from "dotenv/config.js"; // importar o dotenv para localizar as variáveis de ambiente

const dbName = process.env.DB_NAME; // passar os dados do .env para as constantes
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize({
  //passar os dados para o sequelize
  dialect: "sqlite", //informar o tipo de banco que vamos utilizar
  storage: './database.sqlite' //o host, neste caso estamos com um banco local
});

export default sequelize; //exportar
