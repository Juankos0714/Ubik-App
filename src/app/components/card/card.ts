import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { Room } from '../../core/models/room.model';
import { Button01 } from '../button-01/button-01';
import { Button02 } from '../button-02/button-02';
import { AuthService } from '../../core/services/auth.service';
import { PaymentModal } from '../payment-modal/payment-modal';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
  imports: [ Button02, CurrencyPipe, RouterLink],
})
export class Card {
  @Input() card!: Room;
  showDescription = true;

  constructor(
    private auth: AuthService,
    private dialog: Dialog,
    private router: Router,
  ) {}

  openPayment(): void {
    if (!this.auth.isLogged()) {
      this.router.navigate(['/login']);
      return;
    }

    const dialogRef = this.dialog.open(PaymentModal, {
      data: { id: this.card.id },
    });

    dialogRef.closed.subscribe((result: any) => {
      if (result?.success) {
        this.router.navigate(['/payment/success'], {
          state: { paymentDetails: result.details },
        });
      }
    });
  }
}