import "dotenv/config";
import type { ILogin, IRegister, IUser } from "../types/usersTypes.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { prisma } from "../prisma.js";

const JWT_SECRET = process.env.JWT_SECRET;

class UserService {
  async register(payload: IRegister) {
    const hasUser = await prisma.user.findUnique({
      where: { email: payload.email },
    });

    if (hasUser) {
      return { Error: { message: "User already exists", statusCode: 409 } };
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(payload.senha, salt);

    let user;
    if (payload.tipo == "M") {
      user = await prisma.user.create({
        data: {
          email: payload.email,
          senha: hashPassword,
          medico: {
            create: {
              nome: payload.nome,
              cep: payload.cep,
              especialidade: payload.especialidade!,
              telefone: payload.telefone,
            },
          },
        },
      });
    }

    if (
      payload.tipo == "P" ||
      payload.tipo == undefined ||
      payload.tipo == null
    ) {
      user = await prisma.user.create({
        data: {
          email: payload.email,
          senha: hashPassword,
          paciente: {
            create: {
              nome: payload.nome,
              cep: payload.cep,
              telefone: payload.telefone,
            },
          },
        },
      });
    }
    return user;
  }

  async login(payload: ILogin) {
    const user = await prisma.user.findUnique({
      where: { email: payload.email },
      select: {
        id: true,
        medico: true,
        paciente: true,
        email: true,
        senha: true,
      },
    });

    if (!user) {
      return { Error: { message: "Invalid credentials", statusCode: 404 } };
    }

    const isMatch = await bcrypt.compare(payload.senha, user.senha);
    if (!isMatch) {
      return { Error: { message: "Invalid credentials", statusCode: 401 } };
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

  async getAll() {
    const users = await prisma.user.findMany({
      include: {
        medico: true,
        paciente: true,
      },
    });

    if (!users || users.length === 0) {
      return { Error: { message: "Users not found", statusCode: 404 } };
    }

    return users;
  }
}

export { UserService };
