import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { Config } from './models/config';
import { DefaultAuthenticatorService } from './services/default-authenticator.service';
import { AUTHENTICATOR_SERVICE_TOKEN } from './tokens/authenticator-service.token';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AuthenticatorModule {
  static forRoot(config?: Config): ModuleWithProviders<AuthenticatorModule> {
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
