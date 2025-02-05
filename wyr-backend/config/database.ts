import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config()

const sequelize = new Sequelize*({
  dialect: process.env.DB_TYPE,
  username: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.PORT,
  logging: false
})

// module.exports = pool