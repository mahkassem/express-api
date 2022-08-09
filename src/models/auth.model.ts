export interface UserCredenctials {
    email: string;
    password: string;
}

export interface AuthData {
    user: AuthUser;
    token: string;
}

interface AuthUser {
    name: string;
    email: string;
}

export interface TokenPayload {
    sub: string;
    name: string;
    iat?: number;
    exp?: number;
    iss?: string;
}