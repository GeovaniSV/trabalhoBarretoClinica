import type { Request, Response } from "express";
import { PlanoDeSaudeService } from "../services/PlanoDeSaudeService.js";

class PlanoDeSaudeController {
  protected planoDeSaudeService: PlanoDeSaudeService;

  constructor() {
    this.planoDeSaudeService= new PlanoDeSaudeService();
  }

  getAll = async (req: Request, res: Response) => {
    try {
      const plano = await this.planoDeSaudeService.getAll();

      return res.status(200).json(plano);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "Sorry. somenthing went wrong!" });
    }
  };
}

export { PlanoDeSaudeController };
