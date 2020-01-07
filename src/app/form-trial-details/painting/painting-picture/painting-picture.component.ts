import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-painting-picture',
  templateUrl: './painting-picture.component.html',
  styleUrls: ['./painting-picture.component.css']
})
export class PaintingPictureComponent implements OnInit {
  public materialId
  constructor( private router: Router,) { }

  ngOnInit() {this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
