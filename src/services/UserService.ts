import { User } from "model/User";

export interface UserService<T> {
  crete(user: User<T>): Promise<User<T>>;
  findById(id: string): Promise<User<T> | null>;
  findAll(): Promise<User<T>[]>;
  deleteById(id: string): Promise<User<T> | null>;
}
