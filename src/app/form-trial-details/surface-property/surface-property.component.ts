import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-surface-property',
  templateUrl: './surface-property.component.html',
  styleUrls: ['./surface-property.component.css']
})
export class SurfacePropertyComponent implements OnInit {
  public materialId
  p1='bmxn1'
  p2='bmxn2'
  p3='bmxn3'
  p4='bmxn4'

  constructor(
    private router: Router,

  ) { }

  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    // console.log(this.materialId)
  }

}
