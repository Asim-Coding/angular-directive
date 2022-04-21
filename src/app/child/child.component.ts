import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   employee=[
     {id:1, name:'Ahmed', Age:22, Salary:55000, Designation:'web developer'},
     {id:2, name:'Ali', Age:24, Salary:56000, Designation:'game developer'},
     {id:3, name:'bilal', Age:26, Salary:65000, Designation:'app developer'},
     {id:4, name:'Jalal', Age:27, Salary:57000, Designation:'ios developer'},
   ]
}