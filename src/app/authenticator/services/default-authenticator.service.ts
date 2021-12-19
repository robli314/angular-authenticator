import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Authenticator } from '../models/authenticator';
@Injectable({
  providedIn: 'root',
})
export class DefaultAuthenticatorService implements Authenticator {
  constructor() {
    // not implemented yet
  }
  isAuthenticated(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
  login(username: string, password: string): Observable<boolean> {
    return of(true);
  }
  logout(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
}
