import type { Request, Response } from "express";
import { ProcedimentoService } from "../services/ProcedimentosService.js";

class ProcedimentoController {
  protected procedimentoService: ProcedimentoService;

  constructor() {
    this.procedimentoService= new ProcedimentoService();
  }

  getAll = async (req: Request, res: Response) => {
    try {
      const procedimentos = await this.procedimentoService.getAll();

      return res.status(200).json(procedimentos);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "Sorry. somenthing went wrong!" });
    }
  };
}

export { ProcedimentoController };
