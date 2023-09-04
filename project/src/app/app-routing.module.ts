import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
  {path:'',component:DashbordComponent},
  {path:'dashbord',component:DashbordComponent},
  {path:'landing',component:LandingComponent},
  {path:'home',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
