import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-cementing-picture',
  templateUrl: './cementing-picture.component.html',
  styleUrls: ['./cementing-picture.component.css']
})
export class CementingPictureComponent implements OnInit {
  public materialId
  constructor(private router: Router,) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
