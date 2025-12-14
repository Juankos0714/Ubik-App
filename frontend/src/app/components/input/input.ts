import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Inputcomponent {
  @Input() label?: string;
  @Input() placeholder?: string = '';
  @Input() type: string = 'text';
}