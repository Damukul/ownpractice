import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { TestComponent } from './test/test.component';
import { AdminComponent } from './admin/admin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BackComponent } from './back/back.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  
 {path:'landing' , component:LandingComponent},
 {path:'home', component:HomeComponent},
 {path:'student', component:StudentComponent},
 {path:'test', component:TestComponent},
 {path:'admin', component:AdminComponent},
 {path:'back', component:BackComponent},
 {path: 'app2module', loadChildren: () => import('./app2/app2.module').then(m=>m.App2Module)},
 {path:'principal',component:PrincipalComponent},
 {path:'**', component:PagenotfoundComponent}
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
