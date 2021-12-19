import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthenticatorService } from '../authenticator.module';
@Injectable()
export class DefaultAuthenticatorService implements IAuthenticatorService {
  constructor() {
    // not implemented yet
  }
  isAuthenticated(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
  login(username: string, password: string): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
  logout(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
}
