import { Response } from "express"

export const makeError = (message: string = 'Error', statusCode: number = 200): void => {
    throw new Error(JSON.stringify({ message, statusCode }))
}

export const handleError = (error: Error, res: Response): void => {
    console.log(error);
    const { message, statusCode } = JSON.parse(error.message)
    res.status(statusCode).send({ message })
}

