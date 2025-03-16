export interface User {
    id: string;
    name: string;
    last_name: string;
    image: string;
    email: string;
    phone: string;
    rfc: string;
    password: string;
    role: string;
    google_id: string;
}

export interface UserResponse {
    message: string,
    users: User[]
}