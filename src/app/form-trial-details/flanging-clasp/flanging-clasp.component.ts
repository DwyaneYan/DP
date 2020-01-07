import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-flanging-clasp',
  templateUrl: './flanging-clasp.component.html',
  styleUrls: ['./flanging-clasp.component.css']
})
export class FlangingClaspComponent implements OnInit {
  public materialId
  constructor(    private route: ActivatedRoute,) { }

  ngOnInit() {    this.route.paramMap.subscribe(params => {
    this.materialId = params.get('materialId');
    })
  }

}
