/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit, NgZone } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { AuthService } from './shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private analytics: AnalyticsService,
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
