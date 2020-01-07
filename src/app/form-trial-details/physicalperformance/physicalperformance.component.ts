import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-physicalperformance',
  templateUrl: './physicalperformance.component.html',
  styleUrls: ['./physicalperformance.component.css']
})
export class PhysicalperformanceComponent implements OnInit {
  public materialId
  constructor(    private route: ActivatedRoute,) { }

  ngOnInit() {    this.route.paramMap.subscribe(params => {
    this.materialId = params.get('materialId');
    })
  }

}
