export interface Users{
    id: number;
    username: string;
    email: string;
    password: string;
    phoneNumber: string;
    anonymous: boolean; // true
    roleId: number;
    birthDate: Date | null;
    longitude: number | null;
    latitude: number | null;


    /**
     * reset_password_token: string | null;
    reset_token_expiration: Date | null;
     */
}