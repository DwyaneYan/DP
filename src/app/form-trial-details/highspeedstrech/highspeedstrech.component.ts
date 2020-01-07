import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-highspeedstrech',
  templateUrl: './highspeedstrech.component.html',
  styleUrls: ['./highspeedstrech.component.css']
})
export class HighspeedstrechComponent implements OnInit {
  public materialId
  constructor(     private router: Router,) { }

  ngOnInit() {        this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
