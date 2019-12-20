import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ngx-reset-password',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  resetPass(passwordResetEmail) {
    return this.authService.ForgotPassword(passwordResetEmail.value);
  }
}
