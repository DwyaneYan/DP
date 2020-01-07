import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-highcyclefatigue',
  templateUrl: './highcyclefatigue.component.html',
  styleUrls: ['./highcyclefatigue.component.css']
})
export class HighcyclefatigueComponent implements OnInit {
  public materialId
  constructor(  private router: Router,) { }

  ngOnInit() {   this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
