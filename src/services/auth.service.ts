import { createUser, getUserByEmail } from "../entities/user.entity";
import { User } from "../models/user.model";
import { AuthData, TokenPayload, UserCredenctials } from "../models/auth.model";
import bcrypt from 'bcrypt'
import authConfig from "../config/auth.config";
import jwt from 'jsonwebtoken'

export const registerService = async (user: User): Promise<User> => {
    try {
        const hashedPassword = bcrypt.hashSync(
            user.password + authConfig.paper,
            authConfig.rounds
        )
        user.password = hashedPassword;
        const data = await createUser(user);
        return data;
    } catch (error) {
        throw new Error(error as string)
    }
}

export const loginService = async (credentials: UserCredenctials): Promise<AuthData> => {
    try {
        const user = await getUserByEmail(credentials.email);
        if (!user) throw new Error("User not found")

        // compare password hash
        const isPasswordMatch = await bcrypt.compare(credentials.password + authConfig.paper, user.password as string);
        if (!isPasswordMatch) throw new Error("Invalid email or password");

        // generate token
        const token = generateToken(user);

        const authData: AuthData = {
            user: {
                name: user.name as string,
                email: user.email as string
            },
            token
        }

        return authData;
    } catch (error) {
        throw new Error(error as string)
    }
}

const generateToken = (user: User): string => {
    try {
        const payload: TokenPayload = { sub: user.email, name: user.name };
        return jwt.sign(payload, authConfig.jwtSecret, { expiresIn: '30d', issuer: 'dailynews' });
    } catch (error) {
        throw new Error(error as string)
    }
}