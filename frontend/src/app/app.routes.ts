import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Explore } from './views/explore/explore';

import { MotelProfile } from './views/motel-profile/motel-profile';
import { RoomsMotel } from './views/rooms-motel/rooms-motel';
import { RoomsOfferts } from './views/rooms-offerts/rooms-offerts';

import { UserProfile } from './views/user-profile/user-profile';

import { Dashboard } from './views/dashboard/dashboard';

/* login */
import { LoginComponent } from './views/Forms/login/login.component';
import { ForgotPasswordComponent } from './views/Forms/forgot-password/forgot-password.component';

/** Register  */
import { RegisterUser } from './views/Forms/register/register-user/components/register-user';
import { RegisterSelect } from './views/Forms/register/register-select/register-select';
import { RegisterEstablishmentComponent } from './views/Forms/register/establecimiento/components/register-establishment';
import { RegisterPropertyEst } from './views/Forms/register/register-propertyEst/components/register-propertyEst';
import { PropertyUserComponent } from './views/Propertys-user/property-user.component';
import { ProductRoom } from './views/product-room/product-room';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'explore', component: Explore },
  { path: 'profile-motel', component: MotelProfile },

  { path: 'rooms-motel', component: RoomsMotel },
  { path: 'rooms-offerts', component: RoomsOfferts },

  /*========== REGISTER / LOGUIN ==========*/

  { path: 'select-register', component: RegisterSelect },

  { path: 'register-user', component: RegisterUser },
  { path: 'register-propertyEst', component: RegisterPropertyEst },
  { path: 'dashboard', component: Dashboard },

  { path: 'login', component: LoginComponent },
  { path: 'register-establishment', component: RegisterEstablishmentComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'listProperty', component: PropertyUserComponent },
  { path: 'roominfo', component: ProductRoom },

  /**==== PERFILES DE USURIOS ====== */

  { path: 'userProfile', component: UserProfile },

];
