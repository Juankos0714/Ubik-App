// ─── Gestión de Moteles ─────────────────────────────────────────────────────

export interface MotelImageItem {
  id: number;
  url: string;
  role: string;
  sortOrder: number;
}

export interface PendingMotel {
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
  description: string;
  city: string;
  approvalStatus: 'PENDING' | 'UNDER_REVIEW';
  hasCompleteLegalInfo: boolean;
  rues: string;
  rnt: string;
  ownerDocumentType: string;
  ownerDocumentNumber: string;
  ownerFullName: string;
  legalRepresentativeName: string;
  legalDocumentUrl: string;
  imageUrls: MotelImageItem[];
  dateCreated: string;
  latitude: number;
  longitude: number;
}

export interface MotelApprovalStats {
  totalMotels: number;
  pendingApproval: number;
  underReview: number;
  approved: number;
  rejected: number;
  withIncompleteLegalInfo: number;
}

export interface ApproveMotelRequest {
  comments: string;
}

export interface ApproveMotelResponse {
  id: number;
  name: string;
  previousStatus: string;
  newStatus: string;
  message: string;
  timestamp: string;
  processedByUserId: number;
}

export interface RejectMotelRequest {
  reason: string;
}

export interface RejectMotelResponse {
  id: number;
  message: string;
  newStatus: string;
}

// ─── Estadísticas de Reservas ────────────────────────────────────────────────

export interface TodayReservationStats {
  date: string;
  reservationsCreated: number;
  dailyLimit: number;
  percentageUsed: number;
  remainingSlots: number;
  nearLimit: boolean;
}

// ─── Pagos ───────────────────────────────────────────────────────────────────

export interface PaymentRecord {
  id: number;
  reservationId: number;
  userId: number;
  stripePaymentIntentId: string;
  amountCents: number;
  currency: string;
  status: string;
  createdAt: string;
}

// ─── Perfil de Usuario ───────────────────────────────────────────────────────

export interface UserProfile {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}
