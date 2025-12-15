import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button01 } from '../../components/button-01/button-01';
import { Card, HabitacionInformacion } from '../../components/card/card';
import { RouterModule } from '@angular/router';
import { Button02 } from "../../components/button-02/button-02";

@Component({
  selector: 'app-home',
  imports: [CommonModule, Button01, Card, Button02],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  // Aquí guardamos todo lo que viene del backend
  mejoresOfertas: HabitacionInformacion[] = [];
  motelesCercanos: any[] = [];
  destinosPopulares: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Cuando cargue la pantalla, llamamos la función para simular datos del backend
    this.cargarDatosEjemplo();
  }

  /** -----------------------------------------------------------
   *  🔥 EJEMPLO: Simulando respuestas del backend
   *  -----------------------------------------------------------
   */
  cargarDatosEjemplo(): void {
    this.mejoresOfertas = [
      {
        id: 1,
        motelId: 10,
        numberHab: "301",
        tipo: "Suite Premium",
        price: 120000,
        descripcion: "Habitación con jacuzzi y ambiente romántico.",
        imagen: "https://res.cloudinary.com/du4tcug9q/image/upload/v1763726311/image-habitation_mmy7ly.png"
      },
      {
        id: 2,
        motelId: 12,
        numberHab: "205",
        tipo: "Habitación Deluxe",
        price: 95000,
        descripcion: "Incluye parqueadero privado y minibar.",
        imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      }
    ];

    this.motelesCercanos = [
      {
        id: 1,
        motelId: 10,
        numberHab: "200",
        tipo: "Motel Sol & Luna",
        price: 100000,
        descripcion: "A solo 5 minutos de tu ubicación.",
        imagen: "https://images.unsplash.com/photo-1576678927484-cc907957088c"
      },
      {
        id: 2,
        motelId: 12,
        numberHab: "300",
        tipo: "Motel Venus",
        price: 140000,
        descripcion: "Ambiente romántico con parqueadero privado.",
        imagen: "https://images.unsplash.com/photo-1522706604294-ff2386f00c90"
      }
    ];

    this.destinosPopulares = [
      {
        id: 1,
        motelId: 15,
        numberHab: "101",
        tipo: "Suite Caribe",
        price: 180000,
        descripcion: "Ambiente tropical con jacuzzi privado para ocasión.",
        imagen: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2103a"
      },
      {
        id: 2,
        motelId: 18,
        numberHab: "102",
        tipo: "Oasis Room",
        price: 160000,
        descripcion: "Decoración temática, ideal para ocasión especial.",
        imagen: "https://images.unsplash.com/photo-1551776235-dde6d4829808"
      }
    ];
  }

}