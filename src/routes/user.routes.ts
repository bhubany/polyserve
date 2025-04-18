import { Router } from "express";
import { container } from "tsyringe";
import { UserController } from "../controllers/user-controller";

const userRouter = Router();
const userController = container.resolve(UserController);
userRouter.post("", userController.createUser);
userRouter.get("/:id", userController.getUser);

export default userRouter;
