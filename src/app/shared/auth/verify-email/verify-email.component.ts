import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ngx-verify-email',
  templateUrl: './verify-email.component.html',
})
export class VerifyEmailComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  verifyEmail() {
    return this.authService.SendVerificationMail();
  }

}
