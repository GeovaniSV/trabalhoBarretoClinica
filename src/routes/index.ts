import { Router } from "express";
import { userRouter } from "./UsersRoute.js";
import { agendamentosRouter } from "./AgendamentosRoutes.js";

const rootRouter = Router();

rootRouter.use("/", userRouter);
rootRouter.use("/", agendamentosRouter);

export { rootRouter };
