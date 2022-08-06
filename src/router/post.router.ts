import { Router } from "express";

const postRouter = Router();

/** 
 * @description get post by id
 * @params id: string
 */
postRouter.get(
    "/:id",
    // get port by id handler
)

postRouter.get(
    "/",
    // get all posts handler
)

postRouter.post(
    "/",
    // create post handler
)

postRouter.put(
    "/:id",
    // update post handler
)

postRouter.delete(
    "/:id",
    // delete post handler
)

export default postRouter;