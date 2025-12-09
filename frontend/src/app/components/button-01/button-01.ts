import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-01',
  imports: [RouterLink, CommonModule],
  templateUrl: './button-01.html',
  styleUrl: './button-01.css',
})
export class Button01 {
  @Input() text!: string;
  @Input() iconLeft?: string;  // Clase de icono izquierdo (ej: "fas fa-home")
  @Input() iconRight?: string; // Clase de icono derecho (ej: "fas fa-arrow-right")
  @Input() routerLink?: string; // Ruta opcional
}
