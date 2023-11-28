import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
principalForm!:FormGroup;

constructor(public fb: FormBuilder)
{

}
ngOnInit()
{
  this.load();
}
load()
{
  this.principalForm=this.fb.group({
    Name:['',Validators.required],
    Email:['',Validators.email],

  })
 
}
SUBMIT()
{
  console.log(this.principalForm.value);
}
}
