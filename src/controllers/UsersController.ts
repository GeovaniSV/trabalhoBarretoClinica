import type { Request, Response } from "express";
import { UserService } from "../services/UsersService.js";
import {
  userZodLogin,
  userZodRegister,
} from "../types/zodTypes/usersZodTypes.js";
import { json, ZodError } from "zod";

class UserController {
  protected userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  register = async (req: Request, res: Response) => {
    try {
      const payload = await userZodRegister.parseAsync(req.body);

      const user = await this.userService.register(payload);

      if ("Error" in user!) {
        return res
          .status(user.Error.statusCode)
          .json({ Error: user.Error.message });
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

  getAll = async (req: Request, res: Response) => {
    try {
      const users = await this.userService.getAll();
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "Sorry, something went wrong!" });
    }
  };
}

export { UserController };
