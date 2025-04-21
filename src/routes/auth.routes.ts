import { AuthController } from "@/controllers/auth.controller";
import { Router } from "express";
import { container } from "tsyringe";

const authRoutes = Router();
const authController = container.resolve(AuthController);
authRoutes.post("/register", authController.register);
authRoutes.post("/login", authController.login);

export default authRoutes;
