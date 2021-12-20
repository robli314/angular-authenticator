import { Observable } from "rxjs";

export interface Authenticator {
  login(username: string, password: string): Observable<boolean>;
  logout(): Observable<boolean>;
  isAuthenticated(): Observable<boolean>;
}