import { Room } from './room.model';  

export interface Motel {
  id: number;
  name: string;
  address: string;
  phone_number: string;
  description: string;
  city: string;
  property_owner_id: number;
  date_create: Date;
  latitude: number;
  longitude: number;
  approval_status: 'pending' | 'approved' | 'rejected';
  ruest: string;
  rnt: string;
  owner_document_type: string;
  owner_document: string;
  owner_full_name: string;
  legal_representative_name: string;
  legal_document_url: string;
  aproval_date: Date;
  approved_by_user_id: number;
  profile_iamge_url: string;

  rooms?: Room[];
}