export interface RegisterUserPayload {
  username: string;
  email: string;
  password: string;
  anonymous: boolean;
  roleId: number;
}