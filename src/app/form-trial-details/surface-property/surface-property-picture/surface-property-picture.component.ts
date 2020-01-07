import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-surface-property-picture',
  templateUrl: './surface-property-picture.component.html',
  styleUrls: ['./surface-property-picture.component.css']
})
export class SurfacePropertyPictureComponent implements OnInit {

  public materialId

  constructor(
    private router: Router,

  ) { }

  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    // console.log(this.materialId)
  }

}
