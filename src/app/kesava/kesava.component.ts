import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kesava',
  templateUrl: './kesava.component.html',
  styleUrls: ['./kesava.component.css']
})
export class KesavaComponent implements OnInit {

  userName='kesav sai';
  userId=1;
  name='sai';
  allownow=false;
  constructor() { }
  getPop(){
    alert("success !!!")
  }

  ngOnInit(): void {
  }

}
