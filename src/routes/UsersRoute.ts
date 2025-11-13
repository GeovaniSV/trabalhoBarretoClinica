import { Router } from "express";
import { UserController } from "../controllers/UsersController.js";

const userRouter = Router();
const userController = new UserController();

userRouter.post("/auth/login", userController.store);

export { userRouter };
