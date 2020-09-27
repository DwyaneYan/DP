import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welding',
  templateUrl: './welding.component.html',
  styleUrls: ['./welding.component.css']
})
export class WeldingComponent implements OnInit {
  public materialId
  p1='hjxn1'
  p2='hjxn2'
  p3='hjxn3'
  p4='hjxn4'

  constructor(     private router: Router,) { }

  ngOnInit() {    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');

  }

}
