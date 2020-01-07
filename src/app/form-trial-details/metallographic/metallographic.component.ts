import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-metallographic',
  templateUrl: './metallographic.component.html',
  styleUrls: ['./metallographic.component.css']
})
export class MetallographicComponent implements OnInit {
  public materialId
  constructor( private router: Router,) { }

  ngOnInit() {    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
