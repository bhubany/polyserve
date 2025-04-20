import { Router } from "express";
import { container } from "tsyringe";
import { AuthController } from "../controllers/auth-controller";

const authRouter = Router();
const authController = container.resolve(AuthController);
authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);

export default authRouter;
