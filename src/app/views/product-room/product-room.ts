import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RoomService } from '../../core/services/room.service';
import { Room } from '../../core/models/room.model';
import { Map as AppMap } from '../../components/map/map';
import { Button01 } from "../../components/button-01/button-01";
import { PaymentModal } from '../../components/payment-modal/payment-modal';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-product-room',
  standalone: true,
  templateUrl: './product-room.html',
  imports: [CommonModule, FormsModule, AppMap, RouterLink],
})
export class ProductRoom implements OnInit {
  private roomService = inject(RoomService);
  private route = inject(ActivatedRoute);

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
    if (!this.notifyEmail) return;
    this.notifyLoading = true;
    setTimeout(() => {
      this.notifyLoading = false;
      this.notifySuccess = true;
    }, 1200);
  }

  constructor(private dialog: Dialog) { }

  openPayment() {
    this.dialog.open(PaymentModal, {
      data: { id: this.room?.id }
    });
  }
}