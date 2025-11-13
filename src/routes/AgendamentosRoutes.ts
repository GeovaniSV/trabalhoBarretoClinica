import { Router } from "express";
import { AgendamentoController } from "../controllers/AgendamentosController.js";

const agendamentosRouter = Router();
const agendamentoController = new AgendamentoController();

agendamentosRouter.post("/agendamentos", agendamentoController.store);
agendamentosRouter.get("/agendamentos", agendamentoController.getAll);

export { agendamentosRouter };
