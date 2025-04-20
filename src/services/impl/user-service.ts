import { USER_ID } from "@/common/types";
import { AuthResponse } from "@/dto/user-auth.response";
import { UserLoginRequest } from "@/dto/user-login.request";
import { UserRegisterRequest } from "@/dto/user-register.request";
import { User } from "@/model/User";
import { Repository } from "@/repositories/repository";
import { inject, injectable } from "tsyringe";

@injectable()
export class UserService {
  constructor(
    @inject("UserRepository") private repository: Repository<User, USER_ID>
  ) {}

  async register(request: UserRegisterRequest): Promise<AuthResponse<USER_ID>> {
    const entity: User = {
      name: `${request.firstName} ${request.lastName}`,
      email: request.email,
    };
    const user = await this.repository.save(entity);
    const res: AuthResponse<USER_ID> = {
      id: user?.id as USER_ID,
      email: user.email,
      firstName: "",
      lastName: "",
      fullName: "",
    };
    return res;
  }

  login(request: UserLoginRequest): Promise<AuthResponse<USER_ID>> {
    throw new Error("Method not implemented.");
  }

  findById(id: USER_ID): Promise<User | null> {
    return this.repository.findById(id);
  }

  findAll(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }

  deleteById(id: USER_ID): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
}
