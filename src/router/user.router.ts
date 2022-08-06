import { Router } from "express";
import { getUser } from "../handlers/user.controller";
import { authGuard } from "../middlewares/auth.middleware";
import { getUserValidation } from "../validations/user.validation";

const userRouter = Router();

/** 
 * @description get user by id
 * @params id: string
 */
userRouter.get(
    "/:id",
    authGuard,
    getUserValidation,
    getUser
)

export default userRouter;