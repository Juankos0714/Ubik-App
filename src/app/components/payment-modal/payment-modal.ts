import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { RoomService } from '../../core/services/room.service';
import { Room } from '../../core/models/room.model';

@Component({
  selector: 'app-payment-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment-modal.html',
})
export class PaymentModal implements OnInit {

  room: Room | null = null;
  loading = true;
  error = false;

  form!: FormGroup;

  constructor(
    private dialogRef: DialogRef<any>,
    @Inject(DIALOG_DATA) public data: { id?: number },
    private roomService: RoomService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {

    this.form = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      document: ['', Validators.required],
      phone: ['', Validators.required],
    });

    const id = this.data?.id;

    if (!id) {
      this.error = true;
      this.loading = false;
      return;
    }

    this.roomService.getRooms().subscribe({
      next: (rooms) => {
        this.room = rooms.find(r => r.id === id) ?? null;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }

  close() {
    this.dialogRef.close();
  }

  reserve() {

    if (this.form.invalid || !this.room) return;

    const payload = {
      ...this.form.value,
      roomId: this.room.id,
      price: this.room.price
    };

    console.log('Enviar a backend / Mercado Pago:', payload);

    this.dialogRef.close(payload);
  }
}