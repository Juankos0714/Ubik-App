import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { RoomService } from '../../core/services/room.service';
import { Room } from '../../core/models/room.model';
import { PaymentService } from '../../core/services/payment.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-payment-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment-modal.html',
})
export class PaymentModal implements OnInit {

  room: Room | null = null;
  loading = true;
  isSubmitting = false;
  error = false;

  form!: FormGroup;

  constructor(
    private dialogRef: DialogRef<any>,
    @Inject(DIALOG_DATA) public data: { id?: number },
    private roomService: RoomService,
    private paymentService: PaymentService,
    private fb: FormBuilder,
    private auth: AuthService
  ) { }

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

    this.roomService.getRoomById(id).subscribe({
      next: (room: Room) => {
        this.room = room;
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
    if (this.form.invalid || !this.room || !this.room.id) {
      console.warn('Formulario inválido o datos de habitación faltantes');
      return;
    }

    const userId = this.auth.user()?.id;
    if (!userId) {
      alert('Debes iniciar sesión para realizar una reserva.');
      return;
    }

    this.isSubmitting = true;
    console.log('Creando reserva para la habitación:', this.room.id);

    // Fechas de ejemplo para la reserva (requerido por el backend)
    // Se configuran para el día siguiente para asegurar que sean "futuras"
    const now = new Date();
    now.setDate(now.getDate() + 1); 
    now.setHours(10, 0, 0, 0);
    const checkInDate = now.toISOString().split('.')[0];
    
    now.setHours(12, 0, 0, 0);
    const checkOutDate = now.toISOString().split('.')[0];

    const userData = this.form.value;

    this.paymentService.createReservation(
      this.room.id, 
      this.room.motelId, 
      this.room.price, 
      userId, 
      checkInDate, 
      checkOutDate
    ).subscribe({
      next: (res) => {
        console.log('Reserva creada con ID:', res.id);
        
        // Con el ID de reserva, iniciamos el pago
        this.paymentService.createPayment(res.id, this.room!.price, this.room!.motelId).subscribe({
          next: (response) => {
            console.log('Respuesta de pago recibida:', response);
            if (response && response.initPoint) {
              window.location.href = response.initPoint;
            } else {
              this.isSubmitting = false;
              alert('Hubo un error al procesar el pago: No se recibió el punto de inicio.');
            }
          },
          error: (err) => {
            console.error('Error al crear pago', err);
            const msg = err.error?.message || 'Error en la pasarela de pagos';
            this.isSubmitting = false;
            alert(`Hubo un error al procesar el pago: ${msg}`);
          }
        });

      },
      error: (err) => {
        console.error('Error al crear reserva', err);
        const msg = err.error?.message || 'La habitación no existe o no está disponible en estas fechas.';
        this.isSubmitting = false;
        alert(`No se pudo crear la reserva: ${msg}`);
      }
    });
  }
}