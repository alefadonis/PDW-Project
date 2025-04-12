import jwt from "jsonwebtoken";
import { User } from "../models/UserAuth";
import { StudentRepository } from "./StudentRepository";
import bcrypt from "bcrypt";
import { ProfessorRepository } from "./ProfessorRepository";

export class AuthRepository {
  SECRET_KEY = process.env.JWT_TOKEN;

  studentRepository = new StudentRepository();

  professorRepository = new ProfessorRepository();

  async login(email: string, password: string, role: string): Promise<Object> {
    let user: User;
    if ((role === "student")) {
      try {
        user = await this.studentRepository.getStudentByEmailForLogin(email);
      } catch (error) {
        throw new Error("User not found");
      }
    }

    if ((role === "professor")) {
      try {
        user = await this.professorRepository.getProfessorByEmailForLogin(email);
      } catch (error) {
        throw new Error("User not found");
      }
    }

    const isPasswordEqual = bcrypt.compareSync(password, user.password);

    if (!isPasswordEqual) {
      throw new Error("Password doesnt match");
    }

    const token = jwt.sign(
      { _id: user.id, name: user.email, role: user.role },
      this.SECRET_KEY,
      {
        expiresIn: "2 days",
      }
    );

    return { id: user.id, token: token };
  }
}
