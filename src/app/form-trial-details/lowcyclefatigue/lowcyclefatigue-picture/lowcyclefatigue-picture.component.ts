import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lowcyclefatigue-picture',
  templateUrl: './lowcyclefatigue-picture.component.html',
  styleUrls: ['./lowcyclefatigue-picture.component.css']
})
export class LowcyclefatiguePictureComponent implements OnInit {
  public materialId
  constructor( private router: Router,) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
