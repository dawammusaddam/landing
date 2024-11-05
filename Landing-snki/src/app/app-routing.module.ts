import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthCoverLoginComponent } from './auth/auth-cover-login/auth-cover-login.component';
import { AuthCoverRePasswordComponent } from './auth/auth-cover-re-password/auth-cover-re-password.component';
import { AuthCoverSignupComponent } from './auth/auth-cover-signup/auth-cover-signup.component';
import { AuthLoginThreeComponent } from './auth/auth-login-three/auth-login-three.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthRePasswordThreeComponent } from './auth/auth-re-password-three/auth-re-password-three.component';
import { AuthRePasswordComponent } from './auth/auth-re-password/auth-re-password.component';
import { AuthSignupThreeComponent } from './auth/auth-signup-three/auth-signup-three.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';

import { IndexServicesComponent } from './core/components/index-services/index-services.component';
import { IndexComponent } from './core/components/index/index.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { EmailAlertComponent } from './email/email-alert/email-alert.component';
import { EmailConfirmationComponent } from './email/email-confirmation/email-confirmation.component';
import { EmailInvoiceComponent } from './email/email-invoice/email-invoice.component';
import { EmailPasswordResetComponent } from './email/email-password-reset/email-password-reset.component';
import { SwitcherComponent } from './shared/switcher/switcher.component';
import { combineLatest } from 'rxjs/operators';
import { AuthBsLoginComponent } from './auth/auth-bs-login/auth-bs-login.component';
import { AuthLoginBgVideoComponent } from './auth/auth-login-bg-video/auth-login-bg-video.component';
import { AuthBsSignupComponent } from './auth/auth-bs-signup/auth-bs-signup.component';
import { AuthSignupBgVideoComponent } from './auth/auth-signup-bg-video/auth-signup-bg-video.component';
import { AuthBsResetComponent } from './auth/auth-bs-reset/auth-bs-reset.component';
import { AuthResetPasswordBgVideoComponent } from './auth/auth-reset-password-bg-video/auth-reset-password-bg-video.component';
import { NewsDetailComponent } from './core/components/news-detail/news-detail.component';
import { NewsListComponent } from './core/components/news-list/news-list.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      { path: '', component: IndexServicesComponent },
      { path: 'index', component: IndexComponent },
      
      { path: 'index-services', component: IndexServicesComponent },
      { path: 'news-detail/:slug', component: NewsDetailComponent },
      { path: 'news-list', component: NewsListComponent },
      { path: '#', component: SwitcherComponent },
    ]
  },

  { path: 'auth-login', component: AuthLoginComponent },
  { path: 'auth-bs-login', component: AuthBsLoginComponent },
  { path: 'auth-login-bg-video', component: AuthLoginBgVideoComponent },
  { path: 'auth-cover-login', component: AuthCoverLoginComponent },
  { path: 'auth-cover-re-password', component: AuthCoverRePasswordComponent },
  { path: 'auth-cover-signup', component: AuthCoverSignupComponent },
  { path: 'auth-login-three', component: AuthLoginThreeComponent },
  { path: 'auth-re-password', component: AuthRePasswordComponent },
  { path: 'auth-re-password-three', component: AuthRePasswordThreeComponent },
  { path: 'auth-bs-reset', component: AuthBsResetComponent },
  { path: 'auth-reset-password-bg-video', component: AuthResetPasswordBgVideoComponent },
  { path: 'auth-signup', component: AuthSignupComponent },
  { path: 'auth-bs-signup', component: AuthBsSignupComponent },
  { path: 'auth-signup-bg-video', component: AuthSignupBgVideoComponent },
  { path: 'auth-signup-three', component: AuthSignupThreeComponent },

  { path: 'email-alert', component: EmailAlertComponent },
  { path: 'email-confirmation', component: EmailConfirmationComponent },
  { path: 'email-invoice', component: EmailInvoiceComponent },
  { path: 'email-password-reset', component: EmailPasswordResetComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top",
  scrollOffset: [0, 0],
  // Enable scrolling to anchors
  anchorScrolling: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
