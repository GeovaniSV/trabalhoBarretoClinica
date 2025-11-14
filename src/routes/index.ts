import { Router } from "express";
import { userRouter } from "./UsersRoute.js";
import { agendamentosRouter } from "./AgendamentosRoutes.js";
import { medicoRouter } from "./MedicoRoutes.js";
import { pacienteRouter } from "./PacientesRoutes.js";
import { procedimentoRouter } from "./ProcedimentoRoutes.js";
import { planoDeSaudeRouter } from "./PlanoDeSaudeRoutes.js";

const rootRouter = Router();

rootRouter.use("/", userRouter);
rootRouter.use("/", agendamentosRouter);
rootRouter.use("/", medicoRouter);
rootRouter.use("/", pacienteRouter);
rootRouter.use("/", procedimentoRouter);
rootRouter.use("/", planoDeSaudeRouter);

export { rootRouter };
