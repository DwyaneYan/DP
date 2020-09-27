import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-physicalperformance',
  templateUrl: './physicalperformance.component.html',
  styleUrls: ['./physicalperformance.component.css']
})
export class PhysicalperformanceComponent implements OnInit {
  public materialId
  p1='wlxn1'
  p2='wlxn2'
  p3='wlxn3'
  p4='wlxn4'

  constructor(  private router: Router,) { }

  ngOnInit() {   this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
