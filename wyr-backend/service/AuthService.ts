import express from "express";
import { AuthRepository } from "../repository/authRepository";

const authService = express.Router();

const authRepository = new AuthRepository()

authService.post("/login", async (req, res) => {
  try {
    const token = await authRepository.login(
        req.body.email,
        req.body.password,
        req.body.role
    );
    res.status(200).json(token);
  } catch (error) {}
  
});

export default authService