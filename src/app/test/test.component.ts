import { Component, OnInit } from '@angular/core';
import { TabledataService } from '../tabledata.service';
import { switchMap } from 'rxjs/operators';
import { Subscription, timer } from 'rxjs';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  id;
  firstname;
  lastname;
  email;
  data: Object;
  subscription: Subscription;
  statusText: string;


  constructor(private ser:TabledataService) { }

  ngOnInit() {
    this.subscription = timer(0, 100).pipe(
      switchMap(() => this.ser.getdata())
    ).subscribe(resp=>this.data=resp);
   
  }


  fun(i){
    console.log(i,"i value")
    this.id=i.id;
    this.firstname=i.fi;
   this. lastname=i.la
   this.email=i.email
  }

}


