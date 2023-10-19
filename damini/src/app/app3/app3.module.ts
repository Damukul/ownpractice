import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { App3RoutingModule } from './app3-routing.module';
import { App3Component } from './app3/app3/app3.component';


@NgModule({
  declarations: [
    App3Component
  ],
  imports: [
    CommonModule,
    App3RoutingModule
  ]
})
export class App3Module { }
