import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { PagesComponent } from './pages.component';
import { HomeModule } from './home/home.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';



@NgModule({
  declarations: [
    PagesComponent,
    AboutUsComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
