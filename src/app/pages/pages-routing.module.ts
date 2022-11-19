import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: "",
        loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
      },
      {
        path: "",
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
      }
    ]
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)], // forRoot website utama sedangkan forChild untuk module yg lain;
  exports: [RouterModule]
  })

export class PagesRoutingModule{ }
