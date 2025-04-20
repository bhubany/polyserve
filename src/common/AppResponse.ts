import { ErrorCode } from "@/common/enums";
import { Response } from "express";

export class AppResponse {
  private static STATUS = "OK";
  // Static method for success response
  static success<T>(
    res: Response,
    data: T,
    statusCode: number = 200,
    message: string = "Request successful"
  ) {
    return res.status(statusCode).json({
      status: this.STATUS,
      message,
      data,
      timestamp: new Date().toISOString(),
    });
  }

  // Static method for error response
  static error(
    res: Response,
    code: ErrorCode,
    message: string,
    statusCode: number = 500,
    details?: any
  ) {
    return res.status(statusCode).json({
      status: this.STATUS,
      error: { code, message, details },
      timestamp: new Date().toISOString(),
    });
  }
}
