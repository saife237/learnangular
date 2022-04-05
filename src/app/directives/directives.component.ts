import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

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

  public Datadetails= this.service.DataList;
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }

}
