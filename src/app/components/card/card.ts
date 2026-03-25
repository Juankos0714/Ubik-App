import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Room } from '../../core/models/room.model';
import { Button01 } from "../button-01/button-01";
import { Button02 } from "../button-02/button-02";

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
  imports: [Button01, Button02, CurrencyPipe, RouterLink]
})
export class Card {

  @Input() card!: Room;

  showDescription = true;

}