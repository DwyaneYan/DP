import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hydrogen-induced-delayed-fracture',
  templateUrl: './hydrogen-induced-delayed-fracture.component.html',
  styleUrls: ['./hydrogen-induced-delayed-fracture.component.css']
})
export class HydrogenInducedDelayedFractureComponent implements OnInit {
  public materialId
  constructor(    private route: ActivatedRoute,) { }

  ngOnInit() {   this.route.paramMap.subscribe(params => {
    this.materialId = params.get('materialId');
    })
  }

}
