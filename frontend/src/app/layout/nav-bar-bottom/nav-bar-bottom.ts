import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {
  faHouse,
  faCompass,
  faCircleUser,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nav-bar-bottom',
  templateUrl: './nav-bar-bottom.html',
  standalone: true,
  imports: [FontAwesomeModule]
})
export class NavBarBottomComponent implements OnInit {

  isLogged = false;

  faHouse = faHouse;
  faCompass = faCompass;
  faCircleUser = faCircleUser;
  faRightFromBracket = faRightFromBracket;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.checkLogin();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkLogin();
      });
  }

  private checkLogin() {
    this.isLogged = !!localStorage.getItem('auth_token');
  }

  goToProfileOrLogin() {
    this.router.navigate([
      this.isLogged ? '/userProfile' : '/login'
    ]);
  }

  logout() {
    localStorage.removeItem('auth_token');
    sessionStorage.removeItem('auth_token');
    this.isLogged = false;
    this.router.navigate(['/login']);
  }
  goHome() {
    this.router.navigateByUrl('/');
  }
  goExplore(){
    this.router.navigateByUrl('/explore')
  }
}