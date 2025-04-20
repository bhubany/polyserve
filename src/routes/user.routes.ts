import { Router } from "express";
import { container } from "tsyringe";
import { UserController } from "../controllers/user.controller";

const userRouter = Router();
const userController = container.resolve(UserController);

userRouter.get("", userController.list);
userRouter.get("/:id", userController.details);

export default userRouter;
