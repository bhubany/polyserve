import { Router } from "express";
import authRouter from "./auth.routes";
import healthRouter from "./health.routes";
import userRouter from "./user.routes";

const routes = Router();

routes.use("/health", healthRouter);
routes.use("/users", userRouter);
routes.use("/auth", authRouter);

export default routes;
