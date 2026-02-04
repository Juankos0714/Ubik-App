export interface UserProfile {
  id: number;
  username: string;
  email: string;
  phoneNumber: string | null;
  createdAt: string;
  anonymous: boolean;
  roleId: number;
}