import { prisma } from "../prisma.js";

class PacienteService {
  async getAll() {
    const pacientes = await prisma.medico.findMany();

    return pacientes;
  }
}

export { PacienteService };
