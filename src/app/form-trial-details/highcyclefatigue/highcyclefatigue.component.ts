import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-highcyclefatigue',
  templateUrl: './highcyclefatigue.component.html',
  styleUrls: ['./highcyclefatigue.component.css']
})
export class HighcyclefatigueComponent implements OnInit {
  public materialId
  p1='gzpl1'
  p2='gzpl2'
  p3='gzpl3'
  p4='gzpl4'

  constructor(  private router: Router,) { }

  ngOnInit() {   this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
