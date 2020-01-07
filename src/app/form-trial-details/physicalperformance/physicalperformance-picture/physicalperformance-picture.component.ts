import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-physicalperformance-picture',
  templateUrl: './physicalperformance-picture.component.html',
  styleUrls: ['./physicalperformance-picture.component.css']
})
export class PhysicalperformancePictureComponent implements OnInit {
  public materialId
  constructor( private router: Router,) { }

  ngOnInit() {this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
