import { Request, Response, NextFunction } from "express";
import { CustomRequest } from "./auth";

export const authorizeRoles = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const role = (req as CustomRequest).token.role;

    if (!allowedRoles.includes(role)) {
      res.status(403).json({ error: "Access denied: insufficient role" });
    }

    next();
  };
};
