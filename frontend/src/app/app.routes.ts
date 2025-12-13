import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { MotelProfile } from './views/motel-profile/motel-profile';
import { ThreeButtom } from './views/three-buttom/three-buttom';
import { RoomsMotel } from './views/rooms-motel/rooms-motel';
import { RoomsOfferts } from './views/rooms-offerts/rooms-offerts';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "Profile", component: MotelProfile},
    {path: "three-buttons", component: ThreeButtom},
    {path: "rooms-motel", component: RoomsMotel},
    {path: "rooms-offerts", component: RoomsOfferts},
    
];
