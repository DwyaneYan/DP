import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rebound',
  templateUrl: './rebound.component.html',
  styleUrls: ['./rebound.component.css']
})
export class ReboundComponent implements OnInit {
  public materialId
  constructor(     private router: Router,) { }

  ngOnInit() {    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
