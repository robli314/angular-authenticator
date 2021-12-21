import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Authenticator } from '../models/authenticator';
@Injectable({
  providedIn: 'root',
})
export class DefaultAuthenticatorService implements Authenticator {

  private _authenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    // not implemented yet
  }

  isAuthenticated(): Observable<boolean> {
    return this._authenticated$.asObservable();
  }

  login(username: string, password: string): Observable<boolean> {
    this._authenticated$.next(true);
    return of(true);
  }

  logout(): Observable<boolean> {
    this._authenticated$.next(false);
    return of(true)
  }
}
