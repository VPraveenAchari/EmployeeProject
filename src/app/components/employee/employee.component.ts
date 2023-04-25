import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
constructor(){}
ngOnIt():void{

}
createEmployee=new FormGroup({
  firstname:new FormControl(""),
  lastname:new FormControl(""),
  phone:new FormControl(""),
  address:new FormControl(""),
  city:new FormControl(""),
  state:new FormControl(""),
  designation:new FormControl(""),
  techstack:new FormControl("")

});
}
