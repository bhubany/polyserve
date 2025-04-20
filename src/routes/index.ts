import { Router } from "express";
import authRouter from "./auth.routes";
import userRouter from "./user.routes";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/auth", authRouter);

export default routes;
