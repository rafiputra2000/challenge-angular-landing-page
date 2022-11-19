import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BlogComponent } from "./blog.component";

const routes:Routes = [
  {
    path: "blog",
    component: BlogComponent
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)], // forRoot website utama sedangkan forChild untuk module yg lain;
  exports: [RouterModule]
  })

export class BlogRoutingModule{ }
