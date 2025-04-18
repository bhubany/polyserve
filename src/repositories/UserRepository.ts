import { User } from "model/User";

export interface UserRepository<T> {
  findById(id: string): Promise<User<T> | null>;
  create(user: User<T>): Promise<User<T>>;
}
