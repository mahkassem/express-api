import { Router } from "express";

import authRouter from "./auth.router";
import postRouter from "./post.router";
import userRouter from "./user.router";

const appRouter = Router();

appRouter.use("/auth", authRouter);
appRouter.use("/user", userRouter);
appRouter.use("/post", postRouter);

export default appRouter;
