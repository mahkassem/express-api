import { Request, Response } from "express";
import { getAllPostsService, getPostByIdService } from "../services/post.service";


export const getAllPostsHnadler = async (req: Request, res: Response): Promise<void> => {
    try {
        let posts = await getAllPostsService();
        res.send(posts);
    } catch (error: unknown) {
        const { message } = error as { message: string }
        res.status(400).send({
            "message": message
        });
    }
}

/** @handler handle get post */
export const getPostByIdHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params as unknown as { id: number };
        let post = await getPostByIdService(id);
        res.send(post);
    } catch (error: unknown) {
        const { message } = error as { message: string }
        res.status(400).send({
            "message": message
        });
    }
}

/** @handler handle create post */
export const createPostHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, content, user_id } = req.body;
        const post = await createPostService(title, content, user_id);
        res.send(post);
    } catch (error: unknown) {
        const { message } = error as { message: string }
        res.status(400).send({
            "message": message
        });
    }
}
/** @handler handle Update post */
export const updatePostHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params as unknown as { id: number };
        const { title, content, user_id } = req.body;
        const post = await updatePostService(title, content, user_id, id);
        res.send(post);
    } catch (error: unknown) {
        const { message } = error as { message: string }
        res.status(400).send({
            "message": message
        });
    }
}

/** @handler handle dekete post */
export const deletePostHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params as unknown as { id: number };
        const post = await deletePostService(id);
        res.send(post);
    } catch (error: unknown) {
        const { message } = error as { message: string }
        res.status(400).send({
            "message": message
        });
    }
}