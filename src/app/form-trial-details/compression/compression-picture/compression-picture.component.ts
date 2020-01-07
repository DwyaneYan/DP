import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-compression-picture',
  templateUrl: './compression-picture.component.html',
  styleUrls: ['./compression-picture.component.css']
})
export class CompressionPictureComponent implements OnInit {
  public materialId
  constructor(    private router: Router,) { }

  ngOnInit() {    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
