import { AppResponse } from "@//common/AppResponse";
import { UserRegisterRequest } from "@//dto/user-register.request";
import { UserLoginRequest } from "@/dto/user-login.request";
import { UserService } from "@/services/impl/user.service";
import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";

@injectable()
export class AuthController {
  constructor(@inject(UserService) private userService: UserService) {}

  // @Authorize({ bypass: true })
  async register(req: Request, res: Response): Promise<void> {
    const requust: UserRegisterRequest = req.body;
    const user = await this.userService.register(requust);
    AppResponse.success(res, user, 201, "Created");
  }

  login = async (req: Request, res: Response): Promise<void> => {
    const request: UserLoginRequest = req.body;
    const auth = await this.userService.login(request);
    AppResponse.success(res, auth, 201, "Created");
  };
}
