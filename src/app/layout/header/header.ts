import {
  Component,
  computed,
  signal,
  inject,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  HostListener,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject, filter, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';

import { Logo01 } from '../../components/logo-01/logo-01';
import { Button01 } from '../../components/button-01/button-01';
import { AuthService } from '../../core/services/auth.service';
import { SearchService } from '../../core/services/search.service';
import { ColombiaService, Department } from '../../core/services/colombia.service';
import { routes } from '../../app.routes';
import { ThemeToggle } from '../../components/theme-toggle/theme-toggle.component';

const ROUTES = {
  HOME: '/',
  EXPLORE: '/explore',
  LOGIN: '/login',
  REGISTER: '/select-register',
  PROFILE: '/userProfile',
  DASHBOARDOWNER: '/dashboard/owner',
  ADMIN: '/dashboard/admin',
};

const QUERY_OPTIONS = [
  'Jacuzzi',
  'Suite',
  'Parqueadero',
  'Wifi',
  'Piscina',
  'Habitación doble',
  'Habitación sencilla',
  'Aire acondicionado',
  'TV',
  'Terraza',
  'Bar',
  'Desayuno incluido',
];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Logo01, Button01, FormsModule, ThemeToggle],
  templateUrl: './header.html',
})
export class Header implements OnInit, OnDestroy {
  title = 'ENCUENTRA EL LUGAR PERFECTO PARA TU MOMENTO ESPECIAL';
  subtitle = 'Descubre moteles y espacios únicos cerca de ti, de forma rápida y segura.';

  private router = inject(Router);
  private auth = inject(AuthService);
  private searchService = inject(SearchService);
  private colombiaService = inject(ColombiaService);
  private platformId = inject(PLATFORM_ID);

  // Subject para limpiar suscripciones
  private destroy$ = new Subject<void>();

  ROUTES = ROUTES;
  AppRoutes = routes;

  isLogged = this.auth.isLogged;
  role = this.auth.role;

  // ── Ruta actual ───────────────────────────────────────────────
  currentUrl = signal<string>('/');

  /** True solo cuando estamos en home (path '/') */
  isHome = computed(() => this.currentUrl() === '/');

  /** Qué link está activo para resaltarlo de rojo */
  isActive(route: string): boolean {
    return this.currentUrl() === route;
  }

  // ── Scroll sticky nav (solo desktop, solo en home) ────────────
  private lastScrollY = 0;
  private _showSticky = signal(false);

  /** El nav sticky solo aparece si: scrolled > 100px Y scrolling hacia arriba */
  showStickyNav = computed(() => this._showSticky());

  @HostListener('window:scroll')
  onScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (!this.isHome()) return;

    const currentY = window.scrollY;
    const scrollingUp = currentY < this.lastScrollY;
    const pastHero = currentY > 100;

    // Mostrar sticky: usuario scrolleó suficiente Y va hacia arriba
    this._showSticky.set(scrollingUp && pastHero);

