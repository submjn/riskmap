import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NbAuthComponent } from '@nebular/auth';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

// Import canActivate guard services
import { SecureInnerPagesGuard } from '../guard/secure-inner-pages.guard';

const routes: Routes = [{
  path: '',
  component: NbAuthComponent,
  children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
      path: 'login',
      component: LoginComponent,
      canActivate: [SecureInnerPagesGuard],
    },
    {
      path: 'register',
      component: RegisterComponent,
      canActivate: [SecureInnerPagesGuard],
    },
    {
      path: 'logout',
      component: LogoutComponent,
    },
    {
      path: 'request-password',
      component: RequestPasswordComponent,
      canActivate: [SecureInnerPagesGuard],
    },
    {
      path: 'reset-password',
      component: ResetPasswordComponent,
    },
    {
      path: 'verify-email',
      component: VerifyEmailComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}

