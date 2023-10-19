import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

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

}
