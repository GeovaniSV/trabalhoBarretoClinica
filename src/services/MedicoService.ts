import { prisma } from "../prisma.js";

class MedicoService {
  async getAll() {
    const med = await prisma.medico.findMany();

    return med;
  }
}

export { MedicoService };
