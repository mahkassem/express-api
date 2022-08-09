import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken'
import authConfig from "../config/auth.config";
import { TokenPayload } from "../models/auth.model";
import { getUserByEmail } from "../entities/user.entity";

/** @middleware protected route */
export const authGuard = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let tokenHeader = req.headers.authorization;

        if (!tokenHeader) throw new Error("Unauthorized");
        const token = tokenHeader.split(" ")[1];

        // verify token
        const payload: TokenPayload = jwt.verify(token, authConfig.jwtSecret) as TokenPayload;

        // check if user exists
        const user = await getUserByEmail(payload.sub);
        if (!user) throw new Error("Unauthorized");

        // attach user to request
        res.locals.user = user;

        next();
    } catch (error: unknown) {
        const { message } = error as { message: string };
        res.status(401).json({ message })
    }
}