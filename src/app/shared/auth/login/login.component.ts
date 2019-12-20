import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  public socialLinks = [
    {
      icon: 'google',
      title: 'Google',
    },
    {
      icon: 'facebook',
      title: 'Facebook',
    },
  ];
  constructor(
    public authService: AuthService,
  ) {}

  login(userName, userPassword) {
    return this.authService.SignIn(userName.value, userPassword.value);
  }

  socialAuth(name) {
    if (name.toLowerCase() === 'google') {
      return this.authService.GoogleAuth();
    }
  }
}


