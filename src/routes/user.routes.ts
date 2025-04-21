import { Router } from "express";
import { container } from "tsyringe";
import { UserController } from "../controllers/user.controller";

const userRoutes = Router();
const userController = container.resolve(UserController);

userRoutes.get("", userController.list);
userRoutes.get("/:id", userController.details);

export default userRoutes;
