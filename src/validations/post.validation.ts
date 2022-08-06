import { NextFunction, Request, Response } from "express";
import { isTitleUnique } from "../entities/posts.entity";
import { getUserById } from "../entities/user.entity";

/** @middleware validate create post request */
export const createPostValidation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let errorsBag: string[] = [];

    const { title, user_id } = req.body;

    // check if user id is set and is a number
    if (!user_id) {
        errorsBag.push("user_id is required")
    } else {
        if (isNaN(Number(user_id))) { errorsBag.push("user_id must be a number") } else {
            // check if user exists
            const userExist = await getUserById(user_id);
            if (!userExist) errorsBag.push("user does not exist");
        };
    }

    // check if title is set
    if (!title) errorsBag.push("title is required");
    // check if title is unique
    const isUnique = await isTitleUnique(title);
    if (!isUnique) errorsBag.push("title must be unique");
    // check for title length
    if (title && title.length < 5) errorsBag.push("title must be at least 5 characters");
    // title accept only letters and numbers
    if (title && !/^[a-zA-Z0-9 ]+$/.test(title)) errorsBag.push("title must be letters and numbers only");

    if (errorsBag.length) {
        res.status(400).send({
            "message": "Invalid data",
            "errors": errorsBag
        });
        return;
    }

    next();
}

/** @middleware validate update post request */
export const updatePostValidation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let errorsBag: string[] = [];

    const { title, user_id } = req.body;

    // check if user id is set and is a number
    if (!user_id) {
        errorsBag.push("user_id is required")
    } else {
        if (isNaN(Number(user_id))) { errorsBag.push("user_id must be a number") } else {
            // check if user exists
            const userExist = await getUserById(user_id);
            if (!userExist) errorsBag.push("user does not exist");
        };
    }

    // check if title is set
    if (!title) errorsBag.push("title is required");
    // check if title is unique
    const isUnique = await isTitleUnique(title);
    if (!isUnique) errorsBag.push("title must be unique");
    // check for title length
    if (title && title.length < 5) errorsBag.push("title must be at least 5 characters");
    // title accept only letters and numbers
    if (title && !/^[a-zA-Z0-9 ]+$/.test(title)) errorsBag.push("title must be letters and numbers only");

    if (errorsBag.length) {
        res.status(400).send({
            "message": "Invalid data",
            "errors": errorsBag
        });
        return;
    }

    next();
}