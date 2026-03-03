import { Room } from './room.model';

export interface MotelImage {
  id: number;
  url: string;
  role: 'GALLERY' | 'COVER' | string;
  sortOrder: number;
}

export interface Motel {
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
  description: string | null;
  city: string;
  propertyId: number;
  dateCreated: string;
  imageUrls: MotelImage[];
  latitude: number | null;
  longitude: number | null;
  approvalStatus: 'PENDING' | 'UNDER_REVIEW' | 'APPROVED' | 'REJECTED';
  approvalDate: string | null;
  approvedByUserId: number | null;
  rejectionReason: string | null;
  rues: string | null;
  rnt: string | null;
  ownerDocumentType: string;
  ownerDocumentNumber: string;
  ownerFullName: string;
  legalRepresentativeName: string;
  legalDocumentUrl: string | null;
  hasCompleteLegalInfo: boolean;
  rooms?: Room[];
}