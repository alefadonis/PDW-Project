import prismaDB from "../config/database";
import { Student, StudentCreate } from "../models/Student";
import { User } from "../models/UserAuth";

export class StudentRepository {
  async createNewStudent(student: StudentCreate) {
    const result = await prismaDB.student.create({
      data: {
        enrollmentCode: student.enrollmentCode,
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email,
        password: student.password,
      },
    });

    return new Student(
      result.id,
      result.enrollmentCode,
      result.firstName,
      result.lastName,
      result.email
    );
  }

  async getStudentById(id: number): Promise<Student | null> {
    const studentResult = await prismaDB.student.findUnique({
      where: { id },
    });

    console.log(studentResult);

    if (!studentResult) {
      return null;
    }

    return new Student(
      studentResult.id,
      studentResult.enrollmentCode,
      studentResult.firstName,
      studentResult.lastName,
      studentResult.email
    );
  }

  async getStudentByEmail(email: string): Promise<Student | null> {
    const studentResult = await prismaDB.student.findUnique({
      where: { email },
    });

    if (!studentResult) {
      return null;
    }

    return new Student(
      studentResult.id,
      studentResult.enrollmentCode,
      studentResult.firstName,
      studentResult.lastName,
      studentResult.email
    );
  }

  async getStudentByEmailForLogin(email: string): Promise<User> {
    const studentResult = await prismaDB.student.findUnique({
      where: { email },
    });

    if (!studentResult) {
      throw new Error("User not found")
    }

    const userAuth : User = {
      id: studentResult.id,
      email: studentResult.email,
      password: studentResult.password,
      role: 'student'
    }

    return userAuth ;
  }

  async getAllStudents(): Promise<Student[]> {
    const studentResults = await prismaDB.student.findMany();

    return studentResults.map(
      (student) =>
        new Student(
          student.id,
          student.enrollmentCode,
          student.firstName,
          student.lastName,
          student.email
        )
    );
  }

  async deleteStudentById(id: number): Promise<Student | null> {
    try {
      const deletedStudent = await prismaDB.student.delete({
        where: { id },
      });

      return new Student(
        deletedStudent.id,
        deletedStudent.enrollmentCode,
        deletedStudent.firstName,
        deletedStudent.lastName,
        deletedStudent.email
      );
    } catch (err) {
      return null;
    }
  }
}
