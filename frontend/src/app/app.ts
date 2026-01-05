import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
import { NavBarBottom } from "./layout/nav-bar-bottom/nav-bar-bottom";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, NavBarBottom, FontAwesomeModule],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');
}
