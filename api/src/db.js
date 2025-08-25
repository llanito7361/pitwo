const Sequelize = require("sequelize");
const gamesModels = require("./models/games.models");
 
//cambiar nombre de db de games a pi
   const sequelize = new Sequelize(
  process.env.DB_NAME || "games",
  process.env.DB_USER || "postgres",
  process.env.DB_PASSWORD || "1235",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    port: process.env.DB_PORT || 5432,
    logging: false, // quita logs SQL
  }
)

gamesModels(sequelize)

    console.log(sequelize.models)

module.exports = {
  sequelize,
  ...sequelize.models
};
