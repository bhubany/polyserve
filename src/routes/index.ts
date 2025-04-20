import { AppResponse } from "@/common/AppResponse";
import { Router } from "express";
import authRouter from "./auth.routes";
import userRouter from "./user.routes";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/auth", authRouter);

routes.get("/health", (req, res) => {
  AppResponse.success(res, "Server is running.");
});

export default routes;
