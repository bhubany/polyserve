import { User } from "model/User";
import { UserRepository } from "repositories/UserRepository";
import { UserService } from "services/UserService";
import { inject, injectable } from "tsyringe";
import { MongoUserRepository } from "../../repositories/impl/MongoUserRepository";

@injectable()
export class UserServiceImpl<T> implements UserService<T> {
  constructor(
    @inject(MongoUserRepository) private userRepository: UserRepository<T>
  ) {}

  async getUser(id: string): Promise<User<T> | null> {
    return this.userRepository.findById(id);
  }

  async registerUser(user: User<T>): Promise<User<T>> {
    return this.userRepository.create(user);
  }
}
