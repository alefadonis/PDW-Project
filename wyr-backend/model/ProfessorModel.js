const db = require('../config/database')

const Professor = {

    getProfessorByEmail: async (email) => {
        try {
          // THIS IS EXTREMALLY WRONG AND I DISCOURAGE EVERYONE TO DO A SYSTEM THAT USES RAW QUERY!!!!
          const query = "SELECT * FROM qr_attendance.professors WHERE email = $1";
          const result = await db.query(query, [email]);
          return result.rows[0];
        } catch (error) {
          throw error;
        }
    },

    getAllProfessors: async () => {
        try{
            const query = "SELECT * FROM qr_attendance.professors";
            const result = await db.query(query);
            return result.rows;
        }
        catch (error) {
            throw error;
        }
    },

    createNewProfessor: async (firstName, lastName, email, password) => {
        try {
            const query = `
                INSERT INTO qr_attendance.professors (first_name, last_name, email, password)
                VALUES ($1, $2, $3, $4) RETURNING *;
            `;
            const values = [firstName, lastName, email, password];
            const result = await db.query(query, values);
            return result.rows[0]; 
        } 
        catch (error) {
            throw error;
        }
    }
}