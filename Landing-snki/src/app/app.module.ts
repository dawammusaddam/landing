import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CountUpModule } from 'ngx-countup';
import { NgxMasonryModule } from 'ngx-masonry';

import { SimplebarAngularModule } from 'simplebar-angular';


import { SharedModule } from "./shared/shared.module";

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { AuthCoverLoginComponent } from './auth/auth-cover-login/auth-cover-login.component';
import { AuthCoverRePasswordComponent } from './auth/auth-cover-re-password/auth-cover-re-password.component';
import { AuthCoverSignupComponent } from './auth/auth-cover-signup/auth-cover-signup.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthLoginThreeComponent } from './auth/auth-login-three/auth-login-three.component';
import { AuthRePasswordComponent } from './auth/auth-re-password/auth-re-password.component';
import { AuthRePasswordThreeComponent } from './auth/auth-re-password-three/auth-re-password-three.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';
import { AuthSignupThreeComponent } from './auth/auth-signup-three/auth-signup-three.component';
import { EmailAlertComponent } from './email/email-alert/email-alert.component';
import { EmailConfirmationComponent } from './email/email-confirmation/email-confirmation.component';
import { EmailInvoiceComponent } from './email/email-invoice/email-invoice.component';
import { EmailPasswordResetComponent } from './email/email-password-reset/email-password-reset.component';
import { IndexComponent } from './core/components/index/index.component';
import { IndexServicesComponent } from './core/components/index-services/index-services.component';
import { NewsDetailComponent } from './core/components/news-detail/news-detail.component';
import { FeatherModule } from 'angular-feather';

// Apex chart
import { NgApexchartsModule } from 'ng-apexcharts';

import { allIcons } from 'angular-feather/icons';
import { FooterComponent } from './shared/footer/footer.component';
import { SwitcherComponent } from './shared/switcher/switcher.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthBsLoginComponent } from './auth/auth-bs-login/auth-bs-login.component';
import { AuthLoginBgVideoComponent } from './auth/auth-login-bg-video/auth-login-bg-video.component';
import { AuthBsSignupComponent } from './auth/auth-bs-signup/auth-bs-signup.component';
import { AuthSignupBgVideoComponent } from './auth/auth-signup-bg-video/auth-signup-bg-video.component';
import { AuthBsResetComponent } from './auth/auth-bs-reset/auth-bs-reset.component';
import { AuthResetPasswordBgVideoComponent } from './auth/auth-reset-password-bg-video/auth-reset-password-bg-video.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsListComponent } from './core/components/news-list/news-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    MasterPageComponent,
    AuthCoverLoginComponent,
    AuthCoverRePasswordComponent,
    AuthCoverSignupComponent,
    AuthLoginComponent,
    AuthLoginThreeComponent,
    AuthRePasswordComponent,
    AuthRePasswordThreeComponent,
    AuthSignupComponent,
    AuthSignupThreeComponent,
    EmailAlertComponent,
    EmailConfirmationComponent,
    EmailInvoiceComponent,
    EmailPasswordResetComponent,
    IndexComponent,
    SwitcherComponent,
    AuthBsLoginComponent,
    AuthLoginBgVideoComponent,
    AuthBsSignupComponent,
    AuthSignupBgVideoComponent,
    AuthBsResetComponent,
    AuthResetPasswordBgVideoComponent,
    IndexServicesComponent,
    NewsDetailComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    FeatherModule.pick(allIcons),
    ScrollToModule.forRoot(),
    RouterModule.forRoot([], {}),
    YouTubePlayerModule,
    NgbDropdownModule,
    CKEditorModule,
    NgbModule,
    NgbNavModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    NgApexchartsModule,
    NgxTypedJsModule,
    FlatpickrModule.forRoot(),
    CountUpModule,
    NgxMasonryModule,
    LightboxModule,
    SharedModule,
    SimplebarAngularModule,
    HttpClientModule
  ],
  exports: [
    FeatherModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
