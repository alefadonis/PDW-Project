import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

interface ProfessorAtributtes {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface ProfessorCreationAtributtes {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class Professor extends Model<ProfessorAtributtes, ProfessorCreationAtributtes> {}

Professor.init(
    {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    },
    {
        sequelize,
        tableName: "professors",
        timestamps: true,
    }
);