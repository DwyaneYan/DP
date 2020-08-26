import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-chemicalelement',
  templateUrl: './chemicalelement.component.html',
  styleUrls: ['./chemicalelement.component.css']
})
export class ChemicalelementComponent implements OnInit {
  public materialId
  name="chemicalelement"
  p1='hxcf1'
  p2='hxcf2'
  p3='hxcf3'
  p4='hxcf4'

  constructor(   private router: Router,) { }

  ngOnInit() {    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
