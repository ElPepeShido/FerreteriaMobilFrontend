import { Direction } from "./direction";

export interface User {
    name: string,
    lastName: string,
    email: string,
    password: string,
    image: string,
    socialMedia: string,
    phone: string,
    direction: Direction[]
}

export interface userResponse{
    message: string,
    user: User,
}