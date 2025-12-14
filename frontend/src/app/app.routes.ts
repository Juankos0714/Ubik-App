import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Explore } from './views/explore/explore';

import { MotelProfile } from './views/motel-profile/motel-profile';
import { ThreeButtom } from './views/three-buttom/three-buttom';
import { RegisterUser } from './views/Forms/register/register-user/register-user';
import { LoginComponent } from './views/Forms/login/login.component';
import { RoomsMotel } from './views/rooms-motel/rooms-motel';
import { RoomsOfferts } from './views/rooms-offerts/rooms-offerts';
import { TodosLosComponentes } from './todos-los-componentes/todos-los-componentes';
import { RegisterSelect } from './views/Forms/register/register-select/register-select';

export const routes: Routes = [

    {path: "", component: Home},
    {path: "explore", component: Explore},
    {path: "Profile", component: MotelProfile},
    {path: "three-buttons", component: ThreeButtom},
    {path: 'register', component: RegisterUser},
    {path: 'login', component: LoginComponent},
    {path: "rooms-motel", component: RoomsMotel},
    {path: "rooms-offerts", component: RoomsOfferts},
    {path: "allc", component: TodosLosComponentes},
    {path: "select-register", component: RegisterSelect},
    {path: "register", component: RegisterUser},
]