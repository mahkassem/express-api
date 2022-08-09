import { Post } from "./post.model";

export interface User {
    id?: number;
    name: string;
    email: string;
    password?: string;
    posts?: Post[];
}