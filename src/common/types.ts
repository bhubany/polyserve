import { ErrorCode } from "./enums";

export type ID = string;

export type ApiResponse<T> = {
  status: string;
  message: string;
  timestamp: string;
  data?: T;
  error?: { code: ErrorCode; message: string; details: string };
};
