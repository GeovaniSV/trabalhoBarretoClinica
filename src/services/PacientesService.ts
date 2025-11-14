import { prisma } from "../prisma.js";

class PacienteService {
  async getAll() {
    const pacientes = await prisma.paciente.findMany();

    return pacientes;
  }
}

export { PacienteService };
