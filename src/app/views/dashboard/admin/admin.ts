import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../core/services/admin.service';
import {
  PendingMotel,
  MotelApprovalStats,
  TodayReservationStats,
} from '../../../core/models/admin.model';
import { StreakService } from '../../../core/services/streak.service';
import {
  AdminUserStreakResponse,
  AdminStreakStatsResponse,
} from '../../../core/models/streak.model';

@Component({
  selector: 'app-dashboard-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-admin.html',
})
export class DashboardAdmin implements OnInit {
  private readonly adminService = inject(AdminService);
  private readonly streakService = inject(StreakService);

  activeTab = signal<'motels' | 'streaks'>('motels');

  // ... existentes ...
  pendingMotels = signal<PendingMotel[]>([]);
  approvalStats = signal<MotelApprovalStats | null>(null);
  todayStats = signal<TodayReservationStats | null>(null);

  // Rachas
  streakStats = signal<AdminStreakStatsResponse | null>(null);
  adminStreaks = signal<AdminUserStreakResponse[]>([]);
  loadingStreaks = signal(false);
  streakFilter = signal<string>('');

  // Modales Streaks
  selectedStreak = signal<AdminUserStreakResponse | null>(null);
  overrideLevel = signal<string>('GOLD');
  overrideReason = signal<string>('');

  loadingMotels = signal(false);
  loadingStats = signal(false);
  loadingReservation = signal(false);

  errorMotels = signal<string | null>(null);
  errorStats = signal<string | null>(null);

  // Modales / acciones
  approveComments = signal('');
  rejectReason = signal('');
  selectedMotel = signal<PendingMotel | null>(null);
  actionInProgress = signal(false);
  actionResult = signal<string | null>(null);

  // Lightbox
  previewImageUrl = signal<string | null>(null);

  openPreview(url: string): void {
    this.previewImageUrl.set(url);
  }

  closePreview(): void {
    this.previewImageUrl.set(null);
  }

  ngOnInit(): void {
    this.loadPendingMotels();
    this.loadStats();
    this.loadTodayReservationStats();
    this.loadStreakData();
  }

  setTab(tab: 'motels' | 'streaks'): void {
    this.activeTab.set(tab);
  }

  loadStreakData(): void {
    this.loadingStreaks.set(true);
    // Cargar stats
    this.streakService.getAdminStreakStats().subscribe({
      next: (stats) => this.streakStats.set(stats),
      error: () => console.error('Error stats streaks')
    });
    // Cargar lista
    this.loadAdminStreaks();
  }

  loadAdminStreaks(): void {
    this.streakService.getAllAdminStreaks(this.streakFilter() || undefined).subscribe({
      next: (data) => {
        this.adminStreaks.set(data);
        this.loadingStreaks.set(false);
      },
      error: () => this.loadingStreaks.set(false)
    });
  }

  selectStreak(streak: AdminUserStreakResponse): void {
    this.selectedStreak.set(streak);
    this.overrideLevel.set(streak.level);
    this.overrideReason.set('');
  }

  confirmOverride(): void {
    const streak = this.selectedStreak();
    if (!streak) return;

    this.actionInProgress.set(true);
    this.streakService.overrideUserStreak(streak.userId, {
      level: this.overrideLevel(),
      overrideReason: this.overrideReason()
    }).subscribe({
      next: () => {
        this.actionResult.set(`Nivel del usuario ${streak.username} actualizado correctamente.`);
        this.actionInProgress.set(false);
        this.selectedStreak.set(null);
        this.loadStreakData(); // Recargar todo
      },
      error: () => {
        this.actionResult.set('Error al actualizar el nivel de racha.');
        this.actionInProgress.set(false);
      }
    });
  }

  loadPendingMotels(): void {
    this.loadingMotels.set(true);
    this.errorMotels.set(null);
    this.adminService.getPendingMotels().subscribe({
      next: (motels) => {
        this.pendingMotels.set(motels);
        this.loadingMotels.set(false);
      },
      error: () => {
        this.errorMotels.set('No se pudieron cargar los moteles pendientes.');
        this.loadingMotels.set(false);
      },
    });
  }

  loadStats(): void {
    this.loadingStats.set(true);
    this.errorStats.set(null);
    this.adminService.getMotelApprovalStats().subscribe({
      next: (stats) => {
        this.approvalStats.set(stats);
        this.loadingStats.set(false);
      },
      error: () => {
        this.errorStats.set('No se pudieron cargar las estadísticas.');
        this.loadingStats.set(false);
      },
    });
  }

  loadTodayReservationStats(): void {
    this.loadingReservation.set(true);
    this.adminService.getTodayReservationStats().subscribe({
      next: (stats) => {
        this.todayStats.set(stats);
        this.loadingReservation.set(false);
      },
      error: () => this.loadingReservation.set(false),
    });
  }

  selectMotel(motel: PendingMotel): void {
    this.selectedMotel.set(motel);
    this.approveComments.set('');
    this.rejectReason.set('');
    this.actionResult.set(null);
  }

  approveMotel(): void {
    const id = this.selectedMotel()?.id;
    if (id === undefined) return;
    this.actionInProgress.set(true);
    this.adminService.approveMotel(id, { comments: this.approveComments() }).subscribe({
      next: (res) => {
        this.actionResult.set(res.message);
        this.pendingMotels.update((list) => list.filter((m) => m.id !== id));
        this.actionInProgress.set(false);
        this.selectedMotel.set(null);
        this.loadStats();
      },
      error: () => {
        this.actionResult.set('Error al aprobar el motel.');
        this.actionInProgress.set(false);
      },
    });
  }

  rejectMotel(): void {
    const id = this.selectedMotel()?.id;
    if (id === undefined) return;
    this.actionInProgress.set(true);
    this.adminService.rejectMotel(id, { reason: this.rejectReason() }).subscribe({
      next: (res) => {
        this.actionResult.set(res.message);
        this.pendingMotels.update((list) => list.filter((m) => m.id !== id));
        this.actionInProgress.set(false);
        this.selectedMotel.set(null);
        this.loadStats();
      },
      error: () => {
        this.actionResult.set('Error al rechazar el motel.');
        this.actionInProgress.set(false);
      },
    });
  }

  closeAction(): void {
    this.selectedMotel.set(null);
    this.actionResult.set(null);
  }
}

