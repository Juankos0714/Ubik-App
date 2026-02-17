import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

import { Users } from '../models/users.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  private http = inject(HttpClient); // esto sirve para inyectar el HttpClient sin necesidad de usar el constructor, httpclient es un servicio que se utiliza para hacer peticiones HTTP a un servidor, como GET, POST, PUT, DELETE, etc. Es parte del módulo HttpClientModule de Angular y se inyecta en los componentes o servicios donde se necesita realizar operaciones HTTP.
  private platformId = inject(PLATFORM_ID);// esto sirve para inyectar el PLATFORM_ID sin necesidad de usar el constructor, PLATFORM_ID es un token de Angular que se utiliza para identificar la plataforma en la que se está ejecutando la aplicación, como navegador, servidor (SSR), etc. Se inyecta para poder realizar comprobaciones específicas según la plataforma, como evitar el acceso a localStorage en SSR.

  private baseUrl = `${environment.apiUrl}/user`; // aca estamos definiendo la URL base para las peticiones relacionadas con el usuario, utilizando una variable de entorno para la parte del dominio y agregando el endpoint específico para usuarios.

  getProfile(): Observable<Users> { 
    
    if (!isPlatformBrowser(this.platformId)) {
      return EMPTY; 
    }

    return this.http.get<Users>(this.baseUrl);
  }
}