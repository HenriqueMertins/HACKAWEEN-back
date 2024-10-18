const sqlite3 = require('sqlite3').verbose();

const DB_NAME = process.env.DB_NAME;

const db = new sqlite3.Database(DB_NAME, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

module.exports = db;
