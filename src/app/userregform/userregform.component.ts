import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-userregform',
  templateUrl: './userregform.component.html',
  styleUrls: ['./userregform.component.css']
})
export class UserregformComponent implements OnInit {
  public dataShow=false;

  registrationForm = new FormGroup({
    fullName : new FormControl(''),
    mobile: new FormControl(''),
    address: new FormControl('')
  });
  

  onSubmit(data:any){
    this.dataShow=true;
    console.log(this.registrationForm.value)
   
  }

  onReset(){
    this.dataShow=false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
