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

  genderM="Male";

  genderF="Female";
cars: string[] = [];

car1="Audi";
car2="Benz";
car3="Toyota";
car4="mercedes";

studentname: any ="Damini";
empname="Mangesh";

  


carr(event: any){
this.cars.push(event.target.value);
console.log(this.cars);
}
submit(event: any) {
  console.log(event);
}

cancel(event: any) {
  console.log(event);
}

}
