export interface Reservation {
  id?: number;
  roomId: number;
  userId: number;
  checkInDate: string;
  checkOutDate: string;
  status: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED';
  totalPrice: number;
  specialRequests?: string;
  confirmationCode?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface OwnerDashboardSummary {
  reservationsByStatus: Record<string, number>;
  dailyRevenue: number;
  occupancyRate: number;
  totalRooms: number;
  activeReservations: number;
}

export interface RoomStatusBoardResponse {
  roomId: number;
  roomNumber: string;
  roomType: string;
  status: 'AVAILABLE' | 'OCCUPIED' | 'PENDING_CHECKIN' | 'PENDING_CHECKOUT' | 'CLEANING';
  currentReservation?: {
    reservationId: number;
    guestName: string;
    confirmationCode: string;
    checkInDate: string;
    checkOutDate: string;
    reservationStatus: string;
  };
}
