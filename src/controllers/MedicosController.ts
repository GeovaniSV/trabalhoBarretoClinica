import type { Request, Response } from "express";
import { MedicoService } from "../services/MedicoService.js";

class MedicoController {
  protected medicoService: MedicoService;

  constructor() {
    this.medicoService = new MedicoService();
  }

  getAll = async (req: Request, res: Response) => {
    try {
      const medicos = await this.medicoService.getAll();

      return res.status(200).json(medicos);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "Sorry. somenthing went wrong!" });
    }
  };
}

export { MedicoController };
