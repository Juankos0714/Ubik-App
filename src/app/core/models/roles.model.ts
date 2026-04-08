export interface Roles {
  id: number;
  name: string;
  description: string;
  create_at: Date;
}

export const ROLE_IDS = {
  ADMIN: 7392841056473829,
  OWNER: 3847261094857362,
  CLIENT: 9182736450192837,
} as const;