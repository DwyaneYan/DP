import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fld',
  templateUrl: './fld.component.html',
  styleUrls: ['./fld.component.css']
})
export class FLDComponent implements OnInit {
  public materialId
  constructor(  private router: Router,) { }

  ngOnInit() {     this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
