import { Router } from "express";
import { registerHandler, signinHanlder } from "../handlers/auth.controller";
import { registerValidation, signinValidation } from "../validations/auth.validation";

const authRouter = Router();

authRouter.post("/signin", signinValidation, signinHanlder);
authRouter.post("/register", registerValidation, registerHandler)

export default authRouter;