import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welding',
  templateUrl: './welding.component.html',
  styleUrls: ['./welding.component.css']
})
export class WeldingComponent implements OnInit {
  public materialId

  constructor(    private route: ActivatedRoute,) { }

  ngOnInit() {    this.route.paramMap.subscribe(params => {
    this.materialId = params.get('materialId');
    })
  }

}
