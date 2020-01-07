import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-chemicalelement',
  templateUrl: './chemicalelement.component.html',
  styleUrls: ['./chemicalelement.component.css']
})
export class ChemicalelementComponent implements OnInit {
  public materialId
  constructor(   private router: Router,) { }

  ngOnInit() {    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
