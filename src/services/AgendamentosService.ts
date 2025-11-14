import { prisma } from "../prisma.js";
import type { IAgendamentos } from "../types/agendamentosTypes.js";

class AgendamentoService {
  async store(payload: IAgendamentos) {
    const agendamento = await prisma.agendamento.create({
      data: {
        medicoId: payload.medicoId,
        pacienteId: payload.pacienteId,
        procedimentoId: payload.procedimentoId,
        planoDeSaudeId: payload.planoDeSaudeId,
      },
    });

    return agendamento;
  }

  async getAll() {
    const agendamentos = await prisma.agendamento.findMany({
      select: {
        id: true,
        medico: true,
        paciente: true,
        procedimento: true,
        planoDeSaude: true,
      },
    });

    if (!agendamentos || agendamentos.length == 0) {
      return {
        Error: { message: "Agendamentos não encontrados", statusCode: 404 },
      };
    }

    return agendamentos;
  }
}

export { AgendamentoService };
