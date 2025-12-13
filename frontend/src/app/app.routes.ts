import { Routes } from '@angular/router';
import path from 'path';
import { Home } from './views/home/home';
import { LoginComponent } from './views/login/login.component';
import { RegisterUser } from './views/register/user/register-user/register-user';
import { EstablishmentInfo } from './views/register/establishment/info/establishment-info/establishment-info';
import { EstablishmentLocation } from './views/register/establishment/location/establishment-location/establishment-location';
import { EstablishmentImages } from './views/register/establishment/confirm/establishment-images/establishment-images';
import { EstablishmentConfirm } from './views/register/establishment/confirm/establishment-confirm/establishment-confirm';
import { RegisterSelect } from './views/register-select/register-select';

export const routes: Routes = [
    {path: "", component: RegisterSelect}
    
];
