import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { ErrorCode } from "../common/enums";
import { ApiResponse } from "../common/responses/ApiResponse";
import { UserServiceImpl } from "../services/impl/user-service";
import { UserService } from "../services/UserService";

@injectable()
export class UserController {
  constructor(
    @inject(UserServiceImpl) private userService: UserService<string>
  ) {}

  getUser = async (req: Request, res: Response) => {
    const user = await this.userService.getUser(req.params.id);
    if (!user) {
      ApiResponse.error(
        res,
        ErrorCode.NOT_FOUND,
        "User not found",
        `No user found on ID: ${req.params.id}`,
        404
      );
      // res.status(404).json({ message: "User not found" });
    } else {
      ApiResponse.success(res, user, "Success");
      // res.json(user);
    }
  };

  createUser = async (req: Request, res: Response): Promise<void> => {
    const { id, name, email } = req.body;
    // const user = new User<string>(id, name, email);
    // const created = await this.userService.registerUser(null);
    res.status(201).json("created");
  };
}
