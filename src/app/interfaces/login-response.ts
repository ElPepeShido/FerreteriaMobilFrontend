export interface LoginResponse {
    message: string;
    token: string;
    User: {
        id: string;
        name: string;
        lastName: string;
        email: string;
        phone: string;
        socialMedia: string;
        created_at: string;
        updated_at: string;
    };
}
