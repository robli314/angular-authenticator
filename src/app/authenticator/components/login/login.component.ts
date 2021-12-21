import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  Authenticator
} from '../../models/authenticator';
import { AUTHENTICATOR_SERVICE_TOKEN } from '../../tokens/authenticator-service.token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    @Inject(AUTHENTICATOR_SERVICE_TOKEN)
    private authenticationService: Authenticator,
    private router: Router
  ) {
    // not implemented yet
  }

  ngOnInit(): void {
    // not implemented yet
  }

  authenticate() {
    this.authenticationService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(() => {
        this.router.navigate(['/'])
      });
  }
}
