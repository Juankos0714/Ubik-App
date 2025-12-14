import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface UserProfile {
    id: number,
    username: string,
    email: string,
    phone: string,
    password: string,
}

@Injectable({
  providedIn: 'root',
})

export class UserMock {
  getProfile(): Observable<UserProfile> {
    return of({
      id: 1,
      username: 'john_doe',
      email: 'user@gmail.com',
      phone: '123-456-7890',
      password: 'securepassword',
    });
  }
}
