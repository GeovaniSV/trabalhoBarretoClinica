import { Router } from "express";
import { AgendamentoController } from "../controllers/AgendamentosController.js";
import { auth } from "../middleware/auth.js";

const agendamentosRouter = Router();
const agendamentoController = new AgendamentoController();

agendamentosRouter.post("/agendamentos", auth, agendamentoController.store);
agendamentosRouter.get("/agendamentos", auth, agendamentoController.getAll);

export { agendamentosRouter };
