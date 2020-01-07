import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lowcyclefatigue',
  templateUrl: './lowcyclefatigue.component.html',
  styleUrls: ['./lowcyclefatigue.component.css']
})
export class LowcyclefatigueComponent implements OnInit {
  public materialId
  constructor(  private router: Router,) { }

  ngOnInit() {    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
