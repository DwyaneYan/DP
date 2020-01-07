import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-physicalperformance',
  templateUrl: './physicalperformance.component.html',
  styleUrls: ['./physicalperformance.component.css']
})
export class PhysicalperformanceComponent implements OnInit {
  public materialId
  constructor(  private router: Router,) { }

  ngOnInit() {   this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
