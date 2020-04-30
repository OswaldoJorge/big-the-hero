const express = require('express');
//const cors = require('cors');
const routes = require('./routes');

const app = express();

//app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * Método HTTP:
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipo de Parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota "?" (filtros)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Bory: Corpo da requisição, utilizado para criar e alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, MS SQL
 * NoSQL: MongoDB, CouchDB, etc
 */

app.listen(3333);
