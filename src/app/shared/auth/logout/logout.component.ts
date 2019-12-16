import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ngx-logout',
  template: '',
})
export class LogoutComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.logout();
  }

  logout() {
    return this.authService.SignOut();
  }

}
