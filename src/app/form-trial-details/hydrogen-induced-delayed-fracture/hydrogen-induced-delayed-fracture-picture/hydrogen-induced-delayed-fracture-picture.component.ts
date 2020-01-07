import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hydrogen-induced-delayed-fracture-picture',
  templateUrl: './hydrogen-induced-delayed-fracture-picture.component.html',
  styleUrls: ['./hydrogen-induced-delayed-fracture-picture.component.css']
})
export class HydrogenInducedDelayedFracturePictureComponent implements OnInit {
  public materialId
  constructor( private router: Router,) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
