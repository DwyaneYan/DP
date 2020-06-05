import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-secondary-working-embrittlement',
  templateUrl: './secondary-working-embrittlement.component.html',
  styleUrls: ['./secondary-working-embrittlement.component.css']
})
export class SecondaryWorkingEmbrittlementComponent implements OnInit {
  public materialId
  name="secondary-working-embrittlement"
  p1='ecjgcx1'
  p2='ecjgcx2'
  p3='ecjgcx3'
  constructor(   private router: Router,) { }

  ngOnInit() {    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
