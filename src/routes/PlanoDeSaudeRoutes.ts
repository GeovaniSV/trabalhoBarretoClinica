import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { PlanoDeSaudeController } from "../controllers/PlanoDeSaudeController.js";


const planoDeSaudeRouter = Router();
const planoDeSaudeController = new PlanoDeSaudeController();

  
planoDeSaudeRouter.get("/planos", auth, planoDeSaudeController.getAll);

export { planoDeSaudeRouter };
