import { Router } from "express";
import { createPostHandler, deletePostHandler, getAllPostsHnadler, getPostByIdHandler, getPostsByUserIdHandler, updatePostHandler } from "../handlers/post.controller";
import { authGuard } from "../middlewares/auth.middleware";
import { createPostValidation, updatePostValidation } from "../validations/post.validation";

const postRouter = Router();

/** 
 * @description get post by id
 * @params id: string
 */
postRouter.get(
    "/:id",
    getPostByIdHandler
)

postRouter.get(
    "/by-user/:user_id",
    getPostsByUserIdHandler
)

postRouter.get(
    "/",
    getAllPostsHnadler
)

postRouter.post(
    "/",
    authGuard,
    createPostValidation,
    createPostHandler
)

postRouter.put(
    "/:id",
    authGuard,
    updatePostValidation,
    updatePostHandler
)

postRouter.delete(
    "/:id",
    authGuard,
    deletePostHandler
)

export default postRouter;