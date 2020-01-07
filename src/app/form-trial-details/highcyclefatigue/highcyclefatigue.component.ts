import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-highcyclefatigue',
  templateUrl: './highcyclefatigue.component.html',
  styleUrls: ['./highcyclefatigue.component.css']
})
export class HighcyclefatigueComponent implements OnInit {
  public materialId
  constructor( private route: ActivatedRoute,) { }

  ngOnInit() {   this.route.paramMap.subscribe(params => {
    this.materialId = params.get('materialId');
    })
  }

}
