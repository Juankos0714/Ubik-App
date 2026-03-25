export interface StreakResponse {
  userId: number;
  level: string; // 'NEW', 'AMATEUR', 'GOLD'
  reservationsLast30Days: number;
  discountRate: number; // e.g., 0.05 for 5%
  benefits: string[];
  calculatedAt: string;
}

export interface DiscountResponse {
  originalPrice: number;
  finalPrice: number;
  discount: number;
}

// ─── Modelos para el Dashboard Admin ──────────────────────────────────────────

export interface AdminUserStreakResponse {
  userId: number;
  username: string;
  email: string;
  level: string;
  reservationsLast30Days: number;
  discountRate: number;
  calculatedAt: string;
  overriddenLevel: string | null;
  overrideReason: string | null;
  updatedBy: number | null;
}

export interface AdminStreakStatsResponse {
  totalUsers: number;
  newUsers: number;
  amateurUsers: number;
  goldUsers: number;
  newPercentage: number;
  amateurPercentage: number;
  goldPercentage: number;
  topUserId: number | null;
  topReservations: number;
}

export interface OverrideStreakRequest {
  level: string; // 'NEW', 'AMATEUR', 'GOLD'
  overrideReason: string;
}
