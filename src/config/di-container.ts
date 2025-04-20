import { USER_ID } from "@/common/types";
import { User } from "@/model/User";
import { UserRepositoryFactory } from "@/repositories/factories/user.repository.factory";
import { Repository } from "@/repositories/repository";
import { UserService } from "@/services/impl/user-service";
import "reflect-metadata";
import { container } from "tsyringe";

container.registerInstance<Repository<User, USER_ID>>(
  "UserRepository",
  UserRepositoryFactory.getRepository()
);

// Register service
container.register<UserService>(UserService, {
  useClass: UserService,
});
