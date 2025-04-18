import { Request, Response } from "express";
import { UserService } from "services/UserService";
import { inject, injectable } from "tsyringe";
import { UserServiceImpl } from "../services/impl/user-service";

@injectable()
export class UserController {
  constructor(
    @inject(UserServiceImpl) private userService: UserService<string>
  ) {}

  getUser = async (req: Request, res: Response): Promise<void> => {
    const user = await this.userService.getUser(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.json(user);
    }
  };

  createUser = async (req: Request, res: Response): Promise<void> => {
    const { id, name, email } = req.body;
    // const user = new User<string>(id, name, email);
    // const created = await this.userService.registerUser(null);
    res.status(201).json("created");
  };
}
