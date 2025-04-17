import prismaDB from "../config/database";
import { Professor, ProfessorCreate } from "../models/Professor";
import { User } from "../models/UserAuth";

export class ProfessorRepository {
  async createNewProfessor(professor: ProfessorCreate) {
    const result = await prismaDB.professor.create({
      data: {
        firstName: professor.firstName,
        lastName: professor.lastName,
        email: professor.email,
        password: professor.password,
      },
    });

    return new Professor(
      result.id,
      result.firstName,
      result.lastName,
      result.email
    );
  }

  async getProfessorById(id: number): Promise<Professor | null> {
    const professorResult = await prismaDB.professor.findUnique({
      where: { id },
    });

    console.log(professorResult)

    if (!professorResult) {
      return null;
    }

    return new Professor(
      professorResult.id,
      professorResult.firstName,
      professorResult.lastName,
      professorResult.email
    );
  }

  async getProfessorByEmail(email: string): Promise<Professor | null> {
    const professorResult = await prismaDB.professor.findUnique({
      where: { email },
    });

    if (!professorResult) {
      return null;
    }

    return new Professor(
      professorResult.id,
      professorResult.firstName,
      professorResult.lastName,
      professorResult.email,
      professorResult.password
    );
  }

    async getProfessorByEmailForLogin(email: string): Promise<User> {
    const professorResult = await prismaDB.professor.findUnique({
      where: { email },
    });

    if (!professorResult) {
      throw new Error("Professor not found!")
    }

    const user: User = {
      id : professorResult.id,
      email : professorResult.email,
      password : professorResult.password,
      role: "professor"
    }

    return user;
  }

  async getAllProfessors(): Promise<Professor[]> {
    const professorResults = await prismaDB.professor.findMany();

    return professorResults.map(
      (professor) =>
        new Professor(
          professor.id,
          professor.firstName,
          professor.lastName,
          professor.email
        )
    );
  }

  async deleteProfessorById(id: number): Promise<Professor | null> {
    try {
      const deletedProfessor = await prismaDB.professor.delete({
        where: { id },
      });

      return new Professor(
        deletedProfessor.id,
        deletedProfessor.firstName,
        deletedProfessor.lastName,
        deletedProfessor.email
      );
    } catch (err) {
      return null;
    }
  }
}
