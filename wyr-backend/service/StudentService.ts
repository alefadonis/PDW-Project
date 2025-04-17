import express from "express";
import bcrypt from "bcrypt";
import { StudentRepository } from "../repository/StudentRepository";
import { env } from "process";
import { StudentCreate } from "../models/Student";

const studentService = express.Router();
const studentRepository = new StudentRepository();

studentService.post("/", async (req, res) => {
  try {
    if (await studentRepository.getStudentByEmail(req.body.data.email)) {
      res.status(409).json({ message: "Email already exists in the system" });
      return;
    }

    const hashedPassword = await bcrypt.hash(
      req.body.data.password,
      parseInt(env.SALT || "17")
    );
    const newStudent = await studentRepository.createNewStudent(
      new StudentCreate(
        req.body.data.enrollmentCode,
        req.body.data.firstName,
        req.body.data.lastName,
        req.body.data.email,
        hashedPassword
      )
    );

    res.status(201).json(newStudent);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Couldn't create student" });
  }
});

studentService.get("/all", async (_, res) => {
  const listOfStudents = await studentRepository.getAllStudents();

  if (!listOfStudents || listOfStudents.length === 0) {
    res.status(404).send({ message: "No students were found in the database" });
    return;
  }
  res.status(200).send(listOfStudents);
});

studentService.get("/:id", async (req, res) => {
  const id = req.params.id;

  console.log(id);
  const student = await studentRepository.getStudentById(+id);

  if (!student) {
    res
      .status(404)
      .send({
        message: `No student was found in the database with the specified id ${id}`,
      });
    return;
  }
  res.status(200).send(student);
});

studentService.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const student = await studentRepository.deleteStudentById(+id);

  if (!student) {
    res
      .status(404)
      .send({
        message: `No student was found in the database with the specified id ${id}`,
      });
    return;
  }
  res.status(200).send(student);
});


export default studentService;

