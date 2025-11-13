import z from "zod";

const postAgendamentos = z.object({
  medicoId: z.number().int(),
  pacienteId: z.number().int(),
  procedimentoId: z.number().int(),
  planoDeSaudeId: z.number().int(),
  dia: z.string(),
});

export { postAgendamentos };
