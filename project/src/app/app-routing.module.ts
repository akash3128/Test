import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'landing',component:LandingComponent},
  {path:'home',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
