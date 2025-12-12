import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button01 } from '../../components/button-01/button-01';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { Inputcomponent } from '../../components/input/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, Button01, Header, Footer, Inputcomponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

}
