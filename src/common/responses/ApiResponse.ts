import { ErrorCode } from "common/enums";
import { Response } from "express";
import { ErrorResponse } from "./ErrorResponse"; // Import ErrorResponse
import { SuccessResponse } from "./SuccessResponse"; // Import SuccessResponse

export abstract class ApiResponse<T = any> {
  abstract success: boolean;
  message: string;
  timestamp: string;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };

  constructor(message: string) {
    this.timestamp = new Date().toISOString();
    this.message = message;
  }

  // Static method for SuccessResponse
  static success<T>(
    res: Response,
    data: T,
    message: string = "Request successful",
    statusCode: number = 200
  ) {
    const response = new SuccessResponse(data, message);
    return res.status(statusCode).json(response.toJSON());
  }

  // Static method for ErrorResponse
  static error(
    res: Response,
    code: ErrorCode,
    message: string,
    details?: any,
    statusCode: number = 500
  ) {
    const response = new ErrorResponse(code, message, details);
    return res.status(statusCode).json(response.toJSON());
  }

  // Abstract method that must be implemented in subclasses to return JSON
  abstract toJSON(): Record<string, any>;
}
