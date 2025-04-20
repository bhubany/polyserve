import { StorageType } from "@/common/enums";
import { USER_ID } from "@/common/types";
import { User } from "@/model/User";
import { MongoUserRepository } from "@/repositories/impl/mongo/user-mongo.repository";
import { PostgresUserRepository } from "@/repositories/impl/postgres/user-postgres.repository";
import { Repository } from "@/repositories/repository";

export class UserRepositoryFactory {
  static getRepository(): Repository<User, USER_ID> {
    const storage: StorageType = (process.env.APP_USER_STORAGE_TYPE ??
      process.env.APP_STORAGE_TYPE) as StorageType;

    switch (storage) {
      case StorageType.POSTGRES:
        return new PostgresUserRepository();
      case StorageType.MONGO_DB:
        return new MongoUserRepository();
      // case StorageType.FILE_SYSTEM:
      //   break;
      default:
        throw new Error("Unsupported storage type");
    }
  }
}
