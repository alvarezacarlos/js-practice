const { Pool } = require("pg");
const { USER, PASSWORD, HOST, PORT, DATABASE } = require("./config");

const pool = new Pool({
  user: USER,
  password: PASSWORD,
  host: HOST,
  port: PORT,
  database: DATABASE,
});

module.exports = pool;
