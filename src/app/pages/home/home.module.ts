import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { CardInformationComponent } from './card-information/card-information.component';
import { AboutComponent } from './about/about.component';
import { RegisterAtComponent } from './register-at/register-at.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    BannerComponent,
    CardInformationComponent,
    AboutComponent,
    RegisterAtComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ],
  exports: [
    BannerComponent,
    CardInformationComponent,
    AboutComponent,
    RegisterAtComponent,
    HomeComponent
  ]
})
export class HomeModule { }
