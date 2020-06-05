import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lowcyclefatigue',
  templateUrl: './lowcyclefatigue.component.html',
  styleUrls: ['./lowcyclefatigue.component.css']
})
export class LowcyclefatigueComponent implements OnInit {
  public materialId
  name="lowcyclefatigue"
  p1='dzpl1'
  p2='dzpl2'
  p3='dzpl3'
  constructor(  private router: Router,) { }

  ngOnInit() {    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
