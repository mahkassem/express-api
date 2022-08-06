export interface DatabaseConfiguration {
    host: string,
    port: number,
    user?: string,
    password?: string,
    database?: string
}

export interface AuthConfiguration {
    rounds: number,
    paper: string,
    jwtSecret: string
}