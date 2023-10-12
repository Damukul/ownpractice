import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My First Application';
  city1? :any ='udgir';
  city2='latur';

  cars:string[]=['audi','mercedes','benz','jaguar'];
  

}
