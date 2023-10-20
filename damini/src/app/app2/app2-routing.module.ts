import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App2cComponent } from './app2c/app2c.component';

const routes: Routes = [
  {path:'app2c', component:App2cComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class App2RoutingModule { }
