import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Input() msg:any;
@Output() childmsg = new EventEmitter();

public Data=this.service.DataList;
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.childmsg.emit("child to parent");
    console.log(this.childmsg)
    
  }

}
