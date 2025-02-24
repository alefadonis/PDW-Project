import prismaDB from "../config/database";
import { Class, ClassCreate } from "../models/Class";

export class ClassRepository {
  async createNewClass(classData: ClassCreate) {
    const result = await prismaDB.class.create({
      data: {
        name: classData.name,
      },
    });

    return new Class(result.id, result.name);
  }

  async getClassById(id: number): Promise<Class | null> {
    const classResult = await prismaDB.class.findUnique({
      where: { id },
    });

    if (!classResult) {
      return null;
    }

    return new Class(classResult.id, classResult.name);
  }

  async getAllClasses(): Promise<Class[]> {
    const classResults = await prismaDB.class.findMany();

    return classResults.map((classItem) => new Class(classItem.id, classItem.name));
  }

  async deleteClassById(id: number): Promise<Class | null> {
    try {
      const deletedClass = await prismaDB.class.delete({
        where: { id },
      });

      return new Class(deletedClass.id, deletedClass.name);
    } catch (err) {
      return null;
    }
  }
}