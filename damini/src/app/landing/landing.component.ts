import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { App2Module } from '../app2/app2.module';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(public router: Router)
  { }

  landing()
  {
    this.router.navigateByUrl('landing');
  }
  back()
  {
    this.router.navigateByUrl('back');
  }

  home()
  {
    this.router.navigateByUrl('home');
  }
  admin()
  {
    this.router.navigateByUrl('admin');
  }
  student()
  {
    this.router.navigateByUrl('student');
  }
  test()
  {
    this.router.navigateByUrl('test');
  }
app2module()
{
  this.router.navigateByUrl('app2module/app2c')
}
principal()
{
  this.router.navigateByUrl('principal');
}
}
