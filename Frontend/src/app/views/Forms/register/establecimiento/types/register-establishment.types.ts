export type ApprovalStatus = 'PENDING' | 'UNDER_REVIEW' | 'APPROVED' | 'REJECTED';
export type DocumentType   = 'CC' | 'NIT' | 'CE' | 'PASAPORTE';

// ─── Lo que el backend devuelve ────────────────────────────────────────────────
export interface Motel {
  id: number;
  name: string;
  address: string;
  phoneNumber: string | null;
  description: string | null;
  city: string;
  propertyId: number;
  dateCreated: string;
  imageUrls: string[];
  latitude: number | null;
  longitude: number | null;
  approvalStatus: ApprovalStatus;
  approvalDate: string | null;
  approvedByUserId: number | null;
  rejectionReason: string | null;
  rues: string;
  rnt: string;
  ownerDocumentType: DocumentType;
  ownerDocumentNumber: string;
  ownerFullName: string;
  legalRepresentativeName: string | null;
  legalDocumentUrl: string | null;
  hasCompleteLegalInfo: boolean;
}

// ─── Lo que se envía al backend ────────────────────────────────────────────────
export interface CreateMotelRequest {
  name: string;
  address: string;
  phoneNumber: string | null;
  description: string | null;
  city: string;
  propertyId: number;
  imageUrls: string[];
  latitude: number | null;
  longitude: number | null;
  rues: string;
  rnt: string;
  ownerDocumentType: DocumentType;
  ownerDocumentNumber: string;
  ownerFullName: string;
  legalRepresentativeName: string | null;
  legalDocumentUrl: string | null;
}