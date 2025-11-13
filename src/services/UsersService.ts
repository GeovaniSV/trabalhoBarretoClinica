import "dotenv/config";
import type { IUser } from "../types/usersTypes.js";
import { prisma } from "../prisma.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

class UserService {
  async login(payload: IUser) {
    const user = await prisma.user.findUnique({
      where: { email: payload.email },
      select: {
        id: true,
        medico: true,
        paciente: true,
      },
    });

    if (!user) {
      return { Error: { message: "Invalid credentials", statusCode: 404 } };
    }

    const jwtPayload = {
      id: user.id,
      role: "",
    };

    if (user.medico) {
      jwtPayload.role = "M";
    }

    if (user.paciente) {
      jwtPayload.role = "P";
    }

    const token = jwt.sign({ jwtPayload }, JWT_SECRET!, { expiresIn: "1d" });

    return { token };
  }
}

export { UserService };
