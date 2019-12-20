import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

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

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  register(userEmail, userPwd) {
    return this.authService.SignUp(userEmail.value, userPwd.value);
  }

  socialAuth(name) {
    if (name.toLowerCase() === 'google') {
      return this.authService.GoogleAuth();
    }
  }

}
