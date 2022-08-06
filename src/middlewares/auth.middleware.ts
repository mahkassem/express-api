import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from 'jsonwebtoken'
import authConfig from "../config/auth.config";
import { getUserByEmail } from "../entities/user.entity";

/** @middleware protected route */
export const authGuard = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let token = req.headers.authorization;
        if (!token) throw new Error("Unauthorized");
        token = token.split(" ")[1];

        // verify token
        const payload: JwtPayload = jwt.verify(token, authConfig.jwtSecret as string) as JwtPayload;

        // check if user exists
        const user = await getUserByEmail(payload.sub as string);
        if (!user) throw new Error("Unauthorized");

        // attach user to request
        res.locals.user = user;

        next();
    } catch (error: unknown) {
        const { message } = error as { message: string };
        res.status(401).json({ message })
    }
}