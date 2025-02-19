import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv'

dotenv.config();

const prismaDB = new PrismaClient();

export default prismaDB;