import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { PaymentModal } from '../payment-modal/payment-modal';

@Component({
  selector: 'app-button-01',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-01.html',
})
export class Button01 {

  @Input() text!: string;
  @Input() subtext?: string;

  @Input() iconLeft?: string;
  @Input() iconRight?: string;

  @Input() routerLink?: string | (string | number)[];
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() tall = false;
  @Input() type: 'submit' | 'button' = 'button';

  /* 👇 RESTAURAMOS ESTO */
  @Input() id?: number;
  @Input() action?: 'reservar' | 'detalles';

  @Output() clicked = new EventEmitter<void>();

  constructor(
    private router: Router,
    private dialog: Dialog
  ) {}

  handleClick() {

    if (this.disabled) return;


    if (this.action === 'reservar') {

      if (!this.id) return;

      this.dialog.open(PaymentModal, {
        data: { id: this.id }
      });

      return;
    }


    if (this.routerLink) {
      if (Array.isArray(this.routerLink)) {
        this.router.navigate(this.routerLink);
      } else {
        this.router.navigate([this.routerLink]);
      }
      return;
    }

    this.clicked.emit();
  }
}