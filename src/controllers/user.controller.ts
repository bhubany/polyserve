import { AppResponse } from "@//common/AppResponse";
import { UserService } from "@/services/impl/user-service";
import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";

@injectable()
export class UserController {
  constructor(@inject(UserService) private userService: UserService) {}

  details = async (req: Request, res: Response) => {
    const user = await this.userService.findById(req.params.id);
    AppResponse.success(res, user);
  };

  list = async (req: Request, res: Response) => {
    const users = await this.userService.findAll();
    AppResponse.success(res, users);
  };
}
