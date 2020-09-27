import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-cementing',
  templateUrl: './cementing.component.html',
  styleUrls: ['./cementing.component.css']
})
export class CementingComponent implements OnInit {
  public materialId
  p1='jjxn1'
  p2='jjxn2'
  p3='jjxn3'
  p4='jjxn4'

  constructor(  private router: Router,) { }

  ngOnInit() {    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
