import { Router } from "express";
import { MedicoController } from "../controllers/MedicosController.js";

const medicoRouter = Router();

const medicoController = new MedicoController();

medicoRouter.get("/medicos", medicoController.getAll);

export { medicoRouter };
