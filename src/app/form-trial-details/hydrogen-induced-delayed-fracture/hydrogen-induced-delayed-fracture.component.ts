import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hydrogen-induced-delayed-fracture',
  templateUrl: './hydrogen-induced-delayed-fracture.component.html',
  styleUrls: ['./hydrogen-induced-delayed-fracture.component.css']
})
export class HydrogenInducedDelayedFractureComponent implements OnInit {
  public materialId
  p1='qzyckl1'
  p2='qzyckl2'
  p3='qzyckl3'
  p4='qzyckl4'

  constructor(     private router: Router,) { }

  ngOnInit() {   this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
