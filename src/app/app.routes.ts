// ----------------------------------------------------------------------------------------------------

import { Routes } from '@angular/router';
import { permissionGuard } from './core/guards/permission.guard';

// ----------------------------------------------------------------------------------------------------

// IMPORTS DE COMPONENTES PARA RUTAS

// ----------------------------------------------------------------------------------------------------

// VISTAS INICIALES
import { Home } from './views/home/home';
import { Explore } from './views/explore/explore';

// ----------------------------------------------------------------------------------------------------

// REGISTERS
import { RegisterSelect } from './views/Forms/register/register-select/register-select';
import { RegisterUser } from './views/Forms/register/register-user-client/components/register-user';
import { RegisterOwner } from './views/Forms/register/registes-user-owner/register-owner';

// ----------------------------------------------------------------------------------------------------

//lOGINS AND RECOVER PASSWORD
import { LoginComponent } from './views/Forms/login/login.component';
import { ForgotPasswordComponent } from './views/Forms/forgot-password/forgot-password.component';

// ----------------------------------------------------------------------------------------------------

// PERFILES DE USUARIOS - DASHBOARD

import { UserProfile } from './views/user-profile/profile/user-profile';
import { EditProfileComponent } from './views/user-profile/edit-profile/edit-profile.component';

import { DashboardAdmin } from './views/dashboard/admin/admin';
import { DashboardOwner } from './views/dashboard/owner/owner';

import { CreateMotelComponent } from './views/Forms/create-motel/components/create-motel.component';
import { CreateRoomComponent } from './views/Forms/create-room/components/create-room.component';

// ----------------------------------------------------------------------------------------------------

import { MotelProfile } from './views/motel-profile/motel-profile'; // Perfil detallado de un motel
import { RoomsMotel } from './views/rooms-motel/rooms-motel';
import { PropertyUserComponent } from './components/List-motels/property-user.component';
import { RoomsOfferts } from './views/rooms-offerts/rooms-offerts';
import { ProductRoom } from './views/product-room/product-room'; // Información detallada de una habitación


// ----------------------------------------------------------------------------------------------------

// PAYMENTS

import { PaymentSuccessComponent } from './views/payment/payment-success';
import { PaymentFailureComponent } from './views/payment/payment-failure';


// =====================================================================================================


export const routes: Routes = [
  
  { path: '', component: Home },
  { path: 'explore', component: Explore },
  { path: 'motelProfile/:id', component: MotelProfile },

  { path: 'rooms-motel', component: RoomsMotel },
  { path: 'rooms-offerts', component: RoomsOfferts },

  /*========== PAYMENTS ==========*/
  { path: 'payment/success', component: PaymentSuccessComponent },
  { path: 'payment/failure', component: PaymentFailureComponent },

  /*========== REGISTER / LOGUIN ==========*/

  { path: 'select-register', component: RegisterSelect },
  { path: 'register-user', component: RegisterUser },
  { path: 'register-owner', component: RegisterOwner },

  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

   /**==== PERFILES DE USURIOS ====== */

  { path: 'userProfile', component: UserProfile },
  /* editar perfil */
  { path: 'edit-profile', component: EditProfileComponent },


  // ============== DASHBOARDS ================

  {
    path: 'dashboard/admin',
    canActivate: [permissionGuard('view_dashboard')],
    component: DashboardAdmin,
  },
  {
    path: 'dashboard/owner',
    canActivate: [permissionGuard('view_dashboard')],
    component: DashboardOwner,
  },

  { path: 'create-motel', component: CreateMotelComponent },
  { path: 'create-room', component: CreateRoomComponent },
  { path: 'listProperty', component: PropertyUserComponent }, // Lista de los moteles registrados por el usuario
  { path: 'roominfo', component: ProductRoom }, // Informacion de una habitacion

  /*========== WILDCARD ROUTE ==========*/
  { path: '**', redirectTo: '' },
];
