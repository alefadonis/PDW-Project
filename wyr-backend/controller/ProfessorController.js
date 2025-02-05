const professorModel = require("../model/ProfessorModel")

const professorController = {
    getProfessor: async (req, res) => {
        try {
            //todo create the logic
        }
        catch (error) {
            res.status(500).json({ error: "Error in the professor service" });
        }
    }
}