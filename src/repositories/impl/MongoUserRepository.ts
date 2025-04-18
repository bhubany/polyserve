import { User } from "model/User";
import { UserRepository } from "repositories/UserRepository";

export class MongoUserRepository<T> implements UserRepository<T> {
  create(user: User<T>): Promise<User<T>> {
    throw new Error("Method not implemented.");
  }
  async findById(id: string): Promise<User<T> | null> {
    // MongoDB logic
    return null;
  }

  async save(user: User<T>): Promise<void> {
    // MongoDB logic
  }
}
