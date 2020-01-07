import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fld-picture',
  templateUrl: './fld-picture.component.html',
  styleUrls: ['./fld-picture.component.css']
})
export class FldPictureComponent implements OnInit {
  public materialId
  constructor(private router: Router,) { }

  ngOnInit() {  this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
