import { ErrorCode } from "../enums";
import { ApiResponse } from "./ApiResponse";

export class ErrorResponse extends ApiResponse {
  success = false;
  error: {
    code: ErrorCode;
    message: string;
    details?: any;
  };

  constructor(code: ErrorCode, message: string, details?: any) {
    super(message);
    this.error = {
      code,
      message,
      details,
    };
  }

  toJSON() {
    return {
      success: this.success,
      error: this.error,
      timestamp: this.timestamp,
    };
  }
}
