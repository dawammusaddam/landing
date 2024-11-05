import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

import { ScrollspyDirective } from './scrollspy.directive';
import { FeatherModule } from 'angular-feather';

import { ClientsLogoComponent } from './clients-logo/clients-logo.component';
import { FeaturesComponent } from './features/features.component';
import { BlogComponent } from './blog/blog.component';
import { CustomerTestmonialComponent } from './customer-testmonial/customer-testmonial.component';
import { ComponentSidebarComponent } from './component-sidebar/component-sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    ScrollspyDirective,
    ClientsLogoComponent,
    FeaturesComponent,
    BlogComponent,
    CustomerTestmonialComponent,
    ComponentSidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    FeatherModule,
    RouterModule
  ],
  exports: [
    ScrollspyDirective,
    ClientsLogoComponent, 
    FeaturesComponent, 
    BlogComponent, 
    CustomerTestmonialComponent,
    ComponentSidebarComponent,
    HeaderComponent
  ]
})

export class SharedModule { }
