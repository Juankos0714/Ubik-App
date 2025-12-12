import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { MotelProfile } from './views/motel-profile/motel-profile';
import { ThreeButtom } from './views/three-buttom/three-buttom';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "Profile", component: MotelProfile},
    {path: "three-buttons", component: ThreeButtom}
    
];
