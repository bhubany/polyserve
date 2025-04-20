import { User } from "@/model/User";
import { Repository } from "@/repositories/repository";

export class MongoUserRepository<T> implements Repository<User, T> {
  async save(entity: User): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async findById(id: T): Promise<User | null> {
    // MongoDB logic
    return null;
  }

  async findAll(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }

  async update(id: T, item: Partial<User>): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async delete(id: T): Promise<number> {
    throw new Error("Method not implemented.");
  }
}
