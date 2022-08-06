import { NextFunction, Request, Response } from "express";

/** @middleware validate get user request */
export const getUserValidation = (req: Request, res: Response, next: NextFunction): void => {
    let errorsBag: string[] = [];

    const { id } = req.params;
    if (Number(id) < 0) errorsBag.push("id must be greater than 0")
    if (isNaN(Number(id))) errorsBag.push("id must be a number")

    if (errorsBag.length) {
        res.status(400).send({
            "message": "Invalid data",
            "errors": errorsBag
        });
        return;
    }

    next();
}