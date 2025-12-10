import { Routes } from '@angular/router';
import path from 'path';
import { Home } from './views/home/home';
import { Explore } from './views/explore/explore';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "explore", component: Explore},
    
        
];
