require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const professorRouter = require('./routes/ProfessorRoutes')
app.use('/api', professorRouter)

function onStart() {
  console.log(`Server running on port ${process.env.PORT}`);
}
app.listen(process.env.PORT, onStart);

module.exports = app;
