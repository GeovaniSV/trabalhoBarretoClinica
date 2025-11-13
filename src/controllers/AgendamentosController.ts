import type { Request, Response } from "express";
import { ZodError } from "zod";
import { AgendamentoService } from "../services/AgendamentosService.js";
import { postAgendamentos } from "../types/zodTypes/agendamentosZodType.js";

class AgendamentoController {
  protected agendamentoService: AgendamentoService;

  constructor() {
    this.agendamentoService = new AgendamentoService();
  }

  store = async (req: Request, res: Response) => {
    try {
      const payload = await postAgendamentos.parseAsync(req.body);

      const agendamento = await this.agendamentoService.store(payload);

      return res.status(201).json({ agendamento });
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        return res.status(400).json({ Errors: error.issues });
      }
      return res.status(500).json({ message: "Sorry, something went wrong!" });
    }
  };

  getAll = async (req: Request, res: Response) => {
    try {
      const agendamentos = await this.agendamentoService.getAll();
      if ("Error" in agendamentos) {
        return res
          .status(agendamentos.Error.statusCode)
          .json({ Error: agendamentos.Error.message });
      }

      return res.status(200).json(agendamentos);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "Sorry. somenthing went wrong!" });
    }
  };
}

export { AgendamentoController };
