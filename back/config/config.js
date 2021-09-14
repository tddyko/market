require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.SEQUELIZE_PASSWD,
    database: "market",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "+09:00",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.SEQUELIZE_PASSWD,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "+09:00",
  },
};
