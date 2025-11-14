import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { ProcedimentoController } from "../controllers/ProcedimentosController.js";

const procedimentoRouter = Router();
const procedimentoController = new ProcedimentoController();

  
procedimentoRouter.get("/procedimentos", auth, procedimentoController.getAll);

export { procedimentoRouter };
