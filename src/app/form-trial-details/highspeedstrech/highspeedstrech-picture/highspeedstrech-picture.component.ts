import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-highspeedstrech-picture',
  templateUrl: './highspeedstrech-picture.component.html',
  styleUrls: ['./highspeedstrech-picture.component.css']
})
export class HighspeedstrechPictureComponent implements OnInit {
  public materialId
  constructor( private router: Router,) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
