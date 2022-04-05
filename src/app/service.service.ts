import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
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
}
