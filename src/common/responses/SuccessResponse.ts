import { ApiResponse } from "./ApiResponse";

export class SuccessResponse<T> extends ApiResponse<T> {
  success = true;
  data: T;

  constructor(data: T, message: string = "Request successful") {
    super(message);
    this.data = data;
  }

  toJSON() {
    return {
      success: this.success,
      message: this.message,
      data: this.data,
      timestamp: this.timestamp,
    };
  }
}
