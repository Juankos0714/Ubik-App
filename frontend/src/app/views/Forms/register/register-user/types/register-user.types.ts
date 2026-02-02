export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  anonymous: boolean;
  roleId: number;
}

export interface ValidationError {
  field: string;
  message: string;
}