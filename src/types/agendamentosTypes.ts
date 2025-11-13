export interface IAgendamentos {
  id?: number;
  medicoId: number;
  pacienteId: number;
  procedimentoId: number;
  planoDeSaudeId: number;
  dia: string;
}
