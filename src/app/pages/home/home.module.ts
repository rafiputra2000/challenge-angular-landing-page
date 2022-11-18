import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { CardInformationComponent } from './card-information/card-information.component';
import { AboutComponent } from './about/about.component';
import { RegisterAtComponent } from './register-at/register-at.component';



@NgModule({
  declarations: [
    BannerComponent,
    CardInformationComponent,
    AboutComponent,
    RegisterAtComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent,
    CardInformationComponent,
    AboutComponent,
    RegisterAtComponent
  ]
})
export class HomeModule { }
