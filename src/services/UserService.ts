import { User } from "model/User";

export interface UserService<T> {
  getUser(id: string): Promise<User<T> | null>;
  registerUser(user: User<T>): Promise<User<T>>;
}
