import { Router } from "express";
import { PacienteController } from "../controllers/PacientesController.js";
import { auth } from "../middleware/auth.js";

const pacienteRouter = Router();

const pacienteController = new PacienteController();

pacienteRouter.get("/pacientes", auth, pacienteController.getAll);

export { pacienteRouter };
