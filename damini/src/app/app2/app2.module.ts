import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { App2RoutingModule } from './app2-routing.module';
import { App2cComponent } from './app2c/app2c.component';
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    App2cComponent
  ],
  imports: [
    CommonModule,
    App2RoutingModule
  ]
})
export class App2Module { 

  constructor(public router: Router)
  {

  }
app2c()
{
  this.router.navigateByUrl('app2c');
}
}
