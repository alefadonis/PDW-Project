import express from "express";
import { ProfessorRepository } from "../repository/ProfessorRepository";

const professorService = express.Router()
const professorRepository = new ProfessorRepository()


professorService.get('/', (_, res) => {
    const listOfProfessors = professorRepository.getAllProfessors()

    res.status(204).send(listOfProfessors)
})

export default professorService;