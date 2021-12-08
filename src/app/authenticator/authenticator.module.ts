import { CommonModule } from '@angular/common';
import {
  InjectionToken,
  ModuleWithProviders,
  NgModule,
  Type
} from '@angular/core';
import { Observable } from 'rxjs';
import { DefaultAuthenticatorService } from './services/default-authenticator.service';
import { LoginComponent } from './components/login/login.component';

export interface IAuthenticatorService {
  login(username: string, password: string): Observable<boolean>;
  logout(): Observable<boolean>;
}

export interface IConfig {
  authenticatorService: Type<IAuthenticatorService>;
}

export const AUTHENTICATOR_SERVICE_TOKEN =
  new InjectionToken<IAuthenticatorService>('AUTHENTICATOR_SERVICE_TOKEN');

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [CommonModule],
})
export class AuthenticatorModule {
  static forRoot(config?: IConfig): ModuleWithProviders<AuthenticatorModule> {
    return {
      ngModule: AuthenticatorModule,
      providers: [
        {
          provide: AUTHENTICATOR_SERVICE_TOKEN,
          useClass:
            (config && config.authenticatorService) ||
            DefaultAuthenticatorService,
        },
      ],
    };
  }
}
