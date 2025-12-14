import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-3',
  imports: [],
  templateUrl: './card-3.html',
  styleUrl: './card-3.css',
})
export class Card3 {

  @Input() image!: string;
  @Input() title!: string;
  @Input() location!: string;

  @Input() price!: number | string;
  @Input() hours!: number;

  @Input() services: {
    id: number;
    name: string;
    icon: string;
  }[] = [];

}
