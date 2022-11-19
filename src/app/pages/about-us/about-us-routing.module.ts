import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutUsComponent } from "./about-us.component";

const routes:Routes = [
  {
    path: "about-us",
    component: AboutUsComponent
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)], // forRoot website utama sedangkan forChild untuk module yg lain;
  exports: [RouterModule]
  })

export class AboutUsRoutingModule{ }
