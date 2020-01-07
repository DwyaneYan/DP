import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-bending-picture',
  templateUrl: './bending-picture.component.html',
  styleUrls: ['./bending-picture.component.css']
})
export class BendingPictureComponent implements OnInit {
  materialId
  constructor(    private router: Router,) { }

  ngOnInit() {    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
