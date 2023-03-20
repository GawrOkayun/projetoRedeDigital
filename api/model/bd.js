import mysql from 'mysql2';

export const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'banco_mod5_ongs'
});