    this.lastScrollY = currentY;
  }

  // ── Autocomplete ──────────────────────────────────────────────
  form = { department: '', city: '', query: '' };

  private allDepartments: string[] = [];
  private colombiaData: Department[] = [];

  departmentSuggestions: string[] = [];
  citySuggestions: string[] = [];
  querySuggestions: string[] = [];

  dropdowns = { department: false, city: false, query: false };
  activeIndex = { department: -1, city: -1, query: -1 };

  quickTags = ['Jacuzzi', 'Suite', 'Parqueadero', 'Wifi', 'Piscina'];

  // ─────────────────────────────────────────────────────────────

  constructor() {
    this.currentUrl.set(this.cleanUrl(this.router.url));

    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        this.currentUrl.set(this.cleanUrl(this.router.url));
        // Resetear sticky al cambiar de ruta
        this._showSticky.set(false);
        this.lastScrollY = 0;
      });
  }

  private cleanUrl(url: string): string {
    return url.split('#')[0].split('?')[0] || '/';
  }

  ngOnInit() {
    this.colombiaService
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: Department[]) => {
        this.colombiaData = data;
        this.allDepartments = data.map((d) => d.name);
      });
  }

  ngOnDestroy() {
    // Limpiar todas las suscripciones
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ── Autocomplete: Departamento ────────────────────────────────
  onDepartmentInput(value: string) {
    this.activeIndex.department = -1;
    if (!value.trim()) {
      this.departmentSuggestions = [];
      this.dropdowns.department = false;
      return;
    }
    const q = value.toLowerCase();
    this.departmentSuggestions = this.allDepartments
      .filter((d) => d.toLowerCase().includes(q))
      .slice(0, 7);
    this.dropdowns.department = this.departmentSuggestions.length > 0;
  }

  selectDepartment(dep: string) {
    this.form.department = dep;
    this.departmentSuggestions = [];
    this.dropdowns.department = false;
    this.form.city = '';
    this.citySuggestions = [];
  }

  // ── Autocomplete: Municipio ───────────────────────────────────
  onCityInput(value: string) {
    this.activeIndex.city = -1;
    if (!value.trim()) {
      this.citySuggestions = [];
      this.dropdowns.city = false;
      return;
    }
    const q = value.toLowerCase();
    const selectedDep = this.colombiaData.find(
      (d) => d.name.toLowerCase() === this.form.department.toLowerCase(),
    );
    const pool = selectedDep
      ? selectedDep.municipalities
      : this.colombiaData.flatMap((d) => d.municipalities);

    this.citySuggestions = pool.filter((c) => c.toLowerCase().includes(q)).slice(0, 7);
    this.dropdowns.city = this.citySuggestions.length > 0;
  }

  selectCity(city: string) {
    this.form.city = city;
    this.citySuggestions = [];
    this.dropdowns.city = false;
  }

  // ── Autocomplete: Query ───────────────────────────────────────
  onQueryInput(value: string) {
    this.activeIndex.query = -1;
    if (!value.trim()) {
      this.querySuggestions = [];
      this.dropdowns.query = false;
      return;
    }
    const q = value.toLowerCase();
    this.querySuggestions = QUERY_OPTIONS.filter((o) => o.toLowerCase().includes(q)).slice(0, 6);
    this.dropdowns.query = this.querySuggestions.length > 0;
  }

  selectQuery(sug: string) {
    this.form.query = sug;
    this.querySuggestions = [];
    this.dropdowns.query = false;
  }

  closeDropdown(field: 'department' | 'city' | 'query', delay = 150) {
    setTimeout(() => {
      this.dropdowns[field] = false;
    }, delay);
  }

  // ── Teclado ───────────────────────────────────────────────────
  moveDown(field: 'department' | 'city' | 'query') {
    const list = this.getSuggestions(field);
    if (!list.length) return;
    this.activeIndex[field] = Math.min(this.activeIndex[field] + 1, list.length - 1);
    this.applyKeyboardSelection(field);
  }

  moveUp(field: 'department' | 'city' | 'query') {
    const list = this.getSuggestions(field);
    if (!list.length) return;
    this.activeIndex[field] = Math.max(this.activeIndex[field] - 1, 0);
    this.applyKeyboardSelection(field);
  }

  private getSuggestions(field: 'department' | 'city' | 'query'): string[] {
    if (field === 'department') return this.departmentSuggestions;
    if (field === 'city') return this.citySuggestions;
    return this.querySuggestions;
  }

  private applyKeyboardSelection(field: 'department' | 'city' | 'query') {
    const idx = this.activeIndex[field];
    const list = this.getSuggestions(field);
    if (idx < 0 || idx >= list.length) return;
    if (field === 'department') this.form.department = list[idx];
    if (field === 'city') this.form.city = list[idx];
    if (field === 'query') this.form.query = list[idx];
  }

  // ── Buscar ────────────────────────────────────────────────────
  search() {
    this.dropdowns = { department: false, city: false, query: false };
    this.searchService.set({
      department: this.form.department.trim(),
      city: this.form.city.trim(),
      query: this.form.query.trim(),
    });
    this.router.navigate([ROUTES.EXPLORE]);
  }

  quickSearch(tag: string) {
    this.form.query = tag;
    this.search();
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    this.auth.logout();
    this.router.navigate([ROUTES.HOME]);
  }
}
