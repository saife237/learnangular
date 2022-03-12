import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  public isVisable=false;

  getVisable(){
    this.isVisable=true;
  }
  getInvisible(){
    this.isVisable=false;
  }

  public DataList=[
    {
      name:"del",
      id:"123",
      description:"this is a del"
    },
    {
      name:"hp",
      id:"1234",
      description:"this is a hp"
    },
    {
      name:"asus",
      id:"12345",
      description:"this is a asus"
    },
    {
      name:"lenovo",
      id:"123456",
      description:"this is a lenovo"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
