let { Pool } = require("pg");
require('dotenv').config();
// import { Pool } from "pg";

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT
});

pool.query('SELECT * FROM "Operaciones"', (error, results) => {
    if (error) {
        console.error('Error al ejecutar la consulta', error);
    } else {
        console.log('Resultados de la consulta: ', results.rows);
    }

    pool.end();
});