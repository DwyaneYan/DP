import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rebound-picture',
  templateUrl: './rebound-picture.component.html',
  styleUrls: ['./rebound-picture.component.css']
})
export class ReboundPictureComponent implements OnInit {
  public materialId
  constructor(  private router: Router,) { }

  ngOnInit() {this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
