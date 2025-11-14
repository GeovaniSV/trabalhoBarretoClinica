import { prisma } from "../prisma.js";

class ProcedimentoService {
  async getAll() {
    const proc = await prisma.procedimentos.findMany();

    return proc;
  }
}

export { ProcedimentoService };
