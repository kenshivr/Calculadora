let { Pool } = require("pg");
// import { Pool } from "pg";

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Calculadora',
  password: '1234',
  port: 5432
});

pool.query('SELECT * FROM "Operaciones"', (error, results) => {
    if (error) {
        console.error('Error al ejecutar la consulta', error);
    } else {
        console.log('Resultados de la consulta: ', results.rows);
    }

    pool.end();
});