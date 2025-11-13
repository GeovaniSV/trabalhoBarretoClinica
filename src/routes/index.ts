import { Router } from "express";
import { userRouter } from "./UsersRoute.js";

const rootRouter = Router();

rootRouter.use("/", userRouter);

export { rootRouter };
