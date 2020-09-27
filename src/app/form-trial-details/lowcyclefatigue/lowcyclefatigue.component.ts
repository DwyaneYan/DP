import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lowcyclefatigue',
  templateUrl: './lowcyclefatigue.component.html',
  styleUrls: ['./lowcyclefatigue.component.css']
})
export class LowcyclefatigueComponent implements OnInit {
  public materialId
  p1='dzpl1'
  p2='dzpl2'
  p3='dzpl3'
  p4='dzpl4'

  constructor(  private router: Router,) { }

  ngOnInit() {    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
