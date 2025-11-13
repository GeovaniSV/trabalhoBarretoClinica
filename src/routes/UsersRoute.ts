import { Router } from "express";
import { UserController } from "../controllers/UsersController.js";
import { auth } from "../middleware/auth.js";

const userRouter = Router();
const userController = new UserController();

userRouter.post("/auth/login", userController.store);
userRouter.post("/auth/register", userController.register);
userRouter.get("/users", auth, userController.getAll);

export { userRouter };
