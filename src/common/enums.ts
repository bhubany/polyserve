export enum ErrorCode {
  VALIDATION_ERROR = "VALIDATION_ERROR",
  NOT_FOUND = "NOT_FOUND",
  UNAUTHORIZED = "UNAUTHORIZED",
  INTERNAL_ERROR = "INTERNAL_ERROR",
}

export enum StorageType {
  FILE_SYSTEM = "fs",
  MONGO_DB = "mongo",
  POSTGRES = "postgres",
}
