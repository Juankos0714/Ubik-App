import { Routes } from '@angular/router';
import path from 'path';
import { Home } from './views/home/home';
import { Explore } from './views/explore/explore';
import { LoginComponent } from './views/login/login.component';
import { RegisterUser } from './views/register/user/register-user/register-user';
import { EstablishmentInfo } from './views/register/establishment/info/establishment-info/establishment-info';
import { EstablishmentLocation } from './views/register/establishment/location/establishment-location/establishment-location';
import { EstablishmentImages } from './views/register/establishment/confirm/establishment-images/establishment-images';
import { EstablishmentConfirm } from './views/register/establishment/confirm/establishment-confirm/establishment-confirm';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "explore", component: Explore},

    // ESTAS VISTAS SON LAS QUE HIZO SEBASTIAN -- COMO SE VAN A CAMBIAR LAS DEJO COMENTADAS
    // {path: "register", component: RegisterUser},
    // {path: "login", component: LoginComponent},
    // {path: "confirm", component: EstablishmentConfirm},
    // {path: "info", component: EstablishmentInfo},
    // {path: "img", component: EstablishmentImages}

        
];
