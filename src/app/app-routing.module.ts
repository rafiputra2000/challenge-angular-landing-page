import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes:Routes = [
  {
    path: "home",
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
      path: '**',
      component: NotFoundComponent
  }
]



@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot website utama sedangkan forChild untuk module yg lain;
  exports: [RouterModule]
  })

export class AppRoutingModule{ }
