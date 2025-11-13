import type { Request, Response } from "express";
import { UserService } from "../services/UsersService.js";
import { userZodLogin } from "../types/zodTypes/usersZodTypes.js";
import { ZodError } from "zod";

class UserController {
  protected userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  register = async (req: Request, res: Response) => {
    try {
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        return res.status(400).json({ Errors: error.issues });
      }
      return res.status(500).json({ message: "Sorry, something goes wrong!" });
    }
  };

  store = async (req: Request, res: Response) => {
    try {
      const payload = await userZodLogin.parseAsync(req.body);
      const user = await this.userService.login(payload);

      if ("Error" in user) {
        return res
          .status(user.Error.statusCode)
          .json({ Message: user.Error.message });
      }

      return res.status(201).json(user);
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        return res.status(400).json({ Errors: error.issues });
      }
      return res.status(500).json({ message: "Sorry, something goes wrong!" });
    }
  };
}

export { UserController };
