import express from "express";
import bcrypt from "bcrypt";
import { ProfessorRepository } from "../repository/ProfessorRepository";
import { env } from "process";
import { ProfessorCreate } from "../models/Professor";

const professorService = express.Router();
const professorRepository = new ProfessorRepository();

professorService.post("/", async (req, res) => {
    try {
        if (await professorRepository.getProfessorByEmail(req.body.data.email)) {
            res.status(409).json({ message: "Email already exists in the system" });
            return
        }

        const hashedPassword = await bcrypt.hash(req.body.data.password, parseInt(env.SALT || "17"));
        const newProfessor = await professorRepository.createNewProfessor(
            new ProfessorCreate(
                req.body.data.firstName,
                req.body.data.lastName,
                req.body.data.email,
                hashedPassword
            )
        );

        res.status(201).json(newProfessor);
    } catch (error) {
        console.error(error); 
        res.status(400).json({ message: "Couldn't create professor" });
    }
});

professorService.get('/all', async (_, res) => {
    console.log("endpoint de tudo")
    const listOfProfessors = await professorRepository.getAllProfessors();

    if (!listOfProfessors || listOfProfessors.length === 0) {
        res.status(204).send("No professors were found in the database");
        return
    }
    res.status(200).send(listOfProfessors);
});

professorService.get(':id', async (req, res) => {
    const id = req.params.id;

    const professor = await professorRepository.getProfessorById(+id);

    if (!professor) {
        res.status(204).send(`No professor was found in the database with the specified id ${id}`);
        return
    }
    res.status(200).send(professor);
});


professorService.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const professor = await professorRepository.deleteProfessorById(+id);

    if (!professor){
        res.status(204).send(`No professor were found in the database with the specified id ${id}`)
    }
    res.status(200).send(professor)
})

export default professorService;