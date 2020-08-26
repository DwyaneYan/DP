import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rebound',
  templateUrl: './rebound.component.html',
  styleUrls: ['./rebound.component.css']
})
export class ReboundComponent implements OnInit {
  public materialId
  name="rebound"
  p1='htxn1'
  p2='htxn2'
  p3='htxn3'
  p4='htxn4'

  constructor(     private router: Router,) { }

  ngOnInit() {    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
