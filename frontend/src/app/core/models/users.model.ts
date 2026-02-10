export interface User{
    id: number;
    name: string;
    email: string;
    password: string;
    phone_number: string;
    anonymous: boolean; // true
    role_id: number;
    reset_password_token: string | null;
    reset_token_expiration: Date | null;
    longitude: number | null;
    latitude: number | null;
    birth_date: Date | null;
    created_at: Date;
}