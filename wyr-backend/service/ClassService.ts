import express from "express";
import { ClassRepository } from "../repository/ClassRepository";
import { ClassCreate } from "../models/Class";

const classService = express.Router();
const classRepository = new ClassRepository();

classService.post("/", async (req, res) => {
  try {
    const newClass = await classRepository.createNewClass(
      new ClassCreate(req.body.data.name)
    );
    res.status(201).json(newClass);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Couldn't create class" });
  }
});

classService.get("/all", async (_, res) => {
  const listOfClasses = await classRepository.getAllClasses();

  if (!listOfClasses || listOfClasses.length === 0) {
    res.status(404).send({ message: "No classes were found in the database" });
    return;
  }
  res.status(200).send(listOfClasses);
});

classService.get("/:id", async (req, res) => {
  const id = req.params.id;
  const classData = await classRepository.getClassById(+id);

  if (!classData) {
    res.status(404).send({
      message: `No class was found in the database with the specified id ${id}`,
    });
    return;
  }
  res.status(200).send(classData);
});

classService.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deletedClass = await classRepository.deleteClassById(+id);

  if (!deletedClass) {
    res.status(404).send({
      message: `No class was found in the database with the specified id ${id}`,
    });
    return;
  }
  res.status(200).send(deletedClass);
});

export default classService;
