import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App2cComponent } from 'src/app/app2/app2c/app2c.component';

const routes: Routes = [
  {path:'App2cComponent' ,component:App2cComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
