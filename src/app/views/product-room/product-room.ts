import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { RoomService } from '../../core/services/room.service';
import { Room } from '../../core/models/room.model';
import { validateEmail } from '../../core/utils/validation.utils';
import { Map as AppMap } from '../../components/map/map';
import { Button01 } from "../../components/button-01/button-01";
import { PaymentModal } from '../../components/payment-modal/payment-modal';
import { Dialog } from '@angular/cdk/dialog';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-product-room',
  standalone: true,
  templateUrl: './product-room.html',
  imports: [CommonModule, FormsModule, AppMap, RouterLink],
})
export class ProductRoom implements OnInit {
  private roomService = inject(RoomService);
  private route = inject(ActivatedRoute);
  public authService = inject(AuthService);

  room: Room | null = null;
  loading = false;
  error = false;

  points: { lat: number; lng: number; name: string }[] = [];

  // Carrusel
  currentSlide = 0;

  // Favoritos
  isFavorite = false;

  // Formulario notificación (habitación no disponible)
  notifyEmail = '';
  notifyLoading = false;
  notifySuccess = false;
  notifyError: string | null = null;

  ngOnInit(): void {
    const idFromQuery = Number(this.route.snapshot.queryParamMap.get('id'));
    const idFromParam = Number(this.route.snapshot.paramMap.get('id'));
    const id = idFromQuery || idFromParam;

    if (id) this.loadRoom(id);
  }

  loadRoom(id: number) {
    this.loading = true;
    this.roomService.getRoomById(id).subscribe({
      next: (r: Room) => {
        this.room = r;

        if (r.latitude != null && r.longitude != null) {
          this.points = [{ lat: r.latitude, lng: r.longitude, name: r.motelName }];
        } else {
          this.points = [];
        }

        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }

  // ── Carrusel ──
  prevSlide(): void {
    if (!this.room?.imageUrls?.length) return;
    this.currentSlide = (this.currentSlide - 1 + this.room.imageUrls.length) % this.room.imageUrls.length;
  }

  nextSlide(): void {
    if (!this.room?.imageUrls?.length) return;
    this.currentSlide = (this.currentSlide + 1) % this.room.imageUrls.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  // ── Favoritos ──
  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

  // ── Servicios ──
  getServiceName(id: number): string {
    const names: Record<number, string> = {
      1: 'WiFi', 2: 'TV', 3: 'Aire acondicionado', 4: 'Jacuzzi',
      5: 'Minibar', 6: 'Desayuno', 7: 'Estacionamiento', 8: 'Piscina',
    };
    return names[id] ?? `Servicio ${id}`;
  }

  getServiceIcon(id: number): string {
    const icons: Record<number, string> = {
      1: 'fas fa-wifi', 2: 'fas fa-tv', 3: 'fas fa-snowflake', 4: 'fas fa-hot-tub',
      5: 'fas fa-wine-bottle', 6: 'fas fa-coffee', 7: 'fas fa-car', 8: 'fas fa-swimming-pool',
    };
    return icons[id] ?? '';
  }

  // ── Notificación disponibilidad ──
  subscribeNotification(): void {
    this.notifySuccess = false;
    this.notifyError = null;

    const email = this.notifyEmail.trim();
    const emailError = validateEmail(email);
    if (emailError) {
      this.notifyError = emailError;
      return;
    }
    if (!this.room) {
      this.notifyError = 'No se pudo identificar la habitación.';
      return;
    }

    this.notifyLoading = true;
    this.roomService.subscribeAvailability(this.room.id, email).subscribe({
      next: () => {
        this.notifyLoading = false;
        this.notifySuccess = true;
      },
      error: () => {
        this.notifyLoading = false;
        this.notifyError = 'No se pudo registrar el correo. Intenta de nuevo.';
      },
    });
  }

  private router = inject(Router);

  constructor(private dialog: Dialog) { }

  openPayment() {
    const dialogRef = this.dialog.open(PaymentModal, {
      data: { id: this.room?.id }
    });

    dialogRef.closed.subscribe((result: any) => {
      if (result?.success) {
        this.router.navigate(['/payment/success'], { state: { paymentDetails: result.details } });
      }
    });
  }
}
