import express, { Express } from "express";
import dotenv from "dotenv";
import professorService from "./service/ProfessorService";
import studentService from "./service/StudentService";
import classService from "./service/ClassService";

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/professor', professorService)
app.use('/student', studentService)
app.use('/class', classService)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});