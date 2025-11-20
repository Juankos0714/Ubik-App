import { Component } from '@angular/core';
import { Button01 } from "../button-01/button-01";
import { Button02 } from "../button-02/button-02";

@Component({
  selector: 'app-card',
  imports: [Button01, Button02],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

}
