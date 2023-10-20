import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Student1RoutingModule } from './student1-routing.module';
import { Student1Component } from './student1/student1.component';


@NgModule({
  declarations: [
    Student1Component
  ],
  imports: [
    CommonModule,
    Student1RoutingModule
  ]
})
export class Student1Module { }
