import { prisma } from "../prisma.js";

class PlanoDeSaudeService {
  async getAll() {
    const proc = await prisma.planoDeSaude.findMany();

    return proc;
  }
}

export { PlanoDeSaudeService };
