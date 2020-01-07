import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chemicalelement',
  templateUrl: './chemicalelement.component.html',
  styleUrls: ['./chemicalelement.component.css']
})
export class ChemicalelementComponent implements OnInit {
  public materialId
  constructor(   private route: ActivatedRoute,) { }

  ngOnInit() {    this.route.paramMap.subscribe(params => {
    this.materialId = params.get('materialId');
    })
  }

}
