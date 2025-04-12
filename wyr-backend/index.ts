import express, { Express } from "express";
import dotenv from "dotenv";
import professorService from "./service/ProfessorService";
import studentService from "./service/StudentService";
import classService from "./service/ClassService";
import authService from "./service/AuthService";
import { auth } from "./middleware/auth";
import { authorizeRoles } from "./middleware/authorizeRoles";

dotenv.config();

export const app: Express = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('', authService);

app.use('/professor', auth, authorizeRoles('professor'), professorService);
app.use('/student', auth, authorizeRoles('student'), studentService);

app.use('/class', auth, authorizeRoles('professor', 'student'), classService);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});


