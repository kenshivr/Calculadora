let { Pool } = require("pg");
const config = require('../../config.js');
// import { Pool } from "pg";

const pool = new Pool({
  user: config.USER,
  host: config.HOST,
  database: config.NAME,
  password: config.PASSWORD,
  port: config.PORT
});

pool.query('SELECT * FROM "Operaciones"', (error, results) => {
    if (error) {
        console.error('Error al ejecutar la consulta', error);
    } else {
        console.log('Resultados de la consulta: ', results.rows);
    }

    pool.end();
});