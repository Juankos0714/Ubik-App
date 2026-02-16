  import { RoomService } from './room_services.model';
  import { RoomImage } from './room_images.model';

  export interface Room {
    id: number;
    motel_id: number;
    num_or_name: string;
    room_type: string;
    price: number;
    description: string;
    services?: RoomService[];
    photos?: RoomImage[];
    isAvailable: boolean;
    city: string;
    address: string;
    hours: number;
    lat?: number;
    lng?: number;
  }