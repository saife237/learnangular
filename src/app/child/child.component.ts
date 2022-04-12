import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Input() msg:any;
@Output() childmsg:EventEmitter<string> = new EventEmitter<string>();

public Data=this.service.DataList;
  constructor(private service:ServiceService) { }

  onClick(){
    this.childmsg.emit("child to parent");
    
  }

  ngOnInit(): void {
  }

  

}
