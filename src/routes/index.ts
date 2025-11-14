import { Router } from "express";
import { userRouter } from "./UsersRoute.js";
import { agendamentosRouter } from "./AgendamentosRoutes.js";
import { medicoRouter } from "./MedicoRoutes.js";
import { pacienteRouter } from "./PacientesRoutes.js";

const rootRouter = Router();

rootRouter.use("/", userRouter);
rootRouter.use("/", agendamentosRouter);
rootRouter.use("/", medicoRouter);
rootRouter.use("/", pacienteRouter);

export { rootRouter };
