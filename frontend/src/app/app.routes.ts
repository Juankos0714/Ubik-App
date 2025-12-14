import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { RegisterSelect } from './views/register-select/register-select';

export const routes: Routes = [
    { path: '', component: RegisterSelect },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: Home },
];
