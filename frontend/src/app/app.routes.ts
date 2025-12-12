import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Explore } from './views/explore/explore';
import { LoginComponent } from './views/login/login.component';
import { RegisterUser } from './views/register/user/register-user/register-user';
import { EstablishmentInfo } from './views/register/establishment/info/establishment-info/establishment-info';
import { EstablishmentLocation } from './views/register/establishment/location/establishment-location/establishment-location';
import { EstablishmentImages } from './views/register/establishment/confirm/establishment-images/establishment-images';
import { EstablishmentConfirm } from './views/register/establishment/confirm/establishment-confirm/establishment-confirm';
import { MotelProfile } from './views/motel-profile/motel-profile';
import { ThreeButtom } from './views/three-buttom/three-buttom';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "explore", component: Explore},
     {path: "Profile", component: MotelProfile},
    {path: "three-buttons", component: ThreeButtom},
    {path: 'register', component: RegisterUser},
    {path: 'login', component: LoginComponent}


    // ESTAS VISTAS SON LAS QUE HIZO SEBASTIAN -- COMO SE VAN A CAMBIAR LAS DEJO COMENTADAS
    // {path: "register", component: RegisterUser},
    // {path: "login", component: LoginComponent},
    // {path: "confirm", component: EstablishmentConfirm},
    // {path: "info", component: EstablishmentInfo},
    // {path: "img", component: EstablishmentImages}

]