/** ─────────────────────────────────────────────────────────────
 *  1) Room Types (UI + API)
 *  ───────────────────────────────────────────────────────────── */
export type RoomType = 'STANDARD' | 'SUITE' | 'DELUXE' | 'VIP';

export const ROOM_TYPE_OPTIONS = [
  { value: 'STANDARD', label: 'Standard' },
  { value: 'SUITE', label: 'Suite' },
  { value: 'DELUXE', label: 'Deluxe' },
  { value: 'VIP', label: 'VIP' },
] as const;

/** ─────────────────────────────────────────────────────────────
 *  2) Servicios (tabla del backend /services)
 *  ───────────────────────────────────────────────────────────── */
export interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
  created_at: string; 
}

/** ─────────────────────────────────────────────────────────────
 *  3) Room (respuesta del backend)
 *  ───────────────────────────────────────────────────────────── */
export interface Room {
  id: number;
  motelId: number;
  number: string;
  roomType: RoomType;
  price: number;
  description: string;
  imageUrls: string[];
  latitude: number;
  longitude: number;
  services: Service[];
}

/** ─────────────────────────────────────────────────────────────
 *  4) Payload para crear habitación (lo que mandas al backend)
 *  ─────────────────────────────────────────────────────────────
 *  ✅ Cloudinary: ya mandas URLs, no File[]
 */
export interface RoomCreatePayload {
  motelId: number;
  number: string;
  roomType: RoomType;
  price: number;
  description: string;
  latitude ?: null;
  longitude ?: null;
  imageUrls: string[];   
  serviceIds: number[];  
}

/** ─────────────────────────────────────────────────────────────
 *  5) Form Value (Reactive Form)
 *  ─────────────────────────────────────────────────────────────
 *  El form puede tener nulls. Los Files solo viven en frontend
 *  para subir a Cloudinary.
 */
export interface RoomFormValue {
  motelId: number | null;
  number: string;
  roomType: RoomType | null;
  price: number | null;
  description: string;
  latitude: number | null;
  longitude: number | null;

  // Solo frontend
  selectedFiles: File[];    
  imageUrls: string[];      
  serviceIds: number[];     
}

/** ─────────────────────────────────────────────────────────────
 *  6) Errores tipados (sin TS4111)
 *  ───────────────────────────────────────────────────────────── */
export interface RoomCreateErrors {
  motelId?: string;
  number?: string;
  roomType?: string;
  price?: string;
  description?: string;
  latitude?: string;
  longitude?: string;
  imageUrls?: string;
  serviceIds?: string;
}