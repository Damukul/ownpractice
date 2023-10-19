import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { Router } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { TestComponent } from './test/test.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BackComponent } from './back/back.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    AdminComponent,
    StudentComponent,
    TestComponent,
    PagenotfoundComponent,
    BackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

