import type { Request, Response } from "express";
import { PacienteService } from "../services/PacientesService.js";

class PacienteController {
  protected pacienteService: PacienteService;

  constructor() {
    this.pacienteService = new PacienteService();
  }

  getAll = async (req: Request, res: Response) => {
    try {
      const medicos = await this.pacienteService.getAll();

      return res.status(200).json(medicos);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "Sorry. somenthing went wrong!" });
    }
  };
}

export { PacienteController };
