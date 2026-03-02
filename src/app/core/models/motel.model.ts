import { Room } from './room.model';

export interface Motel {
  id: number;
  name: string;

  address: string;
  phone_number: string;
  description: string;
  city: string;
  proprertyId: number;
  dateCreated: Date;
  imagesUrls: string[];
  latitude: number;
  longitude: number;
  approvalStatus: 'pending' | 'under_review' | 'approved' | 'rejected';
  approvalDate: string;
  approvedByUserId: number;
  rejectionReason: string;
  rues: string;
  rnt: string;
  ownerDocumentType: string;
  ownerDocumentNumber: string;
  ownerFullName: string;
  legalRepresentativeName: string;
  legalDocumentUrl: string;
  hasCompleteLegalInfo: boolean;

  rooms?: Room[];
}
