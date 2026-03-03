import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';

import { RoomService }    from '../../core/services/room.service';
import { ServiceService } from '../../core/services/services.service';
import { AuthService }    from '../../core/services/auth.service';

import { Room }    from '../../core/models/room.model';
import { Service } from '../../core/models/services.model';

import { Map as AppMap }   from '../../components/map/map';
import { PaymentModal }    from '../../components/payment-modal/payment-modal';

@Component({
  selector: 'app-product-room',
  standalone: true,
  templateUrl: './product-room.html',
  imports: [CommonModule, FormsModule, RouterLink, AppMap],
})
export class ProductRoom implements OnInit, OnDestroy {

  private roomService  = inject(RoomService);
  private svcService   = inject(ServiceService);
  private authService  = inject(AuthService);
  private route        = inject(ActivatedRoute);
  private dialog       = inject(Dialog);

  // ── Estado principal ─────────────────────────────────────────────────────
  room: Room | null = null;
  loading = false;
  error   = false;

  services: Service[] = [];

  points: { lat: number; lng: number; name: string }[] = [];

  // ── Carrusel ─────────────────────────────────────────────────────────────
  currentSlide = 0;
  private slideInterval: any;

  // ── Favoritos (localStorage) ──────────────────────────────────────────────
  isFavorite = false;
  private readonly FAV_KEY = 'ubik_favorites';

  // ── Notificación disponibilidad ───────────────────────────────────────────
  notifyEmail   = '';
  notifyLoading = false;
  notifySuccess = false;

  // ══════════════════════════════════════════════════════════════════════════
  ngOnInit(): void {
    const id = Number(
      this.route.snapshot.queryParamMap.get('id') ||
      this.route.snapshot.paramMap.get('id')
    );
    if (id) {
      this.loadRoom(id);
    }
    this.svcService.getServices().subscribe({
      next: (svcs) => { this.services = svcs; },
    });
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Carga de habitación
  // ══════════════════════════════════════════════════════════════════════════
  private loadRoom(id: number): void {
    this.loading = true;
    this.roomService.getRoomById(id).subscribe({
      next: (r: Room) => {
        this.room = r;
        this.points = (r.latitude != null && r.longitude != null)
          ? [{ lat: r.latitude, lng: r.longitude, name: r.motelName }]
          : [];
        this.loading = false;
        this.checkFavorite(r.id);
        // Auto-slide solo si hay más de 1 imagen
        if (r.imageUrls?.length > 1) this.startAutoSlide();
      },
      error: () => { this.error = true; this.loading = false; },
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Carrusel
  // ══════════════════════════════════════════════════════════════════════════
  prevSlide(): void {
    const total = this.room?.imageUrls?.length ?? 0;
    this.currentSlide = (this.currentSlide - 1 + total) % total;
    this.resetAutoSlide();
  }

  nextSlide(): void {
    const total = this.room?.imageUrls?.length ?? 0;
    this.currentSlide = (this.currentSlide + 1) % total;
    this.resetAutoSlide();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.resetAutoSlide();
  }

  private startAutoSlide(): void {
    this.slideInterval = setInterval(() => {
      const total = this.room?.imageUrls?.length ?? 0;
      if (total > 1) this.currentSlide = (this.currentSlide + 1) % total;
    }, 5000);
  }

  private clearAutoSlide(): void {
    if (this.slideInterval) clearInterval(this.slideInterval);
  }

  private resetAutoSlide(): void {
    this.clearAutoSlide();
    if ((this.room?.imageUrls?.length ?? 0) > 1) this.startAutoSlide();
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Favoritos — guardados en localStorage
  // ══════════════════════════════════════════════════════════════════════════
  private getFavorites(): number[] {
    try {
      return JSON.parse(localStorage.getItem(this.FAV_KEY) ?? '[]');
    } catch { return []; }
  }

  private checkFavorite(roomId: number): void {
    this.isFavorite = this.getFavorites().includes(roomId);
  }

  toggleFavorite(): void {
    if (!this.room) return;
    const favs = this.getFavorites();
    const idx  = favs.indexOf(this.room.id);

    if (idx === -1) {
      favs.push(this.room.id);
      this.isFavorite = true;
    } else {
      favs.splice(idx, 1);
      this.isFavorite = false;
    }

    localStorage.setItem(this.FAV_KEY, JSON.stringify(favs));
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Notificación de disponibilidad
  // ══════════════════════════════════════════════════════════════════════════
  /**
   * LÓGICA DE RESERVA / DISPONIBILIDAD:
   *
   * FRONTEND (implementado aquí):
   *  - Si room.isAvailable === true  → botón "Reservar ahora" abre PaymentModal
   *  - Si room.isAvailable === false → formulario de email para notificación
   *
   * BACKEND (necesitas implementar):
   *  - POST /rooms/:id/notify-available  { email: string }
   *    → guarda el email en BD y cuando la habitación cambie a disponible
   *      el backend envía el correo automáticamente.
   *
   * MERCADO PAGO (pendiente backend):
   *  - El PaymentModal debe llamar a tu backend que crea una "preferencia"
   *    de Mercado Pago y devuelve el init_point (URL de pago).
   *  - POST /reservations  { roomId, date, time, ... }
   *    → backend crea preferencia MP y devuelve { checkoutUrl }
   *  - El frontend redirige al usuario a checkoutUrl.
   *  - MP llama a tu webhook /payments/webhook con el resultado.
   *  - El backend actualiza la reserva y cambia room.isAvailable = false.
   */
  subscribeNotification(): void {
    if (!this.room || !this.notifyEmail || this.notifyLoading) return;

    this.notifyLoading = true;

    // TODO: reemplazar con llamada real al backend
    // this.roomService.subscribeAvailability(this.room.id, this.notifyEmail).subscribe(...)
    setTimeout(() => {
      this.notifyLoading = false;
      this.notifySuccess = true;
      this.notifyEmail   = '';
      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => { this.notifySuccess = false; }, 5000);
    }, 1200);
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Servicios
  // ══════════════════════════════════════════════════════════════════════════
  getServiceName(id: number): string {
    return this.services.find((s) => s.id === id)?.name ?? `Servicio ${id}`;
  }

  getServiceIcon(id: number): string {
    return this.services.find((s) => s.id === id)?.icon ?? '';
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Reserva
  // ══════════════════════════════════════════════════════════════════════════
  openPayment(): void {
    if (!this.room?.isAvailable) return;

    // Si el usuario no está logueado, se puede redirigir a login
    // if (!this.authService.isLogged()) { this.router.navigate(['/login']); return; }

    this.dialog.open(PaymentModal, {
      data: { id: this.room.id },
      panelClass: window.innerWidth < 768
        ? ['!p-0', '!m-0', '!max-w-full', '!w-full', 'fixed', 'bottom-0', 'left-0', 'right-0']
        : ['!rounded-3xl'],
    });
  }
}