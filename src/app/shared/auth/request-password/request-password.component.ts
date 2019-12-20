import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ngx-request-password',
  templateUrl: './request-password.component.html',
})
export class RequestPasswordComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  requestPass(passwordResetEmail) {
    return this.authService.ForgotPassword(passwordResetEmail.value);
  }
}
