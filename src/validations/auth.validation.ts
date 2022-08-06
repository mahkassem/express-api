import { NextFunction, Request, Response } from "express"

export const registerValidation = (req: Request, res: Response, next: NextFunction): void => {
    let errorsBag: string[] = []

    const { name, email, password } = req.body
    if (!name) {
        errorsBag.push("name is required")
    } else {
        if (name.length < 3) errorsBag.push("name must be at least 3 characters")
        if (name.length > 30) errorsBag.push("name must be at most 30 characters")
    }
    if (!email) {
        errorsBag.push("email is required")
    } else {
        const emailRegex = /^[a-zA-Z0-9._]+@([\w-]+\.)+[\w-]{2,4}$/g
        if (!emailRegex.test(email)) errorsBag.push("email is invalid")
    }
    if (!password) {
        errorsBag.push("password is required")
    } else {
        if (password.length < 6) errorsBag.push("password must be at least 6 characters")
        if (password.length > 20) errorsBag.push("password must be at most 20 characters")
    }

    if (errorsBag.length) {
        res.status(400).send({
            "message": "Invalid data",
            "errors": errorsBag
        })
        return
    }
    next()
}

export const signinValidation = (req: Request, res: Response, next: NextFunction): void => {
    let errorsBag: string[] = []

    const { email, password } = req.body
    if (!email) errorsBag.push("email is required")

    if (!password) errorsBag.push("password is required")

    if (errorsBag.length) {
        res.status(400).send({
            "message": "Invalid data",
            "errors": errorsBag
        })
        return
    }

    next()
}