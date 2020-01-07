import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-surface-property',
  templateUrl: './surface-property.component.html',
  styleUrls: ['./surface-property.component.css']
})
export class SurfacePropertyComponent implements OnInit {
  public materialId
  constructor(    private route: ActivatedRoute,) { }

  ngOnInit() {    this.route.paramMap.subscribe(params => {
    this.materialId = params.get('materialId');
    })
  }

}
