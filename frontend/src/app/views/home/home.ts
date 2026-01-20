import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card, HabitacionInformacion } from '../../components/card/card';
import { RoomService } from '../../services/room/room';


@Component({
  selector: 'app-home',
  imports: [CommonModule, Card],
  templateUrl: './home.html',
})
export class Home implements OnInit {

  // Aquí guardamos todo lo que viene del backend
  mejoresOfertas: HabitacionInformacion[] = [];
  motelesCercanos: HabitacionInformacion[] = [];
  destinosPopulares: HabitacionInformacion[] = [];

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.cargarRooms();
  }

  /** -----------------------------------------------------------
   *      Cargar habitaciones desde el backend
   *  -----------------------------------------------------------
   */
  cargarRooms(): void {
  this.roomService.getRooms().subscribe({
    next: (rooms) => {
      console.log('Rooms desde backend:', rooms);

      const cards: HabitacionInformacion[] = rooms.map(room => ({
        id: room.id,
        motelId: room.motelId,
        numberHab: room.numberHab || room.number || '',
        type: room.tipo || room.type || '',
        price: room.price,
        descripcion: room.descripcion || room.description || '',
        imagen: room.imagen || room.imageUrl || 'assets/no-image.png'
      }));

      this.mejoresOfertas = cards;
      this.motelesCercanos = cards;
      this.destinosPopulares = cards;
    },
    error: (error) => {
      console.error('Error cargando rooms', error);
    }
  });
}

}