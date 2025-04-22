import { AuthController } from "@/controllers/auth.controller";
import { bindRoutes } from "@/utils/bind-routes.util";
import { Router } from "express";
import { container } from "tsyringe";

const authRoutes = Router();
const authController = container.resolve(AuthController);
// authRoutes.post("/register", authController.register.bind(authController));
// authRoutes.post("/login", authController.login.bind(authController));

bindRoutes(authRoutes, authController, [
  ["post", "/register", "register"],
  ["post", "/login", "login"],
]);

export default authRoutes;
