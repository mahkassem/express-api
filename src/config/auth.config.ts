import dotenv from 'dotenv'
import { AuthConfiguration } from '../models/config.model'

dotenv.config()

const authConfig: AuthConfiguration = {
    rounds: Number(process.env.BCRYPT_ROUNDS),
    paper: process.env.BCRYPT_PAPER as string,
    jwtSecret: process.env.JWT_SECRET as string
}

export default authConfig;