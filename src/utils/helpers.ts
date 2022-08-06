import { User } from "../models/user.model";

export const sanitizedUserResponse = (user: User): User => {
    delete user.password;
    return user;
}