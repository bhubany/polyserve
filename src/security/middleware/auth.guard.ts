import { RequestContext } from "@/common/RequestContext";
import { NextFunction, Request, Response } from "express";

export function authGuard(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //TODO: handle authentication
  const user = req.cookies?.user
    ? JSON.parse(req.cookies.user)
    : { userId: "user", shopId: "shop", email: "email" };

  //   if (!user) {
  //     res.status(401).json({ message: "Unauthorized" });
  //     return; // 🛑 Important: stop execution here
  //   }

  RequestContext.run(
    () => {
      RequestContext.set("userId", user.userId);
      RequestContext.set("shopId", user.shopId);
      RequestContext.set("email", user.email);
      next();
    },
    {
      userId: user.userId,
      shopId: user.shopId,
      email: user.email,
    }
  );
}
