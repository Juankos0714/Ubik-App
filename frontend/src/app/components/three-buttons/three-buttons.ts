import { Component } from '@angular/core';
import { Button01 } from '../button-01/button-01';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-three-buttons',
  imports: [Button01, CommonModule],
  templateUrl: './three-buttons.html',
  styleUrl: './three-buttons.css',
})
export class ThreeButtons {
  habitaciones: string = 'Habitaciones';
  Ofertas: string = 'Ofertas';
  Perfil: string = 'Perfil';
}
