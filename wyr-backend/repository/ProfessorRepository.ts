import { Professor } from "../models/Professor";


export class ProfessorRepository{
    
    async createNewProfessor( firstName: string, 
                              lastName: string,
                              email: string,
                              password: string) {

     return await Professor.create({
         firstName,
         lastName,
         email,
         password,
     })                         
    }

    async getAllProfessors(){
        return await Professor.findAll()
    }
    
}