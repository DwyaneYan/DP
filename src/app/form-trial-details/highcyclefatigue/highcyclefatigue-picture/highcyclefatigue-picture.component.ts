import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-highcyclefatigue-picture',
  templateUrl: './highcyclefatigue-picture.component.html',
  styleUrls: ['./highcyclefatigue-picture.component.css']
})
export class HighcyclefatiguePictureComponent implements OnInit {
  public materialId
  constructor( private router: Router,) { }

  ngOnInit() {this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
