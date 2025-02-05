import * as express from "express";
import * as dotenv from "dotenv";
import sequelize from ".config/database";

dotenv.config();

// var dotenv = require("dotenv").config();
// var bodyParser = require("body-parser");

// const express = require("express");
// const app = express();

// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));

// const professorRouter = require('./routes/ProfessorRoutes')
// app.use('/api', professorRouter)

// function onStart() {
//   console.log(`Server running on port ${process.env.PORT}`);
// }
// app.listen(process.env.PORT, onStart);

// module.exports = app;
