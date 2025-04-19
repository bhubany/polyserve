import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { AppResponse } from "../common/AppResponse";
import { UserServiceImpl } from "../services/impl/user-service";
import { UserService } from "../services/UserService";

@injectable()
export class UserController {
  constructor(
    @inject(UserServiceImpl) private userService: UserService<string>
  ) {}

  getUser = async (req: Request, res: Response) => {
    const user = await this.userService.getUser(req.params.id);
    AppResponse.success(res, user);
  };

  createUser = async (req: Request<string>, res: Response): Promise<void> => {
    const { id, name, email } = req.body;
    const user = new User<string>(id, name, email);
    // const created = await this.userService.registerUser(null);
    AppResponse.success(res, user, 201, "Created");
  };
}
