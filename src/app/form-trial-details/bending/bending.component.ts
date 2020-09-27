import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-bending',
  templateUrl: './bending.component.html',
  styleUrls: ['./bending.component.css']
})
export class BendingComponent implements OnInit {

  public materialId
  p1='wq1'
  p2='wq2'
  p3='wq3'
  p4='wq4'
  constructor(
   
    private router: Router,
  ) { }

  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
