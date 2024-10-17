import Sequelize from "sequelize";

import config from "../config";

const { DB_USER, DB_PWD, DB_NAME, SERVER } = config;

export const sequelize = new Sequelize(
  DB_NAME, // db name,
  DB_USER, // username
  DB_PWD, // password
  {
    host: SERVER,
    dialect: "mssql",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);