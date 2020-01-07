import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-chemicalelement-picture',
  templateUrl: './chemicalelement-picture.component.html',
  styleUrls: ['./chemicalelement-picture.component.css']
})
export class ChemicalelementPictureComponent implements OnInit {
  public materialId
  constructor( private router: Router,) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
