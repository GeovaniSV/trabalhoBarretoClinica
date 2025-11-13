import "dotenv/config";
import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token || token.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token not found" });
  }

  try {
    jwt.verify(token, JWT_SECRET!);
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized access" });
  }
};

export { auth };
