import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-lowcyclefatigue',
  templateUrl: './lowcyclefatigue.component.html',
  styleUrls: ['./lowcyclefatigue.component.css']
})
export class LowcyclefatigueComponent implements OnInit {
  public materialId
  constructor(    private route: ActivatedRoute,) { }

  ngOnInit() {    this.route.paramMap.subscribe(params => {
    this.materialId = params.get('materialId');
    })
  }

}
