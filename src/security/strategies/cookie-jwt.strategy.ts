import { RequestContext } from "@/common/RequestContext";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const cookieJwtStrategy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.token;
  if (!token) return res.status(401).json({ message: "Unauthenticated" });

  try {
    const payload: any = jwt.verify(token, process.env.JWT_SECRET!);
    RequestContext.run(() => next(), {
      userId: payload.userId,
      shopId: payload.shopId,
      email: payload.email,
    });
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